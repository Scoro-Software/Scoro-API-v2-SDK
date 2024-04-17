export interface IUser {
  id: number
  username: string
  firstname: string
  lastname: string
  full_name: string
  initials: string
  email: string
  is_active?: boolean // Deprecated
  status: 'active' | 'inactive' | 'pending' | 'awaiting'
  birthday?: string // Date format (YYYY-mm-dd)
  category?: 'user' | 'admin' | 'cupo' // Possible values: user, admin or customer portal. Default values: user, admin
  position?: string
  user_picture?: string // User profile image URL, available only for "list" and "view" actions
  role_id?: number
  user_groups_ids?: number[] // User groups ID-s
  country_id?: string
  gsm?: string // User phone number
  timezone?: string
  modified_date: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP), the date when user was last modified
}
