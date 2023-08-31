export type AccountType = {
  label: string
  value: string
  debits?: AccountValue[]
  credits?: AccountValue[]
  type: 'debit' | 'credit' | 'income' | 'expense'
  visible: boolean
}

type AccountValue = {
  id: string
  amount: number
}

export const accountList: AccountType[] = [
  // Aktivkonten
  {
    value: 'bank',
    label: 'Bank',
    type: 'debit',
    debits: [],
    credits: [],
    visible: true,
  },
  {
    value: 'kasse',
    label: 'Kasse',
    type: 'debit',
    debits: [],
    credits: [],
    visible: false,
  },
  {
    value: 'fahrzeuge',
    label: 'Fahrzeuge',
    type: 'debit',
    debits: [],
    credits: [],
    visible: false,
  },
  {
    value: 'immobilien',
    label: 'Immobilien',
    type: 'debit',
    debits: [],
    credits: [],
    visible: false,
  },

  // Passivkonten
  {
    value: 'eigenkapital',
    label: 'Eigenkapital',
    type: 'credit',
    debits: [],
    credits: [],
    visible: false,
  },
]
