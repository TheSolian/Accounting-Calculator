import { configureStore } from '@reduxjs/toolkit'
import { transactionSlice } from './slices/TransactionSlice'

const store = configureStore({
  reducer: {
    transactions: transactionSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
