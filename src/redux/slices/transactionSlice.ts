import { createSlice, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type Transaction = {
  id: string
  number: string
  amount: number
  from: string
  to: string
}

export interface TransactionState {
  value: Transaction[]
}

const initialState: TransactionState = {
  value: [
    {
      id: nanoid(),
      number: '',
      amount: 0,
      from: '',
      to: '',
    },
  ],
}

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.value.push(action.payload)
    },
    editTransaction: (state, action) => {
      const { id, ...rest } = action.payload
      const index = state.value.findIndex(
        (transaction) => transaction.id === id
      )
      state.value[index] = { ...state.value[index], ...rest }
    },
    removeTransaction: (state, action) => {
      if (state.value.length === 1) return

      state.value = state.value.filter(
        (transaction) => transaction.id !== action.payload
      )
    },
  },
})

export const { addTransaction, editTransaction, removeTransaction } =
  transactionSlice.actions
export const selectTransactions = (state: RootState) => state.transactions.value
export default transactionSlice.reducer
