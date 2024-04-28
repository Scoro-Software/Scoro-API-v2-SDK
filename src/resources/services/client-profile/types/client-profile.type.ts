export interface IClientProfile {
  id: number
  name: string
  discount: string
  discount2: string
  discount3: string
  vat_code_id: number
  deadline_days: number
  fine: string
  currency: string
  payment_type: string
  language_id: string
  price_list_id: number
  created_date: string // Datetime string
  modified_date: string // Datetime string
}
