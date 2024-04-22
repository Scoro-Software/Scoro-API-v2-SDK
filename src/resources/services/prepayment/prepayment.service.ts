import { APIClient } from '../../base'
import { IDocPdf } from '../shared/types/doc-pdf.type'
import { IPrepayment } from './types/prepayment.type'

export class PrepaymentsService extends APIClient {
  async getPrepayment(id: number): Promise<IPrepayment> {
    return await this.view<IPrepayment>('prepayments', id)
  }

  async getPrepayments(): Promise<IPrepayment[]> {
    return await this.list<IPrepayment>('prepayments')
  }

  async updatePrepayment(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('prepayments', id, data)
  }

  async createPrepayment(data: Partial<IPrepayment>): Promise<IPrepayment> {
    return await this.create('prepayments', data)
  }

  async deletePrepayment(id: number): Promise<void> {
    await this.delete('prepayments', id)
  }

  async findAllPrepaymentsBy(
    filters: Record<string, unknown>
  ): Promise<IPrepayment[]> {
    return await this.list<IPrepayment>('prepayments', filters)
  }

  async getPdf(id: number): Promise<IDocPdf> {
    return await this.customCallWithouBodyAndId<IDocPdf>(
      'prepayments',
      'pdf',
      id
    )
  }
}
