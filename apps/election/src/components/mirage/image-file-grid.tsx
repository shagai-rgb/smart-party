import { useEffect, useState } from 'react'

import { ChevronsUpDownIcon, XIcon } from 'lucide-react'
import { Fragment } from 'react/jsx-runtime'

import { dx } from '@/lib/dx'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'

import { get_file_key } from '@/shared/utils/file'

interface TProps {
  files: File[]
  onRemove?: (key: string) => () => void
}

export default function ImageFileGrid(props: TProps) {
  const { files, onRemove } = props
  const [previews, setPreviews] = useState<Record<string, string>>({})

  useEffect(() => {
    setPreviews(
      files.reduce((p, n) => {
        return {
          ...p,
          [get_file_key(n)]: URL.createObjectURL(n)
        }
      }, {})
    )
  }, [files])

  useEffect(() => {
    return () => {
      Object.keys(previews).forEach((key) => {
        URL.revokeObjectURL(previews[key])
      })
    }
  }, [previews])

  const Comp = onRemove ? 'button' : 'div'

  return (
    <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button className="w-full justify-between" variant="outline">
          <span className={dx('label-02', 'font-medium')}>
            Preview{' '}
            <span className={dx('label-02', 'text-muted-foreground')}>
              ({files.length} {files.length > 1 ? 'files' : 'file'})
            </span>
          </span>

          <ChevronsUpDownIcon />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="grid grid-cols-3 gap-1.5 py-3">
          {files.map((file) => (
            <Comp
              key={get_file_key(file)}
              className={cn(
                'w-full h-full aspect-square',
                onRemove && 'cursor-pointer relative group'
              )}
              {...(onRemove && {
                type: 'button',
                'aria-label': 'Remove Image',
                onClick: onRemove(get_file_key(file))
              })}
            >
              <img
                src={previews[get_file_key(file)]}
                alt={file.name}
                className="object-cover w-full h-full"
              />
              {onRemove && (
                <Fragment>
                  <div className="absolute inset-0 flex items-center bg-destructive/80 justify-center opacity-0 group-hover:opacity-100 text-destructive-foreground transition-opacity">
                    <XIcon className="size-10" />
                  </div>
                  <span className="sr-only">Remove Image</span>
                </Fragment>
              )}
            </Comp>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
