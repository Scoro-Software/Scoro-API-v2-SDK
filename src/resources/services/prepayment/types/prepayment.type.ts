import { IAddress } from '../../shared/types/address.type'

export interface IPrepayment {
  fine?: string // Fine percent per day
  quote_id?: number // Related quote ID
  order_id?: number // Related order ID
  prepayment_percent?: number // Percent to pay in advance
  is_role_based?: boolean // If document is role based or service based
  local_price_list_id?: number // Local price list ID, available for role based documents
  id: number // Document ID
  no: number // Document number
  discount?: number // Overall discount
  discount2?: number | null // First additional discount
  discount3?: number | null // Second additional discount
  sum: number // Total sum after discounts without VAT
  vat_sum: number // Total VAT sum
  vat?: number // VAT percent, only used if line based VAT setting is not activated
  vat_code_id?: number // Invoice default vat_code_id
  vat_code?: string // VAT code, only used if line based VAT setting is not activated
  company_id?: number // ID of the related client
  company_name?: string // Name of the related company
  company_address?: IAddress // Object with address fields
  person_id?: number // ID of the related contact person
  person_name?: string // Name of the related contact person
  company_address_id?: number // If a company has multiple addresses, use this field to set which address is used on the document
  interested_party_id?: number // ID of the interested party, only used if site has interested party feature activated
  interested_party_address_id?: number // See company_address_id, only used if site has interested party feature activated
  project_id?: number // ID of the related project
  project_name?: string // Name of the related project
  currency?: string // Used currency
  owner_id?: number // User ID of the user that is responsible for the document
  owner_email?: string // Email of user that is responsible for the document
  date?: string // Document date (YYYY-mm-dd)
  deadline?: string // Document deadline (YYYY-mm-dd)
  status?: string // Status of the document (paid, unpaid)
  description?: string // Document description
  account_id?: string // Related business entity
  is_sent?: boolean // If document is sent
  currency_rate?: number // Exchange rate when invoice is issued
  lines?: IPrepaymentLine[] | null // Document lines, null for list request
  modified_date?: string // The date when document was last modified (YYYY-mm-dd HH:ii:ss)
  created_date?: string // The date and time when document was created (YYYY-mm-dd HH:ii:ss)
  custom_fields?: { id: string; name: string; value: unknown; type: string } // Custom fields, only filled on view requests
  is_deleted?: boolean // Is deleted
  deleted_date?: string // The date when object was deleted (DATE_ISO8601 - Y-m-d\TH:i:sP)
}

interface IPrepaymentLine {
  id: number // Document line ID
  product_id: number // ID of the product
  product_name?: string // Name of the product, available in view request
  product_code?: string // Product code, only used if "Product code" addon is activated, available in view request
  comment?: string // Line comment
  comment2?: string // Second line comment, only used if "Use additional comments on lines" setting is activated
  price: number // Unit price
  amount: number // Amount
  amount2?: number // Additional amount, only used if "Use additional amount" setting is activated
  discount?: number // Line discount, only used if "Use line based discount" setting is activated
  sum: number // Line sum without VAT
  vat?: number // Line tax percent, only used if "Use line based tax rates" setting is activated
  vat_code_id?: number // Line tax id, only used if "Use line based tax rates" setting is activated
  unit?: string // Unit name
  finance_object_id?: number // ID of the related accounting object, only used if "Use accounting objects" setting is activated
  finance_object_name?: string // Name of the related accounting object, available in view request
  finance_object_symbol?: string // Symbol of the related accounting object, available in view request
  finance_account_id?: number // ID of the related finance account, only used if "Use finance accounts" setting is activated
  finance_account_name?: string // Name of the related finance account, available in view request
  finance_account_symbol?: string // Symbol of the related finance account, available in view and modify request
  cost?: number // Line cost, only used if "Use margin" setting is activated
  supplier_id?: number // ID of the contact supplying the product on this line, only used if "Use margin" setting is activated
  doer_id?: number // ID of the user doing the work
  role_id?: number | null // ID of the role doing the work, null if role won't be added
  is_internal?: boolean // Shows whether line is counted as internal or external
  project_id?: number // ID of the related project
  project_name?: string // Name of the related project, available in view request
  vat_code?: string // VAT code, only used if "Use line based tax rates" setting is activated, available in view request
  custom_fields?: { id: string; name: string; value: unknown; type: string } // Custom fields, only filled on view requests
}
