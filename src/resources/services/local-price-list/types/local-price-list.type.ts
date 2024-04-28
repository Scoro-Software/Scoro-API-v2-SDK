export interface ILocalPriceList {
  id: number // Local price list primary ID
  price_list_id: number // Related price list ID
  name: string // Local price list name
  currency: string // Local price list currency
  role_prices: IRolePrice[] // Role prices array
  modified_date: string // Date and time when local price list was last modified
  modified_user: number // Local price list modifier User ID
  created_date: string // Date and time when local price list was created
  created_user: number // Local price list creator User ID
}

interface IRolePrice {
  role_id: number // Role ID
  selling_price: number // Role selling price
}
