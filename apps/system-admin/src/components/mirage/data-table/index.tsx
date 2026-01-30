import { type TdHTMLAttributes } from 'react'

import {
  type ColumnDef,
  type TableOptions,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'

import { dx } from '@/lib/dx'

import { DataTableColumnHeader } from '@/components/mirage/data-table/column-header'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { MODULE_COLORS, useModule } from '@/shared/contexts/module.context'

import DataTablePagination from './pagination'
import DataTableToolbar from './toolbar'
import type { DataTableMetaOptions, TFilterVariant } from './utils'

declare module '@tanstack/react-table' {
  // eslint-disable-next-line
  interface ColumnMeta<TData, TValue> {
    align?: TdHTMLAttributes<HTMLTableCellElement>['align']
    label?: string
    filterVariant?: TFilterVariant
    size?: number
  }
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  meta?: DataTableMetaOptions
  options?: Omit<TableOptions<TData>, 'data' | 'columns' | 'getCoreRowModel'>
  toolbar_actions?: React.ReactNode
}

interface RowData {
  isGroupHeader?: boolean
  name?: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  meta,
  options = {},
  toolbar_actions
}: DataTableProps<TData, TValue>) {
  const { module } = useModule()
  const moduleColor = MODULE_COLORS[module]
  const table = useReactTable({
    data,
    columns,
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    ...options,
    defaultColumn: {
      enableColumnFilter: false,
      enableSorting: false,
      ...options.defaultColumn
    },
    state: {
      ...options.state
    },
    initialState: {
      pagination: {
        pageSize: 50,
        pageIndex: 0
      },
      ...options.initialState
    }
  })

  return (
    <div className="relative w-full h-full grid grid-cols-1 bg-card grid-rows-[max-content_auto_max-content] border overflow-hidden overflow-y-scroll">
      {!meta?.hideToolbar && (
        <DataTableToolbar isLoading={meta?.isLoading} table={table}>
          {toolbar_actions}
        </DataTableToolbar>
      )}
      <ScrollArea orientation="horizontal" className="h-full">
        <Table className="w-full table-fixed overflow-hidden">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      align={header.column.columnDef.meta?.align || 'left'}
                      className="text-white hover:text-white"
                      style={{
                        width: header.getSize(),
                        backgroundColor: `${moduleColor}B3`
                      }}
                    >
                      <DataTableColumnHeader header={header} table={table} />
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => {
                const rowData = row.original as RowData
                const isGroupHeader = rowData.isGroupHeader

                if (isGroupHeader) {
                  return (
                    <TableRow key={row.id}>
                      <TableCell
                        colSpan={columns.length}
                        className=" h-10 text-center py-4"
                      >
                        {rowData.name}
                      </TableCell>
                    </TableRow>
                  )
                }

                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className={index % 2 === 0 ? 'bg-white ' : 'bg-gray-100 '}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        align={cell.column.columnDef.meta?.align || 'left'}
                        className="whitespace-nowrap overflow-hidden text-ellipsis"
                        style={{ width: cell.column.getSize() }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })
            ) : (
              <TableRow className="border-b-0">
                <TableCell
                  colSpan={columns.length}
                  className={dx('label-01', 'h-80 text-center')}
                >
                  Мэдээлэл олдсонгүй
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </ScrollArea>
      <div className="flex flex-col gap-3 p-2 items-end">
        <DataTablePagination table={table} tableMeta={meta} />
      </div>
    </div>
  )
}
