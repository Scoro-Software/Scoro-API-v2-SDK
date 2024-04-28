export interface IFinanceAccount {
  id: number
  account_symbol: string
  name: string
  parent_id: number
  parent_name: string
  is_active: boolean
  is_sales_account: boolean
  is_purchases_account: boolean
  created_date: string // Datetime string
  modified_date: string // Datetime string
}
