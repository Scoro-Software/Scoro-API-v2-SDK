import { IAddress } from '../../shared/types/address.type'

export interface IOrder {
  quote_id?: number // Related quote ID
  currency_rate?: number // Exchange rate when invoice is issued
  shipment_date?: string // Order shipment date
  is_role_based?: boolean // Indicates if the document is role-based or service-based
  local_price_list_id?: number // Local price list ID for role-based documents
  id: number // Document ID
  no: number // Document number
  discount: number // Overall discount
  discount2?: number | null // First additional discount
  discount3?: number | null // Second additional discount
  sum: number // Total sum after discounts without VAT
  vat_sum: number // Total VAT sum
  vat?: number // VAT percent
  vat_code_id?: number // Invoice default VAT code ID
  vat_code?: string // VAT code
  company_id: number // ID of the related client
  company_name?: string // Name of the related company
  company_address?: IAddress // Object with company address fields
  person_id?: number // ID of the related contact person
  person_name?: string // Name of the related contact person
  company_address_id?: number // ID of the company address used on the document
  interested_party_id?: number // ID of the interested party
  interested_party_address_id?: number // ID of the interested party address
  project_id: number // ID of the related project
  project_name?: string // Name of the related project
  currency: string // Used currency
  owner_id: number // User ID of the document owner
  owner_email: string // Email of the document owner
  date: string // Document date
  deadline: string // Document deadline
  status: string // Document status
  description: string // Document description
  account_id: string // Related business entity ID
  is_sent: boolean // Indicates if the document is sent
  lines?: IOrderLine[] | null // Array of document lines
  modified_date: string // Date when the document was last modified
  created_date: string // Date and time when the document was created
  custom_fields?: Record<string, unknown> // Custom fields, only filled on view requests
  is_deleted?: boolean // Indicates if the document is deleted
  deleted_date?: string // Date when the document was deleted
}

interface IOrderLine {
  id: number // Document line ID
  product_id: number // ID of the product
  product_name?: string // Name of the product (available in view request)
  product_code?: string // Product code (available in view request)
  comment?: string // Line comment
  comment2?: string // Second line comment
  price: number // Unit price
  amount: number // Amount
  amount2?: number // Additional amount
  discount?: number // Line discount
  sum: number // Line sum without VAT
  vat?: number // Line tax percent
  vat_code_id?: number // Line tax ID
  unit?: string // Unit name
  finance_object_id?: number // ID of the related accounting object
  finance_object_name?: string // Name of the related accounting object (available in view request)
  finance_object_symbol?: string // Symbol of the related accounting object (available in view request)
  finance_account_id?: number // ID of the related finance account
  finance_account_name?: string // Name of the related finance account (available in view request)
  finance_account_symbol?: string // Symbol of the related finance account (available in view and modify request)
  cost?: number // Line cost
  supplier_id?: number // ID of the contact supplying the product on this line
  doer_id?: number // ID of the user doing the work
  role_id?: number | null // ID of the role doing the work
  is_internal?: boolean // Indicates whether line is counted as internal or external
  project_id: number // ID of the related project
  project_name?: string // Name of the related project (available in view request)
  vat_code?: string // VAT code (available in view request)
  doer_email?: string // Email of the user doing the work
  role_name?: string | null // Name of the role doing the work
  dates?: { [date: string]: number } // Object with dates as keys and amounts as values
  custom_fields?: Record<string, unknown> // Custom fields, only filled on view requests
}
