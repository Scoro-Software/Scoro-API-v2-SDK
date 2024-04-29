import { APIClient } from '../../base'
import { IDocPdf } from '../shared/types/doc-pdf.type'
import { IQuote } from './types/quote.type'

export class QuoteService extends APIClient {
  async getQuote(id: number): Promise<IQuote> {
    return await this.view<IQuote>('quotes', id)
  }

  async getQuotes(): Promise<IQuote[]> {
    return await this.list<IQuote>('quotes')
  }

  async updateQuote(id: number, data: Record<string, unknown>): Promise<void> {
    await this.update('quotes', id, data)
  }

  async createQuote(data: Partial<IQuote>): Promise<IQuote> {
    return await this.create('quotes', data)
  }

  async deleteQuote(id: number): Promise<void> {
    await this.delete('quotes', id)
  }

  async findAllQuotesBy(filters: Record<string, unknown>): Promise<IQuote[]> {
    return await this.list<IQuote>('quotes', filters)
  }

  async getPdf(id: number): Promise<IDocPdf> {
    return await this.customCallWithouBodyAndId<IDocPdf>('quotes', 'pdf', id)
  }
}
