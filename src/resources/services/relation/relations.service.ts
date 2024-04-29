import { APIClient } from '../../base'
import { IDeleteRelations, IRelation } from './types/relations.type'

export class RelationService extends APIClient {
  public async getRelations(
    request: Partial<IRelation> = {}
  ): Promise<IRelation> {
    return this.callRelations('relations', request)
  }

  public async modifyRelation(request: Partial<IRelation>): Promise<void> {
    this.customCallWithBody<IRelation>('relations', 'modify', request)
  }

  public async deleteRelation(
    request: Partial<IDeleteRelations>
  ): Promise<void> {
    this.customCallWithBody<IDeleteRelations>('relations', 'delete', request)
  }
}
