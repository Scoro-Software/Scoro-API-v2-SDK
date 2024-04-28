export interface IEventResource {
  resource_id: number
  resource_name: string
  resource_color: string // Format is in hex "#ffffff"
  modified_date: string // Datetime format (DATE_ISO8601 - Y-m-d\TH:i:sP)
}
