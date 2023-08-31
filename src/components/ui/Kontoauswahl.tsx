import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { accountList } from '@/lib/accountList'
import { cn } from '@/lib/utils'
import { useAppDispatch } from '@/redux/hooks'
import { editTransaction } from '@/redux/slices/TransactionSlice'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

type AccountSelectionProps = {
  id: string
  side: 'soll' | 'haben'
}

export function Kontoauswahl({ id, side }: AccountSelectionProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    switch (side) {
      case 'soll':
        dispatch(editTransaction({ id, from: value }))
        break
      case 'haben':
        dispatch(editTransaction({ id, to: value }))
        break
    }
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between flex-1'
        >
          {value
            ? accountList.find((account) => account.value === value)?.label
            : 'Konto auswählen...'}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Konto suchen...' />
          <CommandEmpty>Kein Konto gefunden.</CommandEmpty>
          <CommandGroup>
            {accountList.map((account) => (
              <CommandItem
                key={account.value}
                onSelect={(currentValue: string) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === account.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {account.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
