import { useState } from 'react'

import {  MoreHorizontal, PlusCircleIcon, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import type {
  TStructureItem,
  TStructurePosition
} from '@/shared/mock/organization-data'

import { StepAppointment } from '../step/step-appointment'
import { StepCheck } from '../step/step-check'
import { StepLine } from '../step/step-line'
import { StepRegistration } from '../step/step-registration'

interface TProps {
  structurePosition?: TStructurePosition
  structureData?: TStructureItem
}

export const HrOrgStructureAction = (props: TProps) => {
  const { structurePosition, structureData } = props
  const [step, setStep] = useState<'check' | 'registration' | 'position-add'>(
    'check'
  )

  const [open, setOpen] = useState<Record<'edit', boolean>>({
    edit: false
  })

  const renderStep = () => {
    switch (step) {
      case 'check':
        return <StepCheck setStep={setStep} />

      case 'registration':
        return <StepRegistration setStep={setStep} />

      case 'position-add':
        return <StepAppointment setOpen={setOpen} setStep={setStep} />
    }
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="hover:bg-transparent">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Үйлдэл</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setOpen((prev) => ({ ...prev, edit: true }))}
          >
            <PlusCircleIcon className="text-emerald-600" /> Албан хаагч томилох
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog
        open={open['edit']}
        onOpenChange={(value) => {
          setOpen({ edit: value })
          if (!value) {
            setStep('check')
          }
        }}
      >
        <DialogContent className="sm:min-w-7xl   max-h-[90vh] overflow-y-auto ">
          <div className="flex flex-col ">
            <DialogHeader className="mb-0  h-fit ">
              <DialogTitle className="w-full flex items-center justify-between text-lg">
                Албан хаагч томилох
                <DialogClose className="cursor-pointer">
                  <X className="size-5" />
                </DialogClose>
              </DialogTitle>
              <DialogDescription className="sr-only ">_</DialogDescription>
            </DialogHeader>
            <div className="py-2">
              <StepLine step={step} />
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4 text-sm border mt-2 rounded-lg  ">
              <div className="space-y-1">
                <dt className="text-muted-foreground">Бүтцийн өөрчлөлт:</dt>
                <dd>{structureData?.name}</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-muted-foreground">Бүтцийн нэгж:</dt>
                <dd>Төрийн захиргаа удирдлагын газар</dd>
              </div>

              <div className="space-y-1">
                <dt className="text-muted-foreground">Албан тушаал:</dt>
                <dd>{structurePosition?.group}</dd>
              </div>
            </dl>

            <div className="mt-6 ">{renderStep()}</div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
