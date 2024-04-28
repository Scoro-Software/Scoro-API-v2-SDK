export interface IStatus {
  status_id: string // Status ID
  status_name: string // Status name
  color: string // Status color identifier
  module: string // Status module
  is_default: boolean // Shows if status is selected by default when creating new objects
  modified_date: string // The date when resource was last modified (in ISO 8601 format)
}
