import { Fragment, useState } from 'react'

import { EditIcon, MoreHorizontalIcon, XIcon } from 'lucide-react'

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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import type { TUnit } from '@/shared/mock/organization-data'

import { StructureUnitEdit } from './unit-edit'

interface TProps {
  unit?: TUnit
}

export const UnitAction = ({ unit }: TProps) => {
  const [open, setOpen] = useState<Record<'detail' | 'edit', boolean>>({
    detail: false,
    edit: false
  })

  return (
    <Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="hover:bg-transparent">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Үйлдэл</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setOpen((prev) => ({ ...prev, detail: true }))}
          >
            <EditIcon className="text-blue-600" /> Засах
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog
        open={open.detail}
        onOpenChange={(isOpen) =>
          setOpen((prev) => ({ ...prev, detail: isOpen }))
        }
      >
        <DialogContent className="min-w-6xl p-6 ">
          <DialogHeader className=" h-fit pb-0 ">
            <DialogTitle className="flex w-full items-center justify-between">
              Бүтцийн нэгж :: Дэлгэрэнгүй мэдээлэл
              <div className="flex items-center gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <MoreHorizontalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="z-100">
                    <DropdownMenuItem
                      className="flex items-center gap-1.5"
                      onSelect={() => {
                        setOpen((prev) => ({ ...prev, detail: false }))
                        setOpen((prev) => ({ ...prev, edit: true }))
                      }}
                    >
                      <EditIcon className="text-blue-500" /> Засах
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DialogClose className="cursor-pointer ">
                  <XIcon className="size-5 hover:rotate-180 transition-transform duration-300" />
                </DialogClose>
              </div>
            </DialogTitle>
            <DialogDescription className="sr-only">_</DialogDescription>
          </DialogHeader>
          <div className="my-4 space-y-10 ">
            <div className="flex items-center justify-between gap-4 rounded-lg border p-4  ">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Бүтцийн нэгжийн нэр:
                </p>
                <p>{unit?.name}</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Товч нэр:</p>
                <p>{unit?.short_name}</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Бүртгэсэн огноо:
                </p>
                <p>{unit?.registration_date}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Өөрчлөлтийн түүх</h4>

              <Table className="border bg-white ">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40px]">#</TableHead>
                    <TableHead>Нэр</TableHead>
                    <TableHead>Идэвхитэй</TableHead>
                    <TableHead>Огноо</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell>1.</TableCell>
                    <TableCell>Бүтцийн өөрчлөлт 1</TableCell>
                    <TableCell>
                      <span className="text-green-600 font-medium">
                        Идэвхитэй
                      </span>
                    </TableCell>
                    <TableCell>2024-01-10</TableCell>
                  </TableRow>

                  <TableRow className="hover:bg-muted/50">
                    <TableCell>2.</TableCell>
                    <TableCell>Бүтцийн өөрчлөлт 2</TableCell>
                    <TableCell>
                      <span className="text-muted-foreground">Идэвхгүй</span>
                    </TableCell>
                    <TableCell>2023-11-02</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <StructureUnitEdit
        onOpenChange={(isOpen) =>
          setOpen((prev) => ({ ...prev, edit: isOpen }))
        }
        open={open['edit']}
        unit={unit}
      />
    </Fragment>
  )
}
