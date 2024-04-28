export interface ISearch {
  cat_id: number
  cat_name: string
  symbol: string
  description: string
  modified_date: string // Assuming the date is represented as a string in ISO 8601 format
}

export interface ISearchPayload {
  search_phrase: string
  full_result?: boolean
  modules?: string[]
}
