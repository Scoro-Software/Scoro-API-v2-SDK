import { IAddress } from '../../shared/types/address.type'

export interface IPurchaseOrder {
  quote_id?: number // Related quote ID
  order_id?: number // Related order ID
  real_estate_id?: number // Related real estate ID
  delivery_address_id?: number // Delivery address id
  delivery_date?: string // Document delivery date (YYYY-mm-dd)
  confirmed_date?: string // The date when document was confirmed (DATE_ISO8601 - Y-m-d\TH:i:sP)
  modified_date?: string // The date when document was last modified (DATE_ISO8601 - Y-m-d\TH:i:sP)
  currency_rate?: number // Exchange rate when purchase order is issued
  id: number // Document ID
  no: number // Document number
  discount: number // Overall discount
  discount2?: number | null // First additional discount
  discount3?: number | null // Second additional discount
  sum: number // Total sum after discounts without VAT
  vat_sum: number // Total VAT sum
  vat?: number // VAT percent
  vat_code_id?: number // Invoice default vat_code_id
  vat_code?: string // VAT code
  company_id: number // ID of the related client
  company_name?: string // Name of the related company
  company_address?: IAddress // Object with address fields
  person_id?: number // ID of the related contact person
  person_name?: string // Name of the related contact person
  company_address_id?: number // Company address ID
  interested_party_id?: number // ID of the interested party
  interested_party_address_id?: number // Interested party address ID
  project_id?: number // ID of the related project
  project_name?: string // Name of the related project
  currency: string // Used currency
  owner_id: number // User ID of the user that is responsible for the document
  owner_email?: string // E-mail of user that is responsible for the document
  date: string // Document date (YYYY-mm-dd)
  status?: string // Status of the document
  description?: string // Document description
  account_id: string // Related business entity
  is_sent?: boolean // If document is sent
  lines?: IPurchaseOrderLine[] | null // Document lines
  created_date?: string // The date and time when document was created (YYYY-mm-dd HH:ii:ss)
  is_deleted?: boolean // Is deleted
  deleted_date?: string // The date when object was deleted (DATE_ISO8601 - Y-m-d\TH:i:sP)
  custom_fields?: { id: string; name: string; value: unknown; type: string } // Custom fields, only filled on view requests
}

interface IPurchaseOrderLine {
  id: number // Document line ID
  product_id: number // ID of the product
  product_name?: string // Name of the product
  product_code?: string // Product code
  comment?: string // Line comment
  comment2?: string // Second line comment
  price: number // Unit price
  amount: number // Amount
  amount2?: number // Additional amount
  discount?: number // Line discount
  sum: number // Line sum without VAT
  vat?: number // Line tax percent
  unit?: string // Unit name
  finance_object_id?: number // ID of the related accounting object
  finance_object_name?: string // Name of the related accounting object
  finance_object_symbol?: string // Symbol of the related accounting object
  finance_account_id?: number // ID of the related finance account
  finance_account_name?: string // Name of the related finance account
  finance_account_symbol?: string // Symbol of the related finance account
  project_id?: number // ID of the related project
  project_name?: string // Name of the related project
  vat_code_id?: number // Line tax id
  vat_code?: string // VAT code
  is_settled?: boolean // If specific Purchase order line is settled (finished) or not
  custom_fields?: { id: string; name: string; value: unknown; type: string } // Custom fields, only filled on view requests
}
