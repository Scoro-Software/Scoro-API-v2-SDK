import { APIClient } from './../../base'
import type { IActivity } from './types/activity.type'

export class ActivityService extends APIClient {
  async getActivities(): Promise<IActivity[]> {
    return await this.list<IActivity>('activities')
  }

  async getActivity(id: number): Promise<IActivity> {
    return await this.view<IActivity>('activities', id)
  }

  async createActivity(data: Partial<IActivity>): Promise<IActivity> {
    return await this.create<IActivity>('activities', data)
  }

  async updateActivity(
    id: number,
    data: Partial<IActivity>
  ): Promise<IActivity> {
    return await this.update<IActivity>('activities', id, data)
  }

  async deleteActivity(id: number): Promise<void> {
    await this.delete('activities', id)
  }

  async findAllBy(query: Record<string, unknown>): Promise<IActivity[]> {
    return await this.list<IActivity>('activities', query)
  }
}
