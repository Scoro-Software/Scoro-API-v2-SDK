import { APIClient } from './../../base'
import { IUserSettings } from './types/settings.type'
import type { IUser } from './types/user.type'

export class UserService extends APIClient {
  async getUser(id: number): Promise<IUser> {
    return await this.view<IUser>('users', id)
  }

  async getUsers(): Promise<IUser[]> {
    return await this.list<IUser>('users')
  }

  async findAllBy(filter: Record<string, unknown>): Promise<IUser[]> {
    return await this.list<IUser>('users', filter)
  }

  async getUserSettings(id: number): Promise<IUserSettings> {
    return await this.customCallWithouBody<IUserSettings>(
      'users',
      'settings',
      id
    )
  }
}
