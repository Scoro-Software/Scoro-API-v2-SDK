import { APIClient } from '../../base'
import { IStatus } from './types/status.type'

export class StatusService extends APIClient {
  async getStatuses(): Promise<IStatus[]> {
    return await this.list<IStatus>('statuses')
  }

  async findAllStatusBy(filters: Record<string, any>): Promise<IStatus[]> {
    return await this.list<IStatus>('statuses', filters)
  }
}
