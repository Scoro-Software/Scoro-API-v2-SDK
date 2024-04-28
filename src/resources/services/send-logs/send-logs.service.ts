import { APIClient } from '../../base'
import { ISendLogs } from './types/send-logs.type'

export class SendLogService extends APIClient {
  async getSendLogs(): Promise<ISendLogs[]> {
    return await this.list<ISendLogs>('sendLog')
  }

  async findAllSendLogsBy(
    filters: Record<string, unknown>
  ): Promise<ISendLogs[]> {
    return await this.list<ISendLogs>('sendLog', filters)
  }
}
