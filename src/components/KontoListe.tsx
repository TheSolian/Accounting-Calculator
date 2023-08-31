import { AccountType, accountList } from '@/lib/accountList'
import { useAppSelector } from '@/redux/hooks'
import React, { useEffect } from 'react'
import Account from './Account'

interface KontolisteProps {}

const KontoListe: React.FC<KontolisteProps> = ({}) => {
  const transactions = useAppSelector((state) => state.transactions.value)
  const [accounts, setAccounts] = React.useState<AccountType[]>(accountList)

  useEffect(() => {
    transactions.forEach((transaction) => {
      const { id, from, to, amount } = transaction

      const fromAccount = accounts.find((account) => account.value === from)
      const toAccount = accounts.find((account) => account.value === to)

      // if (!fromAccount && !toAccount) return

      const debitAccountValue = fromAccount?.debits?.find(
        (accountValue) => accountValue.id === id
      )

      fromAccount?.visible
      if (debitAccountValue) {
        debitAccountValue.amount = amount
      } else {
        fromAccount?.debits?.push({ id, amount })
      }

      const creditAccountValue = toAccount?.credits?.find(
        (accountValue) => accountValue.id === id
      )

      toAccount?.visible
      if (creditAccountValue) {
        creditAccountValue.amount = amount
      } else {
        toAccount?.credits?.push({ id, amount })
      }
    })
  }, [transactions])

  return (
    <div className='flex flex-col items-center'>
      {/* <Account account={accounts[0]} /> */}
      {/* <h1 className='text-4xl font-bold'>Konten</h1>
      <div className={`m-16 ${debitAccounts.length === 0 && 'hidden'}`}>
        <h2 className='mb-2 text-xl'>Aktivkonten</h2>
        <div className='grid grid-cols-4 max-w-[75%]'>
          {debitAccounts.map((account) => (
            <Account key={account.value} account={account} />
          ))}
        </div>
      </div>
      <div className={`m-16 ${creditAccounts.length === 0 && 'hidden'}`}>
        <h2 className='mb-2 text-xl'>Passivkonten</h2>
        <div className='grid grid-cols-4 max-w-[75%]'>
          {creditAccounts.map((account) => (
            <Account key={account.value} account={account} />
          ))}
        </div>
      </div>
      <div className={`m-16 ${expenseAccounts.length === 0 && 'hidden'}`}>
        <h2 className='mb-2 text-xl'>Aufwandskonten</h2>
        <div className='grid grid-cols-4 max-w-[75%]'>
          {expenseAccounts.map((account) => (
            <Account key={account.value} account={account} />
          ))}
        </div>
      </div>
      <div className={`m-16 ${incomeAccounts.length === 0 && 'hidden'}`}>
        <h2 className='mb-2 text-xl'>Ertragskonten</h2>
        <div className='grid grid-cols-4 max-w-[75%]'>
          {incomeAccounts.map((account) => (
            <Account key={account.value} account={account} />
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default KontoListe
