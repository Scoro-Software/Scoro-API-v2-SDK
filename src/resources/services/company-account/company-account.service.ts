import { APIClient } from '@/resources/base'
import type { ICompanyAccount } from './types/company-account.type'

export class CompanyAccountService extends APIClient {
  async getCompanyAccounts(): Promise<ICompanyAccount[]> {
    return await this.list<ICompanyAccount>('companyAccount')
  }

  async findAllCompanyAccountsBy(
    filters: Record<string, any>
  ): Promise<ICompanyAccount[]> {
    return await this.list<ICompanyAccount>('companyAccount', filters)
  }
}
