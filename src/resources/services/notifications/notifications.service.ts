import { APIClient } from '../../base'
import type { INotification } from './types/notifications.type'

export class NotificationService extends APIClient {
  async getNotifications(): Promise<INotification[]> {
    return await this.list<INotification>('notifications')
  }

  async createNotification(
    data: Partial<INotification>
  ): Promise<INotification> {
    return await this.create<INotification>('notifications', data)
  }

  async updateNotification(
    id: number,
    data: Partial<INotification>
  ): Promise<INotification> {
    return await this.update<INotification>('notifications', id, data)
  }

  async deleteNotification(id: number): Promise<void> {
    await this.delete('notifications', id)
  }

  async findAllBy(query: Record<string, unknown>): Promise<INotification[]> {
    return await this.list<INotification>('notifications', query)
  }
}
