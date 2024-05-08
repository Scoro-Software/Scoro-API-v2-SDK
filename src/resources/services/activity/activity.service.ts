import { APIClient } from './../../base'
import type { IActivity } from './types/activity.type'

export class ActivityService extends APIClient {
  async getActivities(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<IActivity[]> {
    return await this.list<IActivity>('activities', query, {}, perPage, page)
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
}
