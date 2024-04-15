import type { IApiPayload } from './types/api.type'
import type { IViewResponse } from './types/response.type'

export abstract class APIClient {
  siteUrl: string
  customHeaders: Record<string, string> = {}
  payload: IApiPayload

  constructor(siteUrl: string, payload: IApiPayload) {
    this.siteUrl = siteUrl
    this.payload = payload
  }

  addCustomHeader(key: string, value: string): void {
    this.customHeaders[key] = value
  }

  protected async view<T>(endpoint: string, id: number): Promise<T> {
    const response = await fetch(
      `${this.siteUrl}/api/v2/${endpoint}/view/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.customHeaders,
        },
        body: JSON.stringify(this.payload),
      }
    )

    const data = await response.json()

    return data
  }

  protected async list<T>(
    endpoint: string,
    filters: Record<string, unknown> = {},
    perPage = 50
  ): Promise<T[]> {
    const body = {
      ...this.payload,
      filter: filters,
      per_page: perPage,
    }

    const response = await fetch(`${this.siteUrl}/api/v2/${endpoint}/list`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.customHeaders,
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    return data.data
  }

  protected async update<T>(
    endpoint: string,
    id: number,
    object: Partial<T> | Record<string, unknown>
  ): Promise<T> {
    const body = {
      ...this.payload,
      request: object,
    }

    const response = await fetch(
      `${this.siteUrl}/api/v2/${endpoint}/modify/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.customHeaders,
        },
        body: JSON.stringify(body),
      }
    )

    const data = await response.json()
    return data.data
  }

  protected async create<T>(
    endpoint: string,
    object: Partial<T> | Record<string, unknown>
  ): Promise<T> {
    return await this.update(endpoint, 0, object)
  }

  protected async delete(endpoint: string, id: number): Promise<void> {
    const response = await fetch(
      `${this.siteUrl}/api/v2/${endpoint}/delete/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.customHeaders,
        },
        body: JSON.stringify(this.payload),
      }
    )
    const data = await response.json()
    return data
  }
}
