import { ValueOf } from '../../../../utils/value-of'

export interface ITriggerAction {
  id: number
  module: string
  name: string
  status: 'active' | 'inactive' | 'suspended'
  is_shared: boolean
  bookmark_id: number
  user_id: number
  filter_data?: {
    [module: string]: {
      logical_operator?: 'AND' | 'OR'
      blocks?: IFilterBlock<any>[]
      group_values?: (string | number)[]
      values?: (string | number)[]
    }
  }
  activities: { [module: string]: 'modify' | 'delete' | 'create' }[]
  actions: TriggerAction[]
}

interface TriggerAction {
  id?: number
  trigger_id?: number
  type: string
  action_data?: Record<string, unknown> | string
}

interface IFilterRule<T> {
  field_type: ValueOf<T>
  field_condition:
    | 'is'
    | 'is_not'
    | 'greater_than'
    | 'smaller_than'
    | 'between'
    | 'contains'
  field_modified_to_condition?:
    | 'is_modified'
    | 'is_modified_to'
    | 'is_modified_from'
    | 'is_added'
    | 'is_deleted'
  values?: (string | number)[]
}

export interface IFilterBlock<
  T extends
    | ITasksFilter
    | ICalendarFilter
    | IProjectsFilter
    | IInvoicesFilter
    | IPrepaymentsFilter
    | IBillsFilter
    | IExpensesFilter
    | IPurchaseOrdersFilter
    | IOrdersFilter
    | IQuotesFilter
    | IPersonsFilter
    | ICompaniesFilter
> {
  logical_operator: string
  rules: IFilterRule<T>[]
}

export type ITasksFilter = {
  trigger_activity_types: 'trigger_activity_types'
  trigger_assignees: 'trigger_assignees'
  trigger_billable_hours: 'trigger_billable_hours'
  trigger_comment: 'trigger_comment'
  trigger_companies: 'trigger_companies'
  trigger_completed_datetime: 'trigger_completed_datetime'
  trigger_confirmed: 'trigger_confirmed'
  trigger_contacts: 'trigger_contacts'
  trigger_countrie: 'trigger_countrie'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_deadline: 'trigger_deadline'
  trigger_description: 'trigger_description'
  trigger_done_state: 'trigger_done_state'
  trigger_duration_actual: 'trigger_duration_actual'
  trigger_duration_planned: 'trigger_duration_planned'
  trigger_file: 'trigger_file'
  trigger_objects: 'trigger_objects'
  trigger_persons: 'trigger_persons'
  trigger_priorities: 'trigger_priorities'
  trigger_project_phases: 'trigger_project_phases'
  trigger_project_tags: 'trigger_project_tags'
  trigger_projects: 'trigger_projects'
  trigger_responsible_users: 'trigger_responsible_users'
  trigger_scheduled_date: 'trigger_scheduled_date'
  trigger_start_datetime: 'trigger_start_datetime'
  trigger_statuses: 'trigger_statuses'
  trigger_subject: 'trigger_subject'
  trigger_users: 'trigger_users'
}

export type ICalendarFilter = {
  trigger_accepted: 'trigger_accepted'
  trigger_activity_types: 'trigger_activity_types'
  trigger_address: 'trigger_address'
  trigger_billable_hours: 'trigger_billable_hours'
  trigger_comment: 'trigger_comment'
  trigger_companies: 'trigger_companies'
  trigger_confirmed: 'trigger_confirmed'
  trigger_contacts: 'trigger_contacts'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_description: 'trigger_description'
  trigger_duration_planned: 'trigger_duration_planned'
  trigger_end_datetime: 'trigger_end_datetime'
  trigger_file: 'trigger_file'
  trigger_guests: 'trigger_guests'
  trigger_objects: 'trigger_objects'
  trigger_participants: 'trigger_participants'
  trigger_persons: 'trigger_persons'
  trigger_project_phases: 'trigger_project_phases'
  trigger_projects: 'trigger_projects'
  trigger_resources: 'trigger_resources'
  trigger_start_datetime: 'trigger_start_datetime'
  trigger_statuses: 'trigger_statuses'
  trigger_subject: 'trigger_subject'
  trigger_users: 'trigger_users'
}

