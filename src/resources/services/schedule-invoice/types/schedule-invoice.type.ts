import { IAddress } from '../../shared/types/address.type'

export interface IScheduledInvoice {
  payment_type: string // Payment type
  fine?: string // Fine percent per day
  quote_id?: number // Related quote ID
  order_id?: number // Related order ID
  real_estate_id?: number // Related real estate ID
  deadline_days?: number // Invoice deadline in days
  generate_type?: string // Scheduled invoice generation type
  calculate_line_dates?: boolean // Allows calculating line dates on invoices automatically
  next_generation_date?: string // Date when the next invoice will be generated
  last_generation_date?: string // Determines the last date of an invoice
  mark_paid_from_prepayment?: boolean // If the client has prepayment balance, then the invoice will use it
  auto_send?: boolean // Send invoice automatically to the client
  lang?: string // Language of the invoices that are generated
  message?: string // Content of the e-mail
  mail_from_name?: string // Email alias name
  mail_from?: string // Invoice e-mail from address
  cc?: string // CC address of the email that will be sent with the invoice
  bcc?: string // BCC address of the email that will be sent with the invoice
  use_signature?: boolean // Use the invoice owner's signature for the email
  default_template_id?: number // ID of the invoice PDF template that will be used
  is_role_based?: boolean // If document is role based or service based
  local_price_list_id?: number // Local price list ID, available for role based documents
  id: number // Document ID
  discount?: number // Overall discount
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
  status: string // Status of the document
  description?: string // Document description
  account_id: string // Related business entity
  is_sent: boolean // If document is sent
  currency_rate?: number // Exchange rate when invoice is issued
  lines?: IScheduledInvoice[] // Document lines
  modified_date: string // The date when document was last modified
  created_date: string // The date and time when document was created
  custom_fields?: { id: string; name: string; value: unknown; type: string } // Custom fields, only filled on view requests
  is_deleted?: boolean // Is deleted
  deleted_date?: string // The date when object was deleted (DATE_ISO8601 - Y-m-d\TH:i:sP)
}

interface IScheduledInvoiceLine {
  dates?: { [date: string]: number } // Object with dates as keys and amounts as values
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
  vat_code_id?: number // Line tax id
  unit?: string // Unit name
  finance_object_id?: number // ID of the related accounting object
  finance_object_name?: string // Name of the related accounting object
  finance_object_symbol?: string // Symbol of the related accounting object
  finance_account_id?: number // ID of the related finance account
  finance_account_name?: string // Name of the related finance account
  finance_account_symbol?: string // Symbol of the related finance account
  cost?: number // Line cost
  supplier_id?: number // ID of the contact supplying the product on this line
  doer_id?: number // ID of the user doing the work
  role_id?: number | null // ID of the role doing the work
  is_internal: boolean // Shows whether line is counted as internal or external
  project_id?: number // ID of the related project
  project_name?: string // Name of the related project
  vat_code?: string // VAT code
  custom_fields?: { id: string; name: string; value: unknown; type: string } // Custom fields, only filled on view requests
}
