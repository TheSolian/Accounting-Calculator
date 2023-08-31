import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addTransaction } from '@/redux/slices/TransactionSlice'
import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { Icons } from './Icons'
import Transaktion from './Transaktion'
import { Button } from './ui/button'

interface TransaktionsListeProps {}

const TransaktionsListe: React.FC<TransaktionsListeProps> = ({}) => {
  const transactions = useAppSelector((state) => state.transactions.value)
  const dispatch = useAppDispatch()

  return (
    <div className='flex flex-col items-center'>
      <div>
        {transactions.map((transaction) => {
          return <Transaktion key={transaction.id} id={transaction.id} />
        })}
      </div>
      <div>
        <Button onClick={() => dispatch(addTransaction({ id: nanoid() }))}>
          <Icons.plus />
        </Button>
      </div>
    </div>
  )
}

export default TransaktionsListe
