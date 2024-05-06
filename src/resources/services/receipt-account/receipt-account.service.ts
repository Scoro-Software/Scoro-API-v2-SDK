import { APIClient } from '../../base'
import { IReceiptAccount } from './types/receipt-account.type'

export class ReceiptAccountsService extends APIClient {
  async getReceiptAccounts(): Promise<IReceiptAccount[]> {
    return await this.list<IReceiptAccount>('receiptAccounts')
  }

  async findAllReceiptAccountsBy(
    filters: Record<string, any>
  ): Promise<IReceiptAccount[]> {
    return await this.list<IReceiptAccount>('receiptAccounts', filters)
  }
}
