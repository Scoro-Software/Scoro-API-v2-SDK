export interface IProjectRelatedObjects {
  companies: DataItem[]
  contacts: DataItem[]
  tasks: DataItem[]
  calendar: DataItem[]
  invoices: DataItem[]
  prepayments: DataItem[]
  bills: DataItem[]
  quotes: DataItem[]
  orders: DataItem[]
  files: DataItem[]
  budgets: DataItem[]
}

interface DataItem {
  items: unknown[] // This array may contain specific objects depending on the type of data
  totals: unknown[] // This array may contain totals or aggregated data depending on the type of data
}
