export interface IProject {
  project_id: number
  no: number
  project_name: string
  description: string
  company_id: number
  company_name?: string // Only available for user-based API
  is_personal: boolean
  is_private: boolean
  color: string // Format is in hex "#ffffff"
  status: 'pending' | 'inprogress' | 'cancelled' | 'completed' | string
  status_name?: string // Available in view request
  manager_id: number
  manager_email: string
  date: string // Date format (YYYY-mm-dd)
  deadline: string // Date format (YYYY-mm-dd)
  duration: string // Time format (HH:ii:ss)
  phases?: any[] // Project phases, only filled for view requests
  account_id: string
  budget_type: 'quote' | 'simple' | 'advanced' // Possible values
  modified_date: string // Datetime format (YYYY-mm-dd HH:ii:ss)
  deleted_date?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  tags?: string[] // Array of project tags, not used on list requests
  permissions?: any[] // Object user permissions, used only for user-based API
  project_users?: any[] // Project related users, used for modify and view requests
  project_customer_portal_users?: any[] // Project related customer portal users, used only for view requests
  project_accounts?: any[] // Project related accounts, shared between those accounts
  stripDescription?: boolean // Deprecated, use this argument on view requests, strips HTML from project description field, default value is true
  is_role_based?: boolean // If project is role based or service based, available if roles are turned on
  local_price_list_id?: number // Local price list ID, available for role-based projects
  custom_fields?: { id: string; name: string; value: unknown; type: string }[] // Custom fields, only filled on view requests
  is_deleted?: boolean // Is deleted, use 'include_deleted = 1' in request object to get deleted objects to response as well
}
