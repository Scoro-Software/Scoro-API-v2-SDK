import { IEvent } from '../../shared/types/event.type'
import { ITimeEntry } from '../../time-entry/types/time-entry.type'

export interface ITask extends IEvent {
  is_completed: boolean
  datetime_completed?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  assigned_to?: number // Deprecated
  related_users: number[]
  related_users_emails: string[]
  duration_actual?: string // Time format (HH:ii:ss)
  start_datetime?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  datetime_due?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  status: 'task_status1' | 'task_status2' | 'task_status3' | 'task_status4'
  status_name?: string // Available in view request
  time_entries?: ITimeEntry[] // Array of tasks' time entries, populated only on view requests
  sortorder?: number
  quote_line_id?: number
  priority_id: 1 | 2 | 3 // Priority of the task: 1 -> high, 2 -> normal, 3 -> low
  ete_id?: number
  activity_id?: number
  activity_type?: string // Not filterable
}
