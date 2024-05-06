import type { IApiPayload } from './types/api.type'
import type { IViewResponse } from './types/response.type'

export abstract class APIClient {
  protected siteUrl: string
  protected customHeaders: Record<string, string> = {}
  protected payload: IApiPayload
  protected responseHeaders: Headers | null

  constructor(siteUrl: string, payload: IApiPayload) {
    this.siteUrl = siteUrl
    this.payload = payload
    this.responseHeaders = null
  }

  addCustomHeader(key: string, value: string): void {
    this.customHeaders[key] = value
  }

  getResponseHeaders(): Headers | null {
    return this.responseHeaders
  }

  private validateResponse<T>(response: IViewResponse<T>): void {
    if (response.errors || response.statusCode !== 200) {
      throw new Error(
        JSON.stringify({
          error: response.errors,
          statusCode: response.statusCode,
          messages: response.messages,
        })
      )
    }
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

    const res: IViewResponse<T> = await response.json()
    this.responseHeaders = response.headers
    this.validateResponse(res)

    return res.data
  }

  protected async list<T>(
    endpoint: string,
    filters: Record<string, any> = {},
    request: Record<string, any> = {},
    perPage = 50
  ): Promise<T[]> {
    const body = {
      ...this.payload,
      request: request,
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

    const res: IViewResponse<T[]> = await response.json()
    this.responseHeaders = response.headers
    this.validateResponse(res)

    return res.data
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

    const res: IViewResponse<T> = await response.json()
    this.responseHeaders = response.headers
    this.validateResponse(res)
    return res.data
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

    const res: IViewResponse<unknown> = await response.json()
    this.responseHeaders = response.headers
    this.validateResponse(res)
  }

  protected async customCallWithouBodyAndId<T>(
    endpoint: string,
    method: string,
    id: number
  ): Promise<T> {
    const response = await fetch(
      `${this.siteUrl}/api/v2/${endpoint}/${method}/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.customHeaders,
        },
        body: JSON.stringify(this.payload),
      }
    )

    const res: IViewResponse<T> = await response.json()
    this.responseHeaders = response.headers
    this.validateResponse(res)

    return res.data
  }

  protected async customCallWithBodyAndId<T>(
    endpoint: string,
    method: string,
    id: number,
    request: Record<string, unknown>
  ): Promise<T> {
    const body = {
      ...this.payload,
      request: request,
    }

    const response = await fetch(
      `${this.siteUrl}/api/v2/${endpoint}/${method}/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.customHeaders,
        },
        body: JSON.stringify(body),
      }
    )

    const res: IViewResponse<T> = await response.json()
    this.responseHeaders = response.headers
    this.validateResponse(res)

    return res.data
  }

  protected async callRelations<T>(
    endpoint: string,
    request: Partial<T>
  ): Promise<T> {
    const body = {
      ...this.payload,
      request: request,
    }

    const response = await fetch(`${this.siteUrl}/api/v2/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.customHeaders,
      },
      body: JSON.stringify(body),
    })

    const res: IViewResponse<T> = await response.json()
    this.responseHeaders = response.headers
    this.validateResponse(res)

    return res.data
  }

  protected async customCallWithBody<T>(
    endpoint: string,
    method: string,
    request: Partial<T>
  ): Promise<T> {
    const body = {
      ...this.payload,
      request: request,
    }

    const response = await fetch(
      `${this.siteUrl}/api/v2/${endpoint}/${method}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...this.customHeaders,
        },
        body: JSON.stringify(body),
      }
    )

    const res: IViewResponse<T> = await response.json()
    this.responseHeaders = response.headers
    this.validateResponse(res)

    return res.data
  }
}
