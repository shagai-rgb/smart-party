import { useState } from 'react'

import { PlusCircle, PlusCircleIcon, SearchIcon, X, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from '@/components/ui/input-group'
import { ScrollArea } from '@/components/ui/scroll-area'

export type TInitial = {
  id: number
  name: string
}
const INITIAL_AVAILABLE_UNITS: TInitial[] = [
  { id: 1, name: 'Удирдлагын албан' },
  { id: 2, name: 'Санхүүгийн алба' },
  { id: 3, name: 'Хүний нөөцийн алба' },
  { id: 4, name: 'Маркетингийн алба' },
  { id: 5, name: 'Технологийн алба' },
  { id: 6, name: 'Борлуулалтын алба' },
  { id: 7, name: 'Удирдлагын албан' },
  { id: 8, name: 'Санхүүгийн алба' },
  { id: 9, name: 'Хүний нөөцийн алба' },
  { id: 10, name: 'Маркетингийн алба' },
  { id: 11, name: 'Технологийн алба' },
  { id: 12, name: 'Борлуулалтын алба' }
]

export default function DetailUnitAdd() {
  const [availableUnits, setAvailableUnits] = useState(INITIAL_AVAILABLE_UNITS)
  const [selectedUnits, setSelectedUnits] = useState<TInitial[]>([])
  const [availableSearch, setAvailableSearch] = useState('')
  const [selectedSearch, setSelectedSearch] = useState('')
  const [draggedItem, setDraggedItem] = useState<{
    item: TInitial
    source: string
  } | null>(null)

  const filteredAvailableUnits = availableUnits.filter((unit) =>
    unit.name.toLowerCase().includes(availableSearch.toLowerCase())
  )

  const filteredSelectedUnits = selectedUnits.filter((unit) =>
    unit.name.toLowerCase().includes(selectedSearch.toLowerCase())
  )

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: TInitial,
    source: string
  ) => {
    setDraggedItem({ item, source })
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDropToSelected = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (draggedItem && draggedItem.source === 'available') {
      setSelectedUnits([...selectedUnits, draggedItem.item])
      setAvailableUnits(
        availableUnits.filter((u) => u.id !== draggedItem.item.id)
      )
    }
    setDraggedItem(null)
    setAvailableSearch('')
    setSelectedSearch('')
  }

  const handleDropToAvailable = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (draggedItem && draggedItem.source === 'selected') {
      setAvailableUnits([...availableUnits, draggedItem.item])
      setSelectedUnits(
        selectedUnits.filter((u) => u.id !== draggedItem.item.id)
      )
    }
    setDraggedItem(null)
    setAvailableSearch('')
    setSelectedSearch('')
  }

  const removeFromSelected = (id: number) => {
    const item = selectedUnits.find((u) => u.id === id)
    if (item) {
      setSelectedUnits(selectedUnits.filter((u) => u.id !== id))
      setAvailableUnits([...availableUnits, item])
    }
    setAvailableSearch('')
    setSelectedSearch('')
  }

  const addToSelected = (id: number) => {
    const item = availableUnits.find((u) => u.id === id)
    if (item) {
      setAvailableUnits(availableUnits.filter((u) => u.id !== id))
      setSelectedUnits([...selectedUnits, item])
    }
    setAvailableSearch('')
    setSelectedSearch('')
  }

  const handleSave = () => {
    console.log(selectedUnits)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="create"
          size="sm"
          className="flex items-center gap-1.5"
        >
          <PlusCircle className="w-4 h-4" />
          Бүтцийн нэгж нэмэх
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-7xl min-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="w-full items-center text-lg flex justify-between">
            Бүтцийн нэгж нэмэх
            <DialogClose className="cursor-pointer">
              <XIcon className="size-5" />
            </DialogClose>
          </DialogTitle>
          <DialogDescription className="w-full text-center text-base text-black">
            Бүтцийн өөрчлөлт: 2025 оны 06 сарын 01-ний өдрийн өөрчлөлт
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="rounded-t-lg flex items-center justify-center font-semibold transition-all duration-500 border-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-md  p-3">
              Боломжит бүтцийн нэгжийн жагсаалт
            </div>

            <ScrollArea
              className="h-[500px] overflow-hidden p-3 "
              onDragOver={handleDragOver}
              onDrop={handleDropToAvailable}
            >
              <InputGroup>
                <InputGroupInput
                  placeholder="Хайлт..."
                  value={availableSearch}
                  onChange={(e) => setAvailableSearch(e.target.value)}
                />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
              </InputGroup>
              <div className="flex flex-col gap-4 mt-2 ">
                {filteredAvailableUnits.length === 0 ? (
                  <div className="text-center text-slate-400 py-8">
                    Боломжит бүтцийн нэгж байхгүй
                  </div>
                ) : (
                  filteredAvailableUnits.map((unit) => (
                    <div
                      key={unit.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, unit, 'available')}
                      className="flex items-center gap-2 p-3 bg-white border rounded cursor-move hover:bg-slate-50 hover:border-slate-400 transition-colors"
                    >
                      <span className="flex-1">{unit.name}</span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => addToSelected(unit.id)}
                        className="h-7 px-2"
                      >
                        →
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="rounded-t-lg flex items-center justify-center font-semibold transition-all duration-500 border-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-md  p-3">
              Сонгосон бүтцийн нэгжийн жагсаалт
            </div>
            <ScrollArea
              className="h-[500px] overflow-hidden p-3"
              onDragOver={handleDragOver}
              onDrop={handleDropToSelected}
            >
              <InputGroup>
                <InputGroupInput
                  placeholder="Хайлт..."
                  value={selectedSearch}
                  onChange={(e) => setSelectedSearch(e.target.value)}
                />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
              </InputGroup>
              <div className="flex flex-col gap-4 mt-2 ">
                {filteredSelectedUnits.length === 0 ? (
                  <div className="text-center text-slate-400 py-8">
                    Бүтцийн нэгж чирж оруулна уу
                  </div>
                ) : (
                  filteredSelectedUnits.map((unit) => (
                    <div
                      key={unit.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, unit, 'selected')}
                      className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded cursor-move hover:bg-blue-100 transition-colors"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFromSelected(unit.id)}
                        className="h-7 w-7 p-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>

                      <span className="flex-1">{unit.name}</span>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleSave}
            disabled={selectedUnits.length === 0}
            variant="create"
          >
            <PlusCircleIcon />
            Нэмэх ({selectedUnits.length})
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
