export interface IUserSettings {
  user_id: number
  master_company_account: string
  first_day_of_week: number
  timezone: string
  locale_clock: '12' | '24'
  locale_date: string
  locale_number: {
    thousandSeparator: string
    decimalSeparator: string
  }
  company_accounts: {
    account_id: string
  }[]
}
