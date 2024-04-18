import { IAddress } from '../../shared/types/address.type'

export interface IContact {
  contact_id: number
  name: string
  lastname?: string // Used only for persons
  search_name?: string // Not used on modify requests
  contact_type?: 'person' | 'company' // Default is 'company' if none specified
  id_code?: string
  bankaccount?: string
  birthday?: string // Date format (YYYY-mm-dd), can be without a year
  position?: string
  comments?: string
  sex?: 'F' | 'M'
  vatno?: string
  timezone?: string
  manager_id?: number
  manager_email?: string
  is_supplier?: boolean
  is_client?: boolean
  client_profile_id?: number
  created_date?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  modified_date?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  deleted_date?: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
  addresses?: IAddress[] // Array of address objects
  means_of_contact?: Record<string, string | string[]> // Object containing means of contact
  tags?: string[] // Array of contact tags
  reference_no?: string
  cat_id?: number
  cat_name?: string
  contact_users?: IContact[] // Contact related users
  related_companies?: {
    related_company_id: number
    related_company_name: string
  }[] // Array of related company objects, filled only for contacts of type person
  permissions?: Record<string, unknown>[] // Object user permissions, used only for user-based API
  contact_picture?: string // Contact profile image URL
  custom_fields?: Record<string, unknown> // Custom fields, only filled on view requests
  is_deleted?: boolean // Is deleted, use 'include_deleted = 1' in request object to get deleted objects to response as well
}
