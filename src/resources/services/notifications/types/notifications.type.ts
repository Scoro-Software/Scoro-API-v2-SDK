export interface INotification {
  id: number // Notification ID
  structure_id: number // Main module item ID
  structure_id2: number // Related module item ID
  remind_type: string // Remind via: scoro or email
  module: string // Notification module name. Example values are tasks, tasks | comments etc
  user_id: number // User ID where notification was sent to
  notifier_id: number // User ID where notification was sent from
  date_added: string // Notification added time (in ISO 8601 format)
  status: string // Notification status. Possible values are unread, read
  date_read: string // Notification read date (in ISO 8601 format)
  action: string // Notification action type. Possible values are add, edit, delete
  notification_action_text: string // Notification action text. For example, "added comment to"
  notification_title_text: string // Notification title text
  checked?: boolean // Used only for modify request for setting the time when user last checked notifications. Possible values: true
}
