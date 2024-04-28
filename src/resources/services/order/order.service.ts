import { APIClient } from '../../base'
import { IDocPdf } from '../shared/types/doc-pdf.type'
import { IOrder } from './types/order.type'

export class OrdersService extends APIClient {
  async getOrder(id: number): Promise<IOrder> {
    return await this.view<IOrder>('orders', id)
  }

  async getOrders(): Promise<IOrder[]> {
    return await this.list<IOrder>('orders')
  }

  async updateOrder(id: number, data: Record<string, unknown>): Promise<void> {
    await this.update('orders', id, data)
  }

  async createOrder(data: Partial<IOrder>): Promise<IOrder> {
    return await this.create('orders', data)
  }

  async deleteOrder(id: number): Promise<void> {
    await this.delete('orders', id)
  }

  async findAllOrdersBy(filters: Record<string, unknown>): Promise<IOrder[]> {
    return await this.list<IOrder>('orders', filters)
  }

  async getPdf(id: number): Promise<IDocPdf> {
    return await this.customCallWithouBodyAndId<IDocPdf>('orders', 'pdf', id)
  }
}
