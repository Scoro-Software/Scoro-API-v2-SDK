import { APIClient } from '../../base'
import { ITimeEntry } from './types/time-entry.type'

export class TimeEntryService extends APIClient {
  async getTimeEntries(): Promise<ITimeEntry[]> {
    return await this.list<ITimeEntry>('timeEntry')
  }

  async createTimeEntry(data: Partial<ITimeEntry>): Promise<ITimeEntry> {
    return await this.create<ITimeEntry>('timeEntry', data)
  }

  async updateTimeEntry(
    id: number,
    data: Partial<ITimeEntry>
  ): Promise<ITimeEntry> {
    return await this.update<ITimeEntry>('timeEntry', id, data)
  }

  async deleteTimeEntry(id: number): Promise<void> {
    await this.delete('timeEntry', id)
  }

  async getTimeEntry(id: number): Promise<ITimeEntry> {
    return await this.view<ITimeEntry>('timeEntry', id)
  }

  async getTimeEntryByTask(taskId: number): Promise<ITimeEntry[]> {
    return await this.list<ITimeEntry>('timeEntry', { task_id: taskId })
  }
}