export type IProjectsFilter = {
  trigger_activity_exists: 'trigger_activity_exists'
  trigger_activity_missing: 'trigger_activity_missing'
  trigger_clients: 'trigger_clients'
  trigger_comment: 'trigger_comment'
  trigger_completed_date: 'trigger_completed_date'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_deadline: 'trigger_deadline'
  trigger_description: 'trigger_description'
  trigger_duration: 'trigger_duration'
  trigger_is_private: 'trigger_is_private'
  trigger_manager: 'trigger_manager'
  trigger_modified_date: 'trigger_modified_date'
  trigger_objects: 'trigger_objects'
  trigger_project_name: 'trigger_project_name'
  trigger_project_number: 'trigger_project_number'
  trigger_project_tags: 'trigger_project_tags'
  trigger_start_date: 'trigger_start_date'
  trigger_statuses: 'trigger_statuses'
  trigger_users: 'trigger_users'
}

export type IInvoicesFilter = {
  trigger_authors: 'trigger_authors'
  trigger_clients: 'trigger_clients'
  trigger_comment: 'trigger_comment'
  trigger_contact_tags: 'trigger_contact_tags'
  trigger_countries: 'trigger_countries'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_currency: 'trigger_currency'
  trigger_deadline: 'trigger_deadline'
  trigger_description: 'trigger_description'
  trigger_discount_sum: 'trigger_discount_sum'
  trigger_file: 'trigger_file'
  trigger_interested_party: 'trigger_interested_party'
  trigger_is_approved: 'trigger_is_approved'
  trigger_is_sent: 'trigger_is_sent'
  trigger_issue_date: 'trigger_issue_date'
  trigger_last_modified_ago: 'trigger_last_modified_ago'
  trigger_margin_percent: 'trigger_margin_percent'
  trigger_objects: 'trigger_objects'
  trigger_payment_method: 'trigger_payment_method'
  trigger_products: 'trigger_products'
  trigger_projects: 'trigger_projects'
  trigger_receipts: 'trigger_receipts'
  trigger_receivable_sum: 'trigger_receivable_sum'
  trigger_reminder_profiles: 'trigger_reminder_profiles'
  trigger_statuses: 'trigger_statuses'
  trigger_sum: 'trigger_sum'
}

export type IPrepaymentsFilter = {
  trigger_authors: 'trigger_authors'
  trigger_clients: 'trigger_clients'
  trigger_comment: 'trigger_comment'
  trigger_contact_tags: 'trigger_contact_tags'
  trigger_countries: 'trigger_countries'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_currency: 'trigger_currency'
  trigger_deadline: 'trigger_deadline'
  trigger_description: 'trigger_description'
  trigger_discount_sum: 'trigger_discount_sum'
  trigger_file: 'trigger_file'
  trigger_interested_party: 'trigger_interested_party'
  trigger_is_approved: 'trigger_is_approved'
  trigger_is_sent: 'trigger_is_sent'
  trigger_issue_date: 'trigger_issue_date'
  trigger_last_modified_ago: 'trigger_last_modified_ago'
  trigger_margin_percent: 'trigger_margin_percent'
  trigger_objects: 'trigger_objects'
  trigger_payment_method: 'trigger_payment_method'
  trigger_products: 'trigger_products'
  trigger_projects: 'trigger_projects'
  trigger_receipts: 'trigger_receipts'
  trigger_receivable_sum: 'trigger_receivable_sum'
  trigger_reminder_profiles: 'trigger_reminder_profiles'
  trigger_statuses: 'trigger_statuses'
  trigger_sum: 'trigger_sum'
}

export type IBillsFilter = {
  trigger_authors: 'trigger_authors'
  trigger_clients: 'trigger_clients'
  trigger_comment: 'trigger_comment'
  trigger_contact_tags: 'trigger_contact_tags'
  trigger_countries: 'trigger_countries'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_currency: 'trigger_currency'
  trigger_deadline: 'trigger_deadline'
  trigger_description: 'trigger_description'
  trigger_file: 'trigger_file'
  trigger_is_chargeable: 'trigger_is_chargeable'
  trigger_issue_date: 'trigger_issue_date'
  trigger_last_modified_ago: 'trigger_last_modified_ago'
  trigger_objects: 'trigger_objects'
  trigger_payment_method: 'trigger_payment_method'
  trigger_products: 'trigger_products'
  trigger_projects: 'trigger_projects'
  trigger_receipts: 'trigger_receipts'
  trigger_recognition_date: 'trigger_recognition_date'
  trigger_statuses: 'trigger_statuses'
  trigger_sum: 'trigger_sum'
}

