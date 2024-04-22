import { APIClient } from '../../base'
import { IRelationType } from './types/relation-type.type'

export class RelationTypeService extends APIClient {
  async getRelationTypes(): Promise<IRelationType[]> {
    return await this.list<IRelationType>('relationTypes')
  }
}
