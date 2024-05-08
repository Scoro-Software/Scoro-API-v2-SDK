import { APIClient } from '../../base'
import { IRelationType } from './types/relation-type.type'

export class RelationTypeService extends APIClient {
  async getRelationTypes(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<IRelationType[]> {
    return await this.list<IRelationType>(
      'relationTypes',
      query,
      {},
      perPage,
      page
    )
  }
}
