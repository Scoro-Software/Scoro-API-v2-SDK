export interface IActivity {
  activity_id: number
  name: string
  parent_id: number
  parent_name: string
  is_group: boolean
  is_active: boolean
  product_id: number
  modified_date: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
}
