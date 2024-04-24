import { APIClient } from '../../base'
import { ITag } from './types/tag.type'

export class TagService extends APIClient {
  async findAllTagBy(filters: Record<string, unknown>): Promise<ITag[]> {
    return await this.list<ITag>('tags', filters)
  }
}
