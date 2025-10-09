export interface IViewResponse<T> {
  status: string
  statusCode: number
  messages: Record<string, string>
  errors: Record<string, string>
  data: T
}

export type ICreateResponse<T> = IViewResponse<T>

export interface IListResponse<T> {
  status: string
  statusCode: number
  messages: Record<string, string>
  errors: Record<string, string>
  data: T[]
}

export interface IBatchResponseData<T> {
  object: T
  action: string
  errors: string[]
}

export interface IBatchResponse<T> {
  status: string
  statusCode: number
  messages: Record<string, string>
  errors: Record<string, string>
  data: IBatchResponseData<T>[] | null
}
