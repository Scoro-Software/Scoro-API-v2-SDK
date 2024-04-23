import { APIClient } from '../../base'
import type { ILocalPriceList } from './types/local-price-list.type'

export class LocalPriceListService extends APIClient {
  async getLocalPriceList(id: number): Promise<ILocalPriceList> {
    return await this.view<ILocalPriceList>('localPriceLists', id)
  }

  async createLocalPriceList(
    data: Partial<ILocalPriceList>
  ): Promise<ILocalPriceList> {
    return await this.create<ILocalPriceList>('localPriceLists', data)
  }

  async updateLocalPriceList(
    id: number,
    data: Partial<ILocalPriceList>
  ): Promise<ILocalPriceList> {
    return await this.update<ILocalPriceList>('localPriceLists', id, data)
  }

  async findAllBy(query: Record<string, unknown>): Promise<ILocalPriceList[]> {
    return await this.list<ILocalPriceList>('localPriceLists', query)
  }
}
