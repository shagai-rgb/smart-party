import { useState } from 'react'

import { ImageIcon, ImagePlusIcon, XIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

type TLogoSource = {
  logo?: string | null
}
type TProps = {
  source?: TLogoSource
}

export const OrgLogoForm = (props: TProps) => {
  const { source } = props
  const { control } = useFormContext()
  const [logoPreview, setLogoPreview] = useState<string | null>(
    source?.logo || null
  )

  return (
    <FormField
      control={control}
      name="logo"
      render={({ field }) => {
        const handleRemove = () => {
          setLogoPreview(null)
          field.onChange(null)
        }

        return (
          <FormItem>
            <FormLabel>
              <ImageIcon />
              Лого:
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (!file) return

                    field.onChange(file)
                    setLogoPreview(URL.createObjectURL(file))
                  }}
                />

                <label
                  htmlFor="logo-upload"
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors overflow-hidden"
                >
                  {logoPreview ? (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="max-h-full max-w-full object-contain"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={handleRemove}
                        className="absolute top-2 right-2 h-8 w-8"
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-center">
                      <ImagePlusIcon className="h-10 w-10 text-muted-foreground/50" />
                      <span className="text-sm text-muted-foreground">
                        Лого оруулах
                      </span>
                    </div>
                  )}
                </label>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
