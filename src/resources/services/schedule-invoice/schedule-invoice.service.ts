import { APIClient } from '../../base'
import { IScheduledInvoice } from './types/schedule-invoice.type'

export class ScheduledInvoiceService extends APIClient {
  async getScheduledInvoice(id: number): Promise<IScheduledInvoice> {
    return await this.view<IScheduledInvoice>('scheduledInvoices', id)
  }

  async getScheduledInvoices(): Promise<IScheduledInvoice[]> {
    return await this.list<IScheduledInvoice>('scheduledInvoices')
  }

  async updateScheduledInvoice(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('scheduledInvoices', id, data)
  }

  async createScheduledInvoice(
    data: Partial<IScheduledInvoice>
  ): Promise<IScheduledInvoice> {
    return await this.create('scheduledInvoices', data)
  }

  async deleteScheduledInvoice(id: number): Promise<void> {
    await this.delete('scheduledInvoices', id)
  }

  async findAllScheduledInvoicesBy(
    filters: Record<string, any>
  ): Promise<IScheduledInvoice[]> {
    return await this.list<IScheduledInvoice>('scheduledInvoices', filters)
  }
}
