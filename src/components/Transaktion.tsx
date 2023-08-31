import { useAppDispatch } from '@/redux/hooks'
import {
  editTransaction,
  removeTransaction,
} from '@/redux/slices/TransactionSlice'
import React, { useEffect } from 'react'
import { Icons } from './Icons'
import { Kontoauswahl } from './ui/Kontoauswahl'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface TransactionProps {
  id: string
}

const Transaktion: React.FC<TransactionProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  const [state, setState] = React.useState(0)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className='flex gap-2 mb-4'>
      <Input
        type='text'
        className='w-[50px]'
        placeholder='Nr.'
        onChange={(e) =>
          dispatch(editTransaction({ id, number: e.target.value }))
        }
      />
      <Kontoauswahl id={id} side='soll' />
      <Kontoauswahl id={id} side='haben' />
      <Input
        placeholder='Betrag'
        type='number'
        className='w-1/5'
        onChange={(e) => {
          dispatch(editTransaction({ id, amount: e.target.value }))
          setState(Number(e.target.value))
        }}
      />
      <Button variant={'ghost'} onClick={() => dispatch(removeTransaction(id))}>
        <Icons.trash />
      </Button>
    </div>
  )
}

export default Transaktion
