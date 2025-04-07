export interface IExternalData {
  external_id?: string
  external_system?: string
  external_modified_date?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  uid?: string
  is_up_to_date?: boolean
  external_guests?: string[] // Array of external guests linked to calendar event
  external_repeat_id?: string // ID of the parent event in case of a repeated event
  external_repeat_uid?: string // UID of the parent event in case of a repeated event
  external_meta_data?: Record<string, unknown> // External meta data object with unknown keys and values, not filterable
}
