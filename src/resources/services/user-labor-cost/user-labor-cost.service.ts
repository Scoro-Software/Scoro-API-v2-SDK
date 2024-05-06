import { APIClient } from '../../base'
import { IUserLaborCost } from './types/user-labor-cost.service.type'

export class UserLaborCostService extends APIClient {
  async modifyUserLaborCost(
    id: number,
    userLaborCost: Partial<IUserLaborCost>
  ): Promise<IUserLaborCost> {
    return await this.update<IUserLaborCost>(
      'usersLaborCost',
      id,
      userLaborCost
    )
  }

  async getUserLaborCosts(): Promise<IUserLaborCost[]> {
    return await this.list<IUserLaborCost>('usersLaborCost')
  }

  async findAllUserLaborCostsBy(
    filters: Record<string, any>
  ): Promise<IUserLaborCost[]> {
    return await this.list<IUserLaborCost>('usersLaborCost', filters)
  }

  async getUserLaborCostById(userLaborCostId: number): Promise<IUserLaborCost> {
    return await this.view<IUserLaborCost>('usersLaborCost', userLaborCostId)
  }
}
