import { IAddress } from '../../shared/types/address.type'

export interface IBill {
  id: number // Document ID
  no: string // Document number
  is_chargeable: boolean // Indicates if bill is chargeable to the client
  dateofpayment: string // Date of payment in YYYY-mm-dd format
  payment_type: string // Payment type: banktransfer, cash, cardpayment, credit, barter
  recognition_date: string // Recognition date in YYYY-mm-dd format
  reference_no?: string // Reference number (available in view/modify request)
  purchase_order_id?: number // Related purchase order ID (available in view request and list request)
  discount: number // Overall discount
  discount2?: number | null // First additional discount
  discount3?: number | null // Second additional discount
  sum: number // Total sum after discounts without VAT
  vat_sum: number // Total VAT sum
  vat?: number // VAT percent (only used if line based VAT setting is not activated)
  vat_code_id?: number // Invoice default vat_code_id
  vat_code?: string // VAT code (only used if line based VAT setting is not activated)
  company_id: number // ID of the related client
  company_name?: string // Name of the related company (available in view request)
  company_address?: IAddress // Object with address fields (available in view request)
  person_id?: number // ID of the related contact person
  person_name?: string // Name of the related contact person (available in view request)
  company_address_id?: number // ID of the company address used on the document
  project_id?: number // ID of the related project (-1 if each document line can have a different related project)
  project_name?: string // Name of the related project (available in view request)
  currency: string // Used currency
  owner_id: number // User ID of the user responsible for the document
  owner_email: string // Email of the user responsible for the document
  date: string // Document date in YYYY-mm-dd format
  deadline: string // Document deadline in YYYY-mm-dd format
  status: string // Status of the document (paid, unpaid)
  description: string // Document description
  account_id: string // Related business entity
  currency_rate?: number // Exchange rate when invoice is issued
  lines?: IBillLine[] | null // Document lines (filled for view requests, null for list requests)
  modified_date: string // Date when document was last modified in YYYY-mm-dd HH:ii:ss format
  created_date: string // Date and time when document was created in YYYY-mm-dd HH:ii:ss format
  custom_fields?: { id: string; name: string; value: unknown; type: string } // Custom fields, only filled on view requests
  is_deleted: boolean // Indicates if the document is deleted
  deleted_date?: string // Date when the document was deleted in DATE_ISO8601 format (Y-m-d\TH:i:sP)
}

interface IBillLine {
  id: number // Document line ID
  product_id: number // ID of the product
  product_name?: string // Name of the product (available in view request)
  product_code?: string // Product code (available in view request)
  comment?: string // Line comment
  comment2?: string // Second line comment
  price: number // Unit price
  amount: number // Amount
  discount?: number // Line discount
  sum: number // Line sum without VAT
  vat?: number // Line tax percent
  vat_code_id?: number // Line tax id (only used if "Use line based tax rates" setting is activated)
  unit?: string // Unit name
  finance_object_id?: number // ID of the related accounting object
  finance_object_name?: string // Name of the related accounting object (available in view request)
  finance_object_symbol?: string // Symbol of the related accounting object (available in view request)
  finance_account_id?: number // ID of the related finance account
  finance_account_name?: string // Name of the related finance account (available in view request)
  finance_account_symbol?: string // Symbol of the related finance account (available in view and modify request)
  project_id: number // ID of the related project
  project_name?: string // Name of the related project (available in view request)
  vat_code?: string // VAT code (only used if "Use line based tax rates" setting is activated)
  custom_fields?: { id: string; name: string; value: unknown; type: string } // Custom fields, only filled on view requests
}
