export interface IReceiptGroup {
  id: number // Receipt group ID
  date: string // Receipt date in YYYY-mm-dd format
  contact_id: number // Related contact ID
  sum: number // Receipt sum
  currency?: string // ISO 4217 currency code. System default is used if no currency given
  sales_doc_type?: string // Document type for receipt. Possible values: "invoices", "bills", "expenses". Default: "invoices"
  receipt_account_id?: number // Receipt account ID
  receipts: Receipt[] // Array of receipts
  modified_date: string // The date when receipt group was last modified in YYYY-mm-dd HH:ii:ss format
  custom_fields?: Record<string, unknown> // Custom fields, only filled on view requests
  is_deleted: boolean // Indicates whether the receipt group is deleted
  deleted_date?: string // The date when object was deleted in DATE_ISO8601 format
}

interface Receipt {
  receipt_id: number // Receipt ID
  date: string // Receipt date in YYYY-mm-dd format
  invoice_id: number // Related invoice ID
  invoice_no?: string // Related invoice number, returned only for modify requests
  prepayment_id?: number // Related prepayment invoice ID
  sum: number // Receipt sum
  sales_doc_type?: string // Document type for receipt. Possible values: "invoices", "bills", "expenses". Default: "invoices"
  contact_id: number // Related contact ID
  contact_name: string // Related contact name
}
