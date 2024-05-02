import { IAddress } from '../../shared/types/address.type'

export interface IExpense {
  id: number // Document ID
  no: number // Document number
  due_date: string // Document due date (YYYY-mm-dd)
  recognition_date?: string // The date when the document will be recognized (YYYY-mm-dd)
  owner_id: number // User ID of the document owner
  comment?: string // Document comment
  is_chargeable: boolean // Shows if expense is chargeable to the client
  is_reimbursable?: boolean // Shows if the expense is reimbursable
  owner_name?: string // Name of the expense owner (available in view request)
  company_id: number // The ID of the related issuer
  status: string // Status of the document (paid, unpaid)
  sum: number // Total sum without tax
  tax_sum: number // Total tax sum
  tax_percentage?: number // Document tax percentage
  tax_code_id?: number // Document tax id
  tax_code?: string // Document tax code (available in view request)
  account_id: string // Related business entity
  modified_date?: string // The date when the document was last modified
  created_date?: string // The date and time when the document was created
  deleted_date?: string // The date when the object was deleted
  company_name?: string // Name of the related company (available in view request)
  company_address?: IAddress // Object with address fields
  person_id?: number // ID of the related contact person
  person_name?: string // Name of the related contact person (available in view request)
  project_id: number // ID of the related project
  project_name?: string // Name of the related project (available in view request)
  currency: string // Used currency
  owner_email: string // E-mail of user that is responsible for the document
  date: string // Document date (YYYY-mm-dd)
  currency_rate?: number // Exchange rate when invoice is issued
  lines?: IExpenseLine[] | null // Document lines
  is_deleted: boolean // Is deleted
  custom_fields?: { id: string; name: string; value: unknown; type: string }[] // Custom fields, only filled on view requests
}

interface IExpenseLine {
  id: number // Document line ID
  description?: string // Line description
  additional_description?: string // Second line description (if activated)
  quantity: number // Quantity
  additional_quantity?: number // Additional quantity (if activated)
  sum: number // Line sum without tax
  tax_percentage?: number // Line tax percent (if activated)
  tax_code_id?: number // Line tax id (if activated)
  tax_code?: string // Tax code (if activated)
  accounting_object_id?: number // ID of the related accounting object (if activated)
  accounting_object_name?: string // Name of the related accounting object (if activated)
  accounting_object_symbol?: string // Symbol of the related accounting object (if activated)
  finance_account_id?: number // ID of the related finance account (if activated)
  product_id: number // ID of the product
  product_name?: string // Name of the product (available in view request)
  product_code?: string // Product code (if activated)
  price: number // Unit price
  unit?: string // Unit name
  finance_account_name?: string // Name of the related finance account (if activated)
  finance_account_symbol?: string // Symbol of the related finance account (if activated)
  project_id?: number // ID of the related project
  project_name?: string // Name of the related project (available in view request)
  custom_fields?: { id: string; name: string; value: unknown; type: string }[] // Custom fields, only filled on view requests
}
