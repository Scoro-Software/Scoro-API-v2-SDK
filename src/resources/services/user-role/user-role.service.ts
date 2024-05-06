import { APIClient } from '../../base'
import { IUserRole } from './types/user-role.type'

export class UserRoleService extends APIClient {
  async getUserRoles(): Promise<IUserRole[]> {
    return await this.list<IUserRole>('userRoles')
  }

  async findAllUserRolesBy(filters: Record<string, any>): Promise<IUserRole[]> {
    return await this.list<IUserRole>('userRoles', filters)
  }

  async getUserRoleById(userRoleId: number): Promise<IUserRole> {
    return await this.view<IUserRole>('userRoles', userRoleId)
  }
}
