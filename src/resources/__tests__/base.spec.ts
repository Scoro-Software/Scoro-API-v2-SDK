import { APIClient } from '../base'

class MockAPIClient extends APIClient {
  callView(endpoint: string, id: number) {
    return this.view(endpoint, id)
  }
  callList(endpoint: string, filters = {}, perPage = 50) {
    return this.list(endpoint, filters, perPage)
  }
  callUpdate(endpoint: string, id: number, data: Record<string, unknown>) {
    return this.update(endpoint, id, data)
  }
  callCreate(endpoint: string, data: Record<string, unknown>) {
    return this.create(endpoint, data)
  }
  callDelete(endpoint: string, id: number) {
    this.delete(endpoint, id)
  }

  callCustomCallWithouBody(endpoint: string, method: string, id: number) {
    this.customCallWithouBody(endpoint, method, id)
  }
}

describe('APIClient', () => {
  let apiClient: MockAPIClient

  beforeEach(() => {
    apiClient = new MockAPIClient('https://example.com', {
      apiKey: 'YOUR_API_KEY',
      company_account_id: '123',
      request: {},
      lang: 'eng',
    })
  })

  test('addCustomHeader should add a custom header', () => {
    apiClient.addCustomHeader('Authorization', 'Bearer TOKEN')
    expect(apiClient.customHeaders).toEqual({ Authorization: 'Bearer TOKEN' })
  })

  test('view should fetch and return data', async () => {
    const mockResponse = { id: 1, name: 'John Doe' }
    global.fetch = jest.fn().mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue({ statusCode: 200, data: mockResponse }),
    })

    const data = await apiClient.callView('users', 1)

    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/api/v2/users/view/1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...apiClient.customHeaders,
        },
        body: JSON.stringify(apiClient.payload),
      }
    )
    expect(data).toEqual(mockResponse)
  })

  test('list should fetch and return data', async () => {
    const mockResponse = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'John Deere' },
    ]
    global.fetch = jest.fn().mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue({ statusCode: 200, data: mockResponse }),
    })

    const data = await apiClient.callList('users', { name: 'John' }, 10)

    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/api/v2/users/list',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...apiClient.customHeaders,
        },
        body: JSON.stringify({
          ...apiClient.payload,
          filter: { name: 'John' },
          per_page: 10,
        }),
      }
    )
    expect(data).toEqual(mockResponse)
  })

  test('update should fetch and return data', async () => {
    const mockResponse = { id: 1, name: 'John Doe' }
    global.fetch = jest.fn().mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue({ statusCode: 200, data: mockResponse }),
    })

    const data = await apiClient.callUpdate('users', 1, { name: 'Jane Doe' })

    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/api/v2/users/modify/1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...apiClient.customHeaders,
        },
        body: JSON.stringify({
          ...apiClient.payload,
          request: { name: 'Jane Doe' },
        }),
      }
    )
    expect(data).toEqual(mockResponse)
  })

  test('create should fetch and return data', async () => {
    const mockResponse = { id: 1, name: 'John Doe' }
    global.fetch = jest.fn().mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue({ statusCode: 200, data: mockResponse }),
    })

    const data = await apiClient.callCreate('users', { name: 'Jane Doe' })

    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/api/v2/users/modify/0',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...apiClient.customHeaders,
        },
        body: JSON.stringify({
          ...apiClient.payload,
          request: { name: 'Jane Doe' },
        }),
      }
    )
    expect(data).toEqual(mockResponse)
  })

  test('delete should fetch and return data', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ statusCode: 200, data: {} }),
    })

    await apiClient.callDelete('users', 1)

    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/api/v2/users/delete/1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...apiClient.customHeaders,
        },
        body: JSON.stringify(apiClient.payload),
      }
    )
  })

  test('should throw an error if response status is not 200', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ statusCode: 400, data: {} }),
    })

    await expect(apiClient.callList('users')).rejects.toThrow(
      JSON.stringify({ statusCode: 400 })
    )
  })

  test('customCallWithouBody should make a POST request and validate the response', async () => {
    const mockResponse = { statusCode: 200, data: {} }
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    })

    await apiClient.callCustomCallWithouBody('timeEntries', 'setDone', 1)

    expect(fetch).toHaveBeenCalledWith(
      'https://example.com/api/v2/timeEntries/setDone/1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...apiClient.customHeaders,
        },
        body: JSON.stringify(apiClient.payload),
      }
    )
  })
})
