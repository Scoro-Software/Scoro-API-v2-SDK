import { APIClient } from '../../base'
import { IVatCode } from './types/vat-code.type'

export class VatCodeService extends APIClient {
  async getVatCodes(): Promise<IVatCode[]> {
    return await this.list<IVatCode>('vatCodes')
  }

  async findAllVatCodesBy(filters: Record<string, any>): Promise<IVatCode[]> {
    return await this.list<IVatCode>('vatCodes', filters)
  }

  async getVatCode(id: number): Promise<IVatCode> {
    return await this.view<IVatCode>('vatCodes', id)
  }

  async createVatCode(data: IVatCode): Promise<IVatCode> {
    return await this.create<IVatCode>('vatCodes', data)
  }

  async updateVatCode(id: number, data: IVatCode): Promise<IVatCode> {
    return await this.update<IVatCode>('vatCodes', id, data)
  }

  async deleteVatCode(id: number): Promise<void> {
    await this.delete('vatCodes', id)
  }
}
