import { APIClient } from '../../base'
import type { IAddress } from './types/address.type'

export class AddressService extends APIClient {
  async getAddresss(): Promise<IAddress[]> {
    return await this.list<IAddress>('addresses')
  }
}
