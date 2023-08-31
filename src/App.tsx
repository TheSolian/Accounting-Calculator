import KontoListe from './components/KontoListe'
import TransaktionsListe from './components/TransaktionsListe'
import { Calendar } from './components/ui/calendar'
import { Card } from './components/ui/card'
import { useAppSelector } from './redux/hooks'

function App() {
  // const transactions = useAppSelector((state) => state.transactions.value)

  return (
    <div className='flex flex-col justify-center pt-16 gap-32'>
      <TransaktionsListe />
      <KontoListe />
      <Calendar />
      {/* <div className='flex flex-col gap-4'>
        {transactions.map((transaction) => {
          return (
            <div key={transaction.id}>
              <div>ID: {transaction.id}</div>
              <div>NUMBER: {transaction.number}</div>
              <div>AMOUNT: {transaction.amount}</div>
              <div>FROM: {transaction.from}</div>
              <div>TO: {transaction.to}</div>
            </div>
          )
        })}
      </div> */}
    </div>
  )
}

export default App
