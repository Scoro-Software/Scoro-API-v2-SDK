import { IEventResource } from '../../event-resource/types/events-resorces.types'
import { IEvent } from '../../shared/types/event.type'
import { IUser } from '../../user/types/user.type'

export interface ICalendar extends IEvent {
  address: string
  start_datetime: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  end_datetime: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  full_day_event: boolean
  status: 'busy' | 'free' | 'tentative' | 'outofoffice' | string
  status_name?: string // Available in view request
  cal_user?: IUser[] // Users related with this event, populated only on view requests. For modify requests it takes an array of user IDs
  resources?: IEventResource[] // Array of resources related to calendar event, populated only on view requests
  related_task_id?: number // Related Task ID, used when calendar event is related to a task
  guests?:
    | {
        contact_id: number
        guest_email: string
      }[]
    | string // Array of guests linked to calendar event, not filterable
  call_link?: string // Conference call link attached to calendar event, not filterable
  activity_id?: number
  activity_type?: string // Activity type, not filterable
  project_phase_id?: number
  project_name?: string // Used only for user-based API
  person_name?: string // Used only for user-based API
  invoice_id?: number
  order_id?: number
  quote_id?: number
  purchase_order_id?: number
  rent_order_id?: number
  bill_id?: number
  duration_planned: string // Time format (HH:ii:ss), rounded to the nearest minute
  billable_hours: string // Time format (HH:ii:ss), rounded to the nearest minute
  permissions?: Record<string, unknown>[] // Object user permissions, used only for user-based API
  is_deleted?: boolean // Is deleted, use 'include_deleted = 1' in request object to get deleted objects to response as well
  deleted_date?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP), the date when object was deleted
}
