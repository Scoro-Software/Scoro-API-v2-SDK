import { APIClient } from '../../base'
import type { IAddress } from './types/address.type'

export class AddressService extends APIClient {
  async getAddresss(): Promise<IAddress[]> {
    return await this.list<IAddress>('addresses')
  }

  async findAllAddressBy(
    filters: Record<string, unknown>
  ): Promise<IAddress[]> {
    return await this.list<IAddress>('addresses', filters)
  }
}