export type IExpensesFilter = {
  trigger_authors: 'trigger_authors'
  trigger_clients: 'trigger_clients'
  trigger_comment: 'trigger_comment'
  trigger_contact_tags: 'trigger_contact_tags'
  trigger_countries: 'trigger_countries'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_currency: 'trigger_currency'
  trigger_deadline: 'trigger_deadline'
  trigger_description: 'trigger_description'
  trigger_file: 'trigger_file'
  trigger_is_chargeable: 'trigger_is_chargeable'
  trigger_is_reimbursable: 'trigger_is_reimbursable'
  trigger_issue_date: 'trigger_issue_date'
  trigger_last_modified_ago: 'trigger_last_modified_ago'
  trigger_objects: 'trigger_objects'
  trigger_owner: 'trigger_owner'
  trigger_payment_method: 'trigger_payment_method'
  trigger_products: 'trigger_products'
  trigger_projects: 'trigger_projects'
  trigger_receipts: 'trigger_receipts'
  trigger_recognition_date: 'trigger_recognition_date'
  trigger_statuses: 'trigger_statuses'
  trigger_sum: 'trigger_sum'
}

export type IPurchaseOrdersFilter = {
  trigger_authors: 'trigger_authors'
  trigger_clients: 'trigger_clients'
  trigger_comment: 'trigger_comment'
  trigger_confirmed_date: 'trigger_confirmed_date'
  trigger_contact_tags: 'trigger_contact_tags'
  trigger_countries: 'trigger_countries'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_currency: 'trigger_currency'
  trigger_deadline: 'trigger_deadline'
  trigger_delivery_date: 'trigger_delivery_date'
  trigger_description: 'trigger_description'
  trigger_file: 'trigger_file'
  trigger_is_sent: 'trigger_is_sent'
  trigger_issue_date: 'trigger_issue_date'
  trigger_last_modified_ago: 'trigger_last_modified_ago'
  trigger_objects: 'trigger_objects'
  trigger_payment_method: 'trigger_payment_method'
  trigger_products: 'trigger_products'
  trigger_projects: 'trigger_projects'
  trigger_receipts: 'trigger_receipts'
  trigger_recognition_date: 'trigger_recognition_date'
  trigger_statuses: 'trigger_statuses'
  trigger_sum: 'trigger_sum'
}

export type IOrdersFilter = {
  trigger_activity_exists: 'trigger_activity_exists'
  trigger_activity_missing: 'trigger_activity_missing'
  trigger_authors: 'trigger_authors'
  trigger_clients: 'trigger_clients'
  trigger_comment: 'trigger_comment'
  trigger_confirmed_date: 'trigger_confirmed_date'
  trigger_contact_tags: 'trigger_contact_tags'
  trigger_countries: 'trigger_countries'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_currency: 'trigger_currency'
  trigger_deadline: 'trigger_deadline'
  trigger_description: 'trigger_description'
  trigger_file: 'trigger_file'
  trigger_invoice: 'trigger_invoice'
  trigger_is_sent: 'trigger_is_sent'
  trigger_issue_date: 'trigger_issue_date'
  trigger_last_modified_ago: 'trigger_last_modified_ago'
  trigger_objects: 'trigger_objects'
  trigger_payment_method: 'trigger_payment_method'
  trigger_products: 'trigger_products'
  trigger_projects: 'trigger_projects'
  trigger_receipts: 'trigger_receipts'
  trigger_shipment_date: 'trigger_shipment_date'
  trigger_statuses: 'trigger_statuses'
  trigger_sum: 'trigger_sum'
}

