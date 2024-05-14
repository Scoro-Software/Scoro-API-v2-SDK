import { APIClient } from '../../base'
import type { ICategory } from './types/category.type'

export class CategoryService extends APIClient {
  async getCategories(): Promise<ICategory[]> {
    return await this.list<ICategory>('categories')
  }

  async findAllCategoriesBy(query: Record<string, any>): Promise<ICategory[]> {
    return await this.list<ICategory>('categories', query)
  }
}
