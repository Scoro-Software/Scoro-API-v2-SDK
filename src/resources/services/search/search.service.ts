import { APIClient } from '../../base'
import type { ISearch } from './types/search.type'

export class SearchService extends APIClient {
  async findAllBy(query: Record<string, unknown>): Promise<ISearch[]> {
    return await this.list<ISearch>('search', {}, query)
  }
}