export type IQuotesFilter = {
  trigger_activity_exists: 'trigger_activity_exists'
  trigger_activity_missing: 'trigger_activity_missing'
  trigger_authors: 'trigger_authors'
  trigger_clients: 'trigger_clients'
  trigger_comment: 'trigger_comment'
  trigger_confirmed_date: 'trigger_confirmed_date'
  trigger_contact_tags: 'trigger_contact_tags'
  trigger_countries: 'trigger_countries'
  trigger_created_date: 'trigger_created_date'
  trigger_creators: 'trigger_creators'
  trigger_currency: 'trigger_currency'
  trigger_deadline: 'trigger_deadline'
  trigger_description: 'trigger_description'
  trigger_estimated_closing_date: 'trigger_estimated_closing_date'
  trigger_file: 'trigger_file'
  trigger_is_sent: 'trigger_is_sent'
  trigger_issue_date: 'trigger_issue_date'
  trigger_last_modified_ago: 'trigger_last_modified_ago'
  trigger_objects: 'trigger_objects'
  trigger_products: 'trigger_products'
  trigger_projects: 'trigger_projects'
  trigger_receipts: 'trigger_receipts'
  trigger_shipment_date: 'trigger_shipment_date'
  trigger_statuses: 'trigger_statuses'
  trigger_sum: 'trigger_sum'
}

export type IPersonsFilter = {
  trigger_activity_exists: 'trigger_activity_exists'
  trigger_activity_missing: 'trigger_activity_missing'
  trigger_address_city: 'trigger_address_city'
  trigger_address_country_region: 'trigger_address_country_region'
  trigger_address_county_state: 'trigger_address_county_state'
  trigger_address_municipality: 'trigger_address_municipality'
  trigger_address_street: 'trigger_address_street'
  trigger_address_zip: 'trigger_address_zip'
  trigger_bankaccount: 'trigger_bankaccount'
  trigger_client_profile: 'trigger_client_profile'
  trigger_comment: 'trigger_comment'
  trigger_contact_category: 'trigger_contact_category'
  trigger_contact_tag: 'trigger_contact_tag'
  trigger_contact_type: 'trigger_contact_type'
  trigger_created_date: 'trigger_created_date'
  trigger_description: 'trigger_description'
  trigger_is_client: 'trigger_is_client'
  trigger_is_supplier: 'trigger_is_supplier'
  trigger_job_title: 'trigger_job_title'
  trigger_manager: 'trigger_manager'
  trigger_means_of_contact_email: 'trigger_means_of_contact_email'
  trigger_means_of_contact_phone: 'trigger_means_of_contact_phone'
  trigger_objects: 'trigger_objects'
  trigger_projects: 'trigger_projects'
  trigger_related_company: 'trigger_related_company'
  trigger_search_name: 'trigger_search_name'
  trigger_users: 'trigger_users'
}

export type ICompaniesFilter = {
  trigger_activity_exists: 'trigger_activity_exists'
  trigger_activity_missing: 'trigger_activity_missing'
  trigger_address_city: 'trigger_address_city'
  trigger_address_country_region: 'trigger_address_country_region'
  trigger_address_county_state: 'trigger_address_county_state'
  trigger_address_municipality: 'trigger_address_municipality'
  trigger_address_street: 'trigger_address_street'
  trigger_address_zip: 'trigger_address_zip'
  trigger_bankaccount: 'trigger_bankaccount'
  trigger_client_profile: 'trigger_client_profile'
  trigger_comment: 'trigger_comment'
  trigger_contact_category: 'trigger_contact_category'
  trigger_contact_tag: 'trigger_contact_tag'
  trigger_contact_type: 'trigger_contact_type'
  trigger_created_date: 'trigger_created_date'
  trigger_description: 'trigger_description'
  trigger_is_client: 'trigger_is_client'
  trigger_is_supplier: 'trigger_is_supplier'
  trigger_manager: 'trigger_manager'
  trigger_means_of_contact_email: 'trigger_means_of_contact_email'
  trigger_means_of_contact_phone: 'trigger_means_of_contact_phone'
  trigger_name: 'trigger_name'
  trigger_objects: 'trigger_objects'
  trigger_projects: 'trigger_projects'
  trigger_users: 'trigger_users'
}
