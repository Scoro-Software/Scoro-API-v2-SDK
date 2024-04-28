import { APIClient } from '../../base'
import { IDeleteRelations, IRelations } from './types/relations.type'

export class RelationsService extends APIClient {
  public async getRelations(
    request: Partial<IRelations> = {}
  ): Promise<IRelations> {
    return this.callRelations('relations', request)
  }

  public async modifyRelation(request: Partial<IRelations>): Promise<void> {
    this.customCallWithBody<IRelations>('relations', 'modify', request)
  }

  public async deleteRelation(
    request: Partial<IDeleteRelations>
  ): Promise<void> {
    this.customCallWithBody<IDeleteRelations>('relations', 'delete', request)
  }
}
