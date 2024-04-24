export interface IWebhook {
  id: number // Webhook ID
  module: string // Module name
  fields: string[] // Module fields
  action: string // Action type
  status: boolean // Webhook status
  relation_type: string // Relation type
  owners: string[] // Potential values for owners
  actors: string[] // Potential values for actors
  bookmark_id?: number // ID of the bookmark (optional)
  url: string // URL where the webhook should POST
}
