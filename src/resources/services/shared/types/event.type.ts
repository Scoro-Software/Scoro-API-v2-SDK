export interface IEvent {
  event_id: number
  event_name: string
  description: string
  is_personal: boolean
  project_id: number
  project_phase_id?: number
  project_name?: string // Used only for user-based API
  company_id: number
  company_name: string
  person_id: number
  person_name?: string // Used only for user-based API
  invoice_id?: number
  order_id?: number
  quote_id?: number
  purchase_order_id?: number
  rent_order_id?: number
  bill_id?: number
  duration_planned: string // Time format (HH:ii:ss), rounded to the nearest minute
  billable_hours: string // Time format (HH:ii:ss), rounded to the nearest minute
  owner_id: number
  created_user: number
  modified_user: number
  owner_email: string
  modified_date: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  created_date: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP), cannot be modified through API
  permissions?: any[] // Object user permissions, used only for user-based API
  custom_fields?: { id: string; name: string; value: unknown; type: string }[] // Custom fields, only filled on view requests
  is_deleted?: boolean // Is deleted, use 'include_deleted = 1' in request object to get deleted objects to response as well
  deleted_date?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP), the date when object was deleted
}
