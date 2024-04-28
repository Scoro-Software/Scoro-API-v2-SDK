import { APIClient } from '../../base'
import type { IPriceList } from './types/price-list.type'

export class PriceListService extends APIClient {
  async getPriceList(id: number): Promise<IPriceList> {
    return await this.view<IPriceList>('priceLists', id)
  }

  async getPriceLists(): Promise<IPriceList[]> {
    return await this.list<IPriceList>('priceLists')
  }

  async createPriceList(data: Partial<IPriceList>): Promise<IPriceList> {
    return await this.create<IPriceList>('priceLists', data)
  }

  async updatePriceList(
    id: number,
    data: Partial<IPriceList>
  ): Promise<IPriceList> {
    return await this.update<IPriceList>('priceLists', id, data)
  }

  async findAllPriceListBy(
    query: Record<string, unknown>
  ): Promise<IPriceList[]> {
    return await this.list<IPriceList>('priceLists', query)
  }
}
