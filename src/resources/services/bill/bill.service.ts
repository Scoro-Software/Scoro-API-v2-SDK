import { APIClient } from '../../base'
import { IBill } from './types/bill.type'

export class BillsService extends APIClient {
  async getBill(id: number): Promise<IBill> {
    return await this.view<IBill>('bills', id)
  }

  async getBills(): Promise<IBill[]> {
    return await this.list<IBill>('bills')
  }

  async updateBill(id: number, data: Record<string, unknown>): Promise<void> {
    await this.update('bills', id, data)
  }

  async createBill(data: Partial<IBill>): Promise<IBill> {
    return await this.create('bills', data)
  }

  async deleteBill(id: number): Promise<void> {
    await this.delete('bills', id)
  }

  async findAllBillsBy(filters: Record<string, unknown>): Promise<IBill[]> {
    return await this.list<IBill>('bills', filters)
  }
}
