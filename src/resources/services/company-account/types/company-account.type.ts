import { IAddress } from '../../shared/types/address.type'

export interface ICompanyAccount {
  company_name: string
  alternative_name?: string
  address: IAddress[]
  email?: string
  website?: string
  phone?: string
  fax?: string
  reg_no?: string
  vat_no?: string
  site_version?: string
  base_currency?: string
  active_currencies?: string[]
  language?: string
}
