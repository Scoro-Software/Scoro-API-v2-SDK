import { APIClient } from '../../base'
import { IEventResource } from './types/events-resorces.types'

export class EventResourceService extends APIClient {
  async getEventResource(id: number): Promise<IEventResource> {
    return await this.view<IEventResource>('eventsResources', id)
  }

  async getEventsResources(): Promise<IEventResource[]> {
    return await this.list<IEventResource>('eventsResources')
  }

  async findAllEventsResourcesBy(
    filters: Record<string, any>
  ): Promise<IEventResource[]> {
    return await this.list<IEventResource>('eventsResources', filters)
  }
}
