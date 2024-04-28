import { APIClient } from '../../base'
import { IAccountingObject } from './types/accounting-object.type'

export class FinanceObjectService extends APIClient {
  async getFinanceObjects(): Promise<IAccountingObject[]> {
    return await this.list<IAccountingObject>('financeObjects')
  }

  async findAllFinanceObjectsBy(
    filters: Record<string, unknown>
  ): Promise<IAccountingObject[]> {
    return await this.list<IAccountingObject>('financeObjects', filters)
  }

  async getFinanceObject(id: number): Promise<IAccountingObject> {
    return await this.view<IAccountingObject>('financeObjects', id)
  }
}
