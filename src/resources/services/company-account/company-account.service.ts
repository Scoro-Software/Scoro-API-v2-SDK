import { APIClient } from '../../base'
import type { ICompanyAccount } from './types/company-account.type'

export class CompanyAccountService extends APIClient {
  async getCompanyAccounts(): Promise<ICompanyAccount[]> {
    return await this.list<ICompanyAccount>('companyAccount')
  }
}
