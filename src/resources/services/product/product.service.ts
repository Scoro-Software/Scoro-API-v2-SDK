import { APIClient } from '../../base'
import type { IProduct } from './types/product.type'

export class ProductService extends APIClient {
  async getProducts(): Promise<IProduct[]> {
    return await this.list<IProduct>('products')
  }

  async getProduct(id: number): Promise<IProduct> {
    return await this.view<IProduct>('products', id)
  }

  async createProduct(data: Partial<IProduct>): Promise<IProduct> {
    return await this.create<IProduct>('products', data)
  }

  async updateProduct(id: number, data: Partial<IProduct>): Promise<IProduct> {
    return await this.update<IProduct>('products', id, data)
  }

  async deleteProduct(id: number): Promise<void> {
    await this.delete('products', id)
  }

  async findAllProductsBy(query: Record<string, unknown>): Promise<IProduct[]> {
    return await this.list<IProduct>('products', query)
  }
}
