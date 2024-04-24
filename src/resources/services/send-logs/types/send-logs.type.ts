export interface ISendLogs {
  id: number
  datetime: string // Datetime string
  sender_id: number
  sent_from: string
  sent_to: string[]
  contact_id: number[]
  type: string
  doc_id: number
  project_id: number
  subject: string
  message: string
  send_type: string
  is_sent: boolean
  is_draft: boolean
}
