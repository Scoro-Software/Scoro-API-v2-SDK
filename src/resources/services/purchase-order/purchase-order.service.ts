import { APIClient } from '../../base'
import { IDocPdf } from '../shared/types/doc-pdf.type'
import { IPurchaseOrder } from './types/purchase-order.type'

export class PurchaseOrdersService extends APIClient {
  async getPurchaseOrder(id: number): Promise<IPurchaseOrder> {
    return await this.view<IPurchaseOrder>('purchaseOrders', id)
  }

  async getPurchaseOrders(): Promise<IPurchaseOrder[]> {
    return await this.list<IPurchaseOrder>('purchaseOrders')
  }

  async updatePurchaseOrder(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('purchaseOrders', id, data)
  }

  async createPurchaseOrder(
    data: Partial<IPurchaseOrder>
  ): Promise<IPurchaseOrder> {
    return await this.create('purchaseOrders', data)
  }

  async deletePurchaseOrder(id: number): Promise<void> {
    await this.delete('purchaseOrders', id)
  }

  async findAllPurchaseOrdersBy(
    filters: Record<string, any>
  ): Promise<IPurchaseOrder[]> {
    return await this.list<IPurchaseOrder>('purchaseOrders', filters)
  }

  async getPdf(id: number): Promise<IDocPdf> {
    return await this.customCallWithouBodyAndId<IDocPdf>(
      'purchaseOrders',
      'pdf',
      id
    )
  }
}
