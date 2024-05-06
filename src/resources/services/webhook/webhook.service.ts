import { APIClient } from '../../base'
import { IWebhook } from './types/webhook.type'

export class WebhookService extends APIClient {
  async subscribeToWebhook(webhook: Partial<IWebhook>): Promise<IWebhook> {
    return await this.customCallWithBody<IWebhook>(
      'webhooks',
      'subscribe',
      webhook
    )
  }

  async unsubscribeFromWebhook(webhookId: number): Promise<void> {
    await this.customCallWithouBodyAndId('webhooks', 'unsubscribe', webhookId)
  }

  async getWebhooks(): Promise<IWebhook[]> {
    return await this.list<IWebhook>('webhooks')
  }

  async findAllWebhooksBy(filters: Record<string, any>): Promise<IWebhook[]> {
    return await this.list<IWebhook>('webhooks', filters)
  }
}
