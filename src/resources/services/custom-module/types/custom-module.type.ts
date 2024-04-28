export interface ICustomModule {
  id: number
  title: string
  path: string
  full_path: string
  parent_module_id: number
  primary_custom_field_name: string
  modified_date: string // Use DateTime type if available in your environment
  modified_user: number
  created_date: string // Use DateTime type if available in your environment
  created_user: number
  use_permissions: boolean
  use_statuses: boolean
  use_board_view: boolean
}
