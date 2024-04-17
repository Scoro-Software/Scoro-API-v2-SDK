import { APIClient } from './../../base'
import type { IUser } from './types/user.type'

export class UserService extends APIClient {
  async getUser(id: number): Promise<IUser> {
    return await this.view<IUser>('users', id)
  }

  async getUsers(): Promise<IUser[]> {
    return await this.list<IUser>('users')
  }

  async createUser(user: IUser): Promise<IUser> {
    return await this.create<IUser>('users', user)
  }

  async updateUser(id: number, user: IUser): Promise<IUser> {
    return await this.update<IUser>('users', id, user)
  }

  async deleteUser(id: number): Promise<void> {
    await this.delete('users', id)
  }

  async findAllBy(filter: Record<string, unknown>): Promise<IUser[]> {
    return await this.list<IUser>('users', filter)
  }
}
