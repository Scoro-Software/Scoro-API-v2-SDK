import { APIClient } from '../../base'
import type { IDepot } from './types/depot.type'

export class DepotService extends APIClient {
  async getDepot(id: number): Promise<IDepot> {
    return await this.view<IDepot>('depot', id)
  }

  async getDepots(): Promise<IDepot[]> {
    return await this.list<IDepot>('depot')
  }

  async findAllDepotsBy(query: Record<string, unknown>): Promise<IDepot[]> {
    return await this.list<IDepot>('depot', query)
  }
}
