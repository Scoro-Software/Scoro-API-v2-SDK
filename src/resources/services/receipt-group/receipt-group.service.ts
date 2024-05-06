import { APIClient } from '../../base'
import { IReceiptGroup } from './types/receipt-group.type'

export class ReceiptGroupsService extends APIClient {
  async getReceiptGroups(): Promise<IReceiptGroup[]> {
    return await this.list<IReceiptGroup>('receipts')
  }

  async updateReceiptGroup(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('receipts', id, data)
  }

  async deleteReceiptGroup(id: number): Promise<void> {
    await this.delete('receipts', id)
  }

  async findAllReceiptGroupsBy(
    filters: Record<string, any>
  ): Promise<IReceiptGroup[]> {
    return await this.list<IReceiptGroup>('receipts', filters)
  }
}
