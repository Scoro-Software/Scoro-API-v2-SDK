export interface IContactRelatedObjects {
  tasks: DataItem[]
  calendar: DataItem[]
  projects: DataItem[]
  invoices: DataItem[]
  prepayments: DataItem[]
  bills: DataItem[]
  quotes: DataItem[]
  orders: DataItem[]
  files: DataItem[]
}

interface DataItem {
  items: unknown[] // This array may contain specific objects depending on the type of data
  totals: unknown[] // This array may contain totals or aggregated data depending on the type of data
}
