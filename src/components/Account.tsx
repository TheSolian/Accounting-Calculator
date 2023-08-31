import { AccountType } from '@/lib/accountList'
import React, { useState } from 'react'

interface AccountProps {
  account: AccountType
}

const Account: React.FC<AccountProps> = ({ account }) => {
  const [isDebitOrExpense, setIsDebitOrExpense] = useState(debitOrExpense())
  const [sum, setSum] = useState(calculateSum())

  function debitOrExpense() {
    return account.type === 'debit' || account.type === 'expense'
  }

  function calculateSum(numbers?: boolean) {
    let sumOfDebits = 0
    let sumOfCredits = 0

    account.debits &&
      account.debits.forEach((debit) => (sumOfDebits += debit.amount))
    account.credits &&
      account.credits.forEach((credit) => (sumOfCredits += credit.amount))

    if (sumOfDebits > sumOfCredits) {
      if (numbers) return sumOfDebits
      return 'debit'
    } else {
      if (numbers) return sumOfCredits
      return 'credit'
    }
  }

  function calculateBalance() {
    let sumOfDebits = 0
    let sumOfCredits = 0

    account.debits &&
      account.debits.forEach((debit) => (sumOfDebits += debit.amount))
    account.credits &&
      account.credits.forEach((credit) => (sumOfCredits += credit.amount))

    if (sumOfDebits > sumOfCredits) {
      return sumOfDebits - sumOfCredits
    } else {
      return sumOfCredits - sumOfDebits
    }
  }

  return (
    <div className={`mt-8 ${account.visible ? 'block' : 'hidden'}`}>
      <div className='w-[250px]'>
        <div className='flex justify-between items-center'>
          <div>{isDebitOrExpense ? '+' : '-'}</div>
          <div>{account.label}</div>
          <div>{!isDebitOrExpense ? '+' : '-'}</div>
        </div>
        <div>
          <div>
            <div className='h-[2px] bg-black'></div>
          </div>
          <div className='flex'>
            <div className='flex-1 text-end pr-2 py-2 mb-8 relative'>
              {account.debits &&
                account.debits.map((debit) => (
                  <div key={debit.id}>{debit.amount}</div>
                ))}
              <div
                className={`absolute -bottom-6 left-2 ${
                  calculateSum() === 'credit' && 'hidden'
                }`}
              >
                <b>S:</b> {calculateBalance()}
              </div>
            </div>
            <div className='w-[2px] bg-black'></div>
            <div className='flex-1 text-end pr-2 pt-2 mb-8 relative'>
              {account.credits &&
                account.credits.map((credit) => (
                  <div key={credit.id}>{credit.amount}</div>
                ))}
              <div
                className={`absolute -bottom-6 left-2 ${
                  sum === 'debit' && 'hidden'
                }`}
              >
                <b>S:</b>{' '}
                {typeof calculateBalance() !== 'number'
                  ? 0
                  : calculateBalance()}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='h-[2px] bg-black'></div>
          <div className='flex w-full'>
            <div className='flex-1 text-center p-[2px]'>
              {calculateSum(true).toString().substring(1, 10)}
            </div>
            <div className='w-[2px] bg-black'></div>
            <div className='flex-1 text-center p-[2px]'>{sum}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
