export interface IPriceList {
  id: number // Product group ID
  parent_group_id: number // Parent product group ID (0 if no parent group)
  name: string // Group name
  comments?: string // Product group description
  pcs_per_package: number // Products in this product group
  account_name: string // Account for external connections
}
