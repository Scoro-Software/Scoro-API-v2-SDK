import { APIClient } from '../../base'
import { ITriggerAction } from './types/trigger-action.type'

export class TriggerActionService extends APIClient {
  async getTriggerActions(): Promise<ITriggerAction[]> {
    return await this.list<ITriggerAction>('triggers')
  }

  async findAllTriggerActionsBy(
    filters: Record<string, any>
  ): Promise<ITriggerAction[]> {
    return await this.list<ITriggerAction>('triggers', filters)
  }

  async getTriggerAction(id: number): Promise<ITriggerAction> {
    return await this.view<ITriggerAction>('triggers', id)
  }

  async createTriggerAction(data: ITriggerAction): Promise<ITriggerAction> {
    return await this.create<ITriggerAction>('triggers', data)
  }

  async updateTriggerAction(
    id: number,
    data: ITriggerAction
  ): Promise<ITriggerAction> {
    return await this.update<ITriggerAction>('triggers', id, data)
  }

  async deleteTriggerAction(id: number): Promise<void> {
    await this.delete('triggers', id)
  }
}
