export interface IProduct {
  product_id: number // Product ID
  code: string // Product code
  name?: string // Product name (used for view and list requests)
  price: number // Product price
  buying_price?: number // Product buying price
  price_list?: number // Product price list
  description?: string // Product description
  description2?: string // Product additional description
  unit: string // Unit name
  amount?: number // Product quantity
  amount2?: number // Product secondary quantity
  tag?: string // Product tag
  url?: string // Product URL
  default_type: 'inhouse' | 'outsourced' // Product default type
  use_supplier?: boolean // Use supplier flag
  default_doer_id: number // Product default doer ID
  default_role_id: number | null // Product default role ID
  supplier_id?: number // Product supplier ID
  productgroup_id?: number // Product group ID
  is_active: boolean // Product activity status
  is_service: boolean // Product service status
  no_discounts?: boolean // No discounts flag
  default_vat_code_id: number // Default VAT code
  default_sales_tax_id?: number // Default sales VAT code
  default_purchases_tax_id?: number // Default purchases VAT code
  accounting_object_id?: number // Product default accounting object ID
  depots_total_amount?: number // Total amount in all depots
  depot_amounts?: { [depotId: number]: number } // Amounts for each depot (depot ID as key and amount as value)
  pictures?: unknown[] // Product pictures
  created_date: string // Date when product was created
  modified_date: string // Date when product was last modified
  account_id: string // Related business entity
  product_accounts?: any[] // Product related accounts
  sales_finance_account_id?: number // Product related sales finance account ID
  purchases_finance_account_id?: number // Product related purchases finance account ID
  is_deleted?: boolean // Is deleted flag
  deleted_date?: string // Date when object was deleted
  custom_fields?: { id: string; name: string; value: unknown; type: string } // Custom fields, only filled on view requests
}
