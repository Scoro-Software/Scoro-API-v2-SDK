import { APIClient } from '../../base'
import { IRolePrice } from './types/role-price.type'

export class RolePriceService extends APIClient {
  async getRolePrices(): Promise<IRolePrice[]> {
    return await this.list<IRolePrice>('rolesPrices')
  }

  async findAllRolePricesBy(
    filters: Record<string, any>
  ): Promise<IRolePrice[]> {
    return await this.list<IRolePrice>('rolesPrices', filters)
  }
}
