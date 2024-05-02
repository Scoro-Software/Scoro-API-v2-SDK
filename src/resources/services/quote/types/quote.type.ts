import { IAddress } from '../../shared/types/address.type'

export interface IQuote {
  confirmed_date?: string // Quote confirmed date in ISO 8601 format
  estimated_closing_date?: string // Date when quote is estimated to be set to closed status in YYYY-mm-dd format
  company_name: string // Name of the related company
  person_name: string // Name of the related contact person
  company_address?: IAddress // Object with address fields
  project_name?: string // Name of the related project
  vat_code?: string // VAT code
  currency_rate?: number // Exchange rate when invoice is issued
  status_name?: string // Status name
  shipment_date?: string // Quote shipment date in YYYY-mm-dd format
  is_role_based?: boolean // If document is role based or service based
  local_price_list_id?: number // Local price list ID for role-based documents
  estimated_duration?: number // Estimated duration in months
  id: number // Document ID
  no: number // Document number
  discount: number // Overall discount
  discount2?: number | null // First additional discount
  discount3?: number | null // Second additional discount
  sum: number // Total sum after discounts without VAT
  vat_sum: number // Total VAT sum
  vat?: number // VAT percent
  vat_code_id?: number // Invoice default VAT code ID
  company_id: number // ID of the related client
  person_id?: number // ID of the related contact person
  company_address_id?: number // Company address ID
  interested_party_id?: number // Interested party ID
  interested_party_address_id?: number // Interested party address ID
  project_id?: number // ID of the related project
  currency: string // Used currency
  owner_id: number // User ID of the user responsible for the document
  owner_email: string // Email of the user responsible for the document
  date: string // Document date in YYYY-mm-dd format
  deadline: string // Document deadline in YYYY-mm-dd format
  status: string // Status of the document
  description: string // Document description
  account_id: string // Related business entity ID
  is_sent: boolean // If document is sent
  lines?: IQuoteLine[] // Document lines
  modified_date: string // Date when document was last modified in ISO 8601 format
  created_date: string // Date and time when document was created in ISO 8601 format
  custom_fields?: { id: string; name: string; value: unknown; type: string }[] // Custom fields, only filled on view requests
  is_deleted: boolean // If the document is deleted
  deleted_date?: string // Date when object was deleted in ISO 8601 format
}

interface IQuoteLine {
  dates?: Record<string, number> // Object with dates as keys and amounts as values
  is_confirmed?: boolean // Quote line confirmation state
  product_name?: string // Name of the product
  product_code?: string // Product code
  finance_account_name?: string // Name of the related finance account
  finance_object_name?: string // Name of the related accounting object
  finance_object_symbol?: string // Symbol of the related accounting object
  supplier_name?: string // Name of the contact supplying the product on this line
  project_name?: string // Name of the related project
  vat_code?: string // VAT code
  doer_email?: string // Email of the user doing the work
  role_name?: string | null // Name of the role doing the work
  id: number // Document line ID
  product_id: number // ID of the product
  comment?: string // Line comment
  comment2?: string // Second line comment
  price: number // Unit price
  amount: number // Amount
  amount2: number // Additional amount
  discount: number // Line discount
  sum: number // Line sum without VAT
  vat: number // Line tax percent
  vat_code_id: number // Line tax id
  unit?: string // Unit name
  finance_object_id?: number // ID of the related accounting object
  finance_account_id?: number // ID of the related finance account
  finance_account_symbol?: string // Symbol of the related finance account
  cost?: number // Line cost
  supplier_id?: number // ID of the contact supplying the product on this line
  doer_id?: number // ID of the user doing the work
  role_id?: number | null // ID of the role doing the work
  is_internal: boolean // Shows whether line is counted as internal or external
  project_id: number // ID of the related project
  custom_fields?: { id: string; name: string; value: unknown; type: string }[] // Custom fields, only filled on view requests
}
