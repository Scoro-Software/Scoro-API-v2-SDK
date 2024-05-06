import { APIClient } from '../../base'
import { IDocPdf } from '../shared/types/doc-pdf.type'
import { IInvoice } from './types/invoice.type'

export class InvoicesService extends APIClient {
  async getInvoice(id: number): Promise<IInvoice> {
    return await this.view<IInvoice>('invoices', id)
  }

  async getInvoices(): Promise<IInvoice[]> {
    return await this.list<IInvoice>('invoices')
  }

  async updateInvoice(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('invoices', id, data)
  }

  async createInvoice(data: Partial<IInvoice>): Promise<IInvoice> {
    return await this.create('invoices', data)
  }

  async deleteInvoice(id: number): Promise<void> {
    await this.delete('invoices', id)
  }

  async findAllInvoicesBy(filters: Record<string, any>): Promise<IInvoice[]> {
    return await this.list<IInvoice>('invoices', filters)
  }

  async getPdf(id: number): Promise<IDocPdf> {
    return await this.customCallWithouBodyAndId<IDocPdf>('invoices', 'pdf', id)
  }
}
