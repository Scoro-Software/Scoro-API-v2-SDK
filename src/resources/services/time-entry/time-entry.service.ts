import { APIClient } from '../../base'
import { ITimeEntry } from './types/time-entry.type'

export class TimeEntryService extends APIClient {
  async getTimeEntries(): Promise<ITimeEntry[]> {
    return await this.list<ITimeEntry>('timeEntries')
  }

  async createTimeEntry(data: Partial<ITimeEntry>): Promise<ITimeEntry> {
    return await this.create<ITimeEntry>('timeEntries', data)
  }

  async updateTimeEntry(
    id: number,
    data: Partial<ITimeEntry>
  ): Promise<ITimeEntry> {
    return await this.update<ITimeEntry>('timeEntries', id, data)
  }

  async deleteTimeEntry(id: number): Promise<void> {
    await this.delete('timeEntries', id)
  }

  async getTimeEntry(id: number): Promise<ITimeEntry> {
    return await this.view<ITimeEntry>('timeEntries', id)
  }

  async getTimeEntryByTask(taskId: number): Promise<ITimeEntry[]> {
    return await this.list<ITimeEntry>('timeEntries', { task_id: taskId })
  }

  async setDone(id: number): Promise<void> {
    await this.customCallWithouBodyAndId('timeEntries', 'setDone', id)
  }
}
