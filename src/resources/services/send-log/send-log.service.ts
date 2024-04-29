import { APIClient } from '../../base'
import { ISendLog } from './types/send-log.type'

export class SendLogService extends APIClient {
  async getSendLogs(): Promise<ISendLog[]> {
    return await this.list<ISendLog>('sendLog')
  }

  async findAllSendLogsBy(
    filters: Record<string, unknown>
  ): Promise<ISendLog[]> {
    return await this.list<ISendLog>('sendLog', filters)
  }
}
