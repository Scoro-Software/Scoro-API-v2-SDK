import { APIClient } from '../../base'
import { IUserGroup } from './types/user-group.type'

export class UserGroupService extends APIClient {
  async getUserGroups(): Promise<IUserGroup[]> {
    return await this.list<IUserGroup>('userGroups')
  }

  async getUserGroupById(userGroupId: number): Promise<IUserGroup> {
    return await this.view<IUserGroup>('userGroups', userGroupId)
  }
}
