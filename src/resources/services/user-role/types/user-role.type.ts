import { IUser } from '../../user/types/user.type'

export interface IUserRole {
  role_id: number // User role ID
  role_name: string // User role name
  role_users: Array<Partial<IUser>> // User role users
}
