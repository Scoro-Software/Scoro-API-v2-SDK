import { APIClient } from '../../base'
import { ITag } from './types/tag.type'

export class TagService extends APIClient {
  async getTags(): Promise<ITag[]> {
    return await this.list<ITag>('tags')
  }

  async findAllTagBy(filters: Record<string, any>): Promise<ITag[]> {
    return await this.list<ITag>('tags', filters)
  }
}
