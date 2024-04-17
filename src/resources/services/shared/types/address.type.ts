export interface IAddress {
  country: string // 3-letter ISO 3166 code
  county?: string
  municipality?: string
  city?: string
  street?: string
  zipcode?: string
}
