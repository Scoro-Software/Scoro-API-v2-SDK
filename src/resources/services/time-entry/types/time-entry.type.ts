export interface ITimeEntry {
  time_entry_id: number
  description: string
  title: string
  user_id: number
  activity_id: number
  invoice_line_id: number
  event_id: number
  event_type: 'task' | 'cal'
  calendar_event_id: number
  time_entry_type: 'task' | 'cal'
  start_datetime: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  end_datetime: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  duration: string // Time format (HH:ii:ss), rounded to the nearest minute
  billable_duration: string // Time format (HH:ii:ss), rounded to the nearest minute
  is_completed: boolean
  is_confirmed: boolean
  is_billable: boolean
  completed_datetime: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  is_locked?: boolean // Only available if "Use time locking" setting is enabled
  permissions?: Record<string, unknown>[] // Object user permissions, used only for user-based API
  modified_date: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  is_deleted?: boolean // Is deleted, use 'include_deleted = 1' in request object to get deleted objects to response as well
  deleted_date?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP), the date when object was deleted
}
