import { APIClient } from '../../base'
import { IStatus } from './types/status.type'

export class StatusService extends APIClient {
  async findAllStatusBy(filters: Record<string, unknown>): Promise<IStatus[]> {
    return await this.list<IStatus>('statuses', filters)
  }
}
