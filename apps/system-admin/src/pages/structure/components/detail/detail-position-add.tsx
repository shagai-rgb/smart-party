import { useState } from 'react'

import {
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Layers3,
  PlusCircle,
  PlusIcon,
  Search,
  X
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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

const units = [
  { id: 1, name: 'Удирдлагын алба' },
  { id: 2, name: 'Санхүү, нягтлан бодох бүртгэлийн алба' },
  { id: 3, name: 'Төрийн захиргаа удирдлагын газар' },
  { id: 4, name: 'Маркетингийн алба' },
  { id: 5, name: 'Борлуулалтын алба' },
  { id: 6, name: 'Удирдлагын алба' },
  { id: 7, name: 'Санхүү, нягтлан бодох бүртгэлийн алба' },
  { id: 8, name: 'Хүний нөөцийн алба' },
  { id: 9, name: 'Маркетингийн алба' },
  { id: 10, name: 'Борлуулалтын алба' },
  { id: 11, name: 'Удирдлагын алба' },
  { id: 12, name: 'Санхүү, нягтлан бодох бүртгэлийн алба' },
  { id: 13, name: 'Хүний нөөцийн алба' },
  { id: 14, name: 'Маркетингийн алба' },
  { id: 15, name: 'Борлуулалтын алба' },
  { id: 16, name: 'Удирдлагын алба' },
  { id: 17, name: 'Санхүү, нягтлан бодох бүртгэлийн алба' },
  { id: 18, name: 'Хүний нөөцийн алба' },
  { id: 19, name: 'Маркетингийн алба' },
  { id: 20, name: 'Борлуулалтын алба' }
]

export type TInitial = {
  id: number
  name: string
}

const positions: TInitial[] = [
  { id: 1, name: 'Төрийн захиргаа, удирдлагын газрын дарга' },
  { id: 2, name: 'Дэд захирал' },
  { id: 3, name: 'Албаны дарга' },
  { id: 4, name: 'Ахлах мэргэжилтэн' },
  { id: 5, name: 'Мэргэжилтэн' }
]

export default function DetailPositionAdd() {
  const [step, setStep] = useState<'unit' | 'position'>('unit')
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null)
  const [availablePositions, setAvailablePositions] = useState(positions)
  const [selectedPositions, setSelectedPositions] = useState<TInitial[]>([])
  const [availableSearch, setAvailableSearch] = useState('')
  const [selectedSearch, setSelectedSearch] = useState('')
  const [draggedItem, setDraggedItem] = useState<{
    item: TInitial
    source: string
  } | null>(null)

  const handleUnitSelect = (unitId: number) => {
    setSelectedUnit(unitId)
    setStep('position')
  }

  const handleBack = () => {
    setStep('unit')
  }

  const handleSubmit = () => {
    console.log('unit', selectedUnit)
    console.log('positions', selectedPositions)
  }

  const handleReset = () => {
    setStep('unit')
    setSelectedUnit(null)
    setSelectedPositions([])
    setAvailablePositions(positions)
    setAvailableSearch('')
    setSelectedSearch('')
  }

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
      setSelectedPositions([...selectedPositions, draggedItem.item])
      setAvailablePositions(
        availablePositions.filter((u) => u.id !== draggedItem.item.id)
      )
    }
    setDraggedItem(null)
  }

  const handleDropToAvailable = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (draggedItem && draggedItem.source === 'selected') {
      setAvailablePositions([...availablePositions, draggedItem.item])
      setSelectedPositions(
        selectedPositions.filter((u) => u.id !== draggedItem.item.id)
      )
    }
    setDraggedItem(null)
  }

  const removeFromSelected = (id: number) => {
    const item = selectedPositions.find((u) => u.id === id)
    if (item) {
      setSelectedPositions(selectedPositions.filter((u) => u.id !== id))
      setAvailablePositions([...availablePositions, item])
    }
  }

  const addToSelected = (id: number) => {
    const item = availablePositions.find((u) => u.id === id)
    if (item) {
      setAvailablePositions(availablePositions.filter((u) => u.id !== id))
      setSelectedPositions([...selectedPositions, item])
    }
  }

  const filteredAvailablePositions = availablePositions.filter((pos) =>
    pos.name.toLowerCase().includes(availableSearch.toLowerCase())
  )

  const filteredSelectedPositions = selectedPositions.filter((pos) =>
    pos.name.toLowerCase().includes(selectedSearch.toLowerCase())
  )

  return (
    <Dialog onOpenChange={handleReset}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="flex items-center gap-1.5"
          variant="create"
        >
          <PlusCircle strokeWidth={2} className="size-4" />
          Албан тушаал нэмэх
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-7xl min-h-[80vh] ">
        <DialogHeader>
          <DialogTitle className="w-full items-center flex justify-between text-lg">
            Албан тушаал нэмэх
            <DialogClose className="cursor-pointer hover:opacity-70 transition-opacity">
              <X className="size-5" />
            </DialogClose>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Бүтцийн өөрчлөлт: 2025 оны 06 сарын 01-ний өдрийн өөрчлөлт
          </DialogDescription>
        </DialogHeader>

        <div className="relative  ">
          <div className="flex items-center justify-center relative max-w-5xl mx-auto">
            <div className="flex items-start justify-between w-full relative z-10">
              <div className="flex flex-col items-center gap-4 flex-1 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm px-4 py-2 rounded-xl">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center font-semibold transition-all duration-500 border-2 ${
                    step === 'unit'
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 ring-4 ring-blue-100 shadow-lg shadow-blue-200/50 scale-110'
                      : step === 'position'
                        ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-emerald-600 shadow-md'
                        : 'bg-white text-slate-400 border-slate-200 shadow-sm'
                  }`}
                >
                  {step === 'position' ? (
                    <Check className="w-7 h-7" strokeWidth={3} />
                  ) : (
                    <Layers3 className="w-7 h-7" />
                  )}
                </div>
                <div className="text-center">
                  <div
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      step === 'position'
                        ? 'text-emerald-700'
                        : 'text-slate-500'
                    }`}
                  >
                    {step === 'position' && selectedUnit
                      ? units.find((u) => u.id === selectedUnit)?.name
                      : 'Бүтцийн нэгж сонгоно уу'}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    Алхам 1
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 flex-1 bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-sm px-4 py-2 rounded-xl">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center font-semibold transition-all duration-500 border-2 ${
                    step === 'position'
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 ring-2 ring-blue-100 shadow-lg shadow-blue-200/50 scale-110'
                      : 'bg-white text-slate-400 border-slate-200 shadow-sm'
                  }`}
                >
                  <BriefcaseBusiness className="w-7 h-7" />
                </div>
                <div className="text-center">
                  <div
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      step === 'position' ? 'text-blue-700' : 'text-slate-500'
                    }`}
                  >
                    Албан тушаал сонгоно уу
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    Алхам 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 ">
          {step === 'unit' ? (
            <div className="space-y-2">
              <div className="px-3">
                <InputGroup>
                  <InputGroupInput placeholder="Хайлт..." />
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                </InputGroup>
              </div>

              <ScrollArea className="h-[400px] overflow-hidden p-3">
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {units.map((unit) => (
                    <button
                      key={unit.id}
                      onClick={() => handleUnitSelect(unit.id)}
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 ${
                        selectedUnit === unit.id
                          ? 'border-blue-400 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{unit.name}</span>
                        <ChevronRight
                          className={`w-5 h-5 transition-colors ${
                            selectedUnit === unit.id
                              ? 'text-blue-600'
                              : 'text-gray-400'
                          }`}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden h-[400px]">
                  <div className="rounded-t-lg flex items-center justify-center font-semibold transition-all duration-500 border-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-md  p-3">
                    Боломжит албан тушаалын жагсаалт
                  </div>

                  <ScrollArea
                    className="h-[350px] overflow-hidden p-3"
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
                        <Search />
                      </InputGroupAddon>
                    </InputGroup>
                    <div className="flex flex-col gap-4 mt-2">
                      {filteredAvailablePositions.length === 0 ? (
                        <div className="text-center text-slate-400 py-8">
                          Боломжит албан тушаалын жагсаалт байхгүй
                        </div>
                      ) : (
                        filteredAvailablePositions.map((position) => (
                          <div
                            key={position.id}
                            draggable
                            onDragStart={(e) =>
                              handleDragStart(e, position, 'available')
                            }
                            className="flex items-center cursor-move  gap-2 p-3 bg-white border rounded  hover:bg-slate-50 hover:border-blue-400 transition-colors"
                          >
                            <span className="flex-1">{position.name}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => addToSelected(position.id)}
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

                <div className="border rounded-lg overflow-hidden h-[400px]">
                  <div className="rounded-t-lg flex items-center justify-center font-semibold transition-all duration-500 border-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-md  p-3">
                    Сонгосон албан тушаалын жагсаалт
                  </div>
                  <ScrollArea
                    className="h-[350px] overflow-hidden p-3"
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
                        <Search />
                      </InputGroupAddon>
                    </InputGroup>
                    <div className="flex flex-col gap-4 mt-2">
                      {filteredSelectedPositions.length === 0 ? (
                        <div className="text-center text-slate-400 py-8">
                          Албан тушаал чирж оруулна уу
                        </div>
                      ) : (
                        filteredSelectedPositions.map((position) => (
                          <div
                            key={position.id}
                            draggable
                            onDragStart={(e) =>
                              handleDragStart(e, position, 'selected')
                            }
                            className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded cursor-move hover:bg-blue-100 transition-colors"
                          >
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeFromSelected(position.id)}
                              className="h-7 w-7 p-0"
                            >
                              <X className="w-4 h-4" />
                            </Button>

                            <span className="flex-1">{position.name}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </ScrollArea>
                </div>
              </div>

              <div className="flex justify-between items-center w-full gap-3 pt-6  ">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  className="rounded-2xl flex items-center justify-center font-semibold"
                >
                  <ChevronLeft />
                  Буцах
                </Button>

                <Button
                  onClick={handleSubmit}
                  variant="create"
                  className="rounded-2xl "
                >
                  <PlusIcon />
                  Нэмэх
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
