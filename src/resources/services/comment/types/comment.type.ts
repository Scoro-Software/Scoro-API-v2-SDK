export interface IComment {
  comment_id: string
  parent_id: number
  comment: string
  user_id: number // Mandatory in case of comment creation with API Key
  modified_date: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  permissions?: Record<string, number> // Object user permissions, used only for user-based API list request
}
