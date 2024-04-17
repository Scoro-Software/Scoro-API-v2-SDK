import { ActivityService } from './resources/services/activity/activity.service'
import { CalendarService } from './resources/services/calendar/calendar.service'
import { CompanyAccountService } from './resources/services/company-account/company-account.service'
import { ContactService } from './resources/services/contact/contact.service'
import { ProjectService } from './resources/services/project/project.service'
import { TaskService } from './resources/services/task/task.service'
import { TimeEntryService } from './resources/services/time-entry/time-entry.service'
import { UserService } from './resources/services/user/user.service'
import type { IApiPayload, IConfig } from './resources/types/api.type'

export class ScoroUserAPI {
  activity: ActivityService
  calendar: CalendarService
  companyAccount: CompanyAccountService
  contact: ContactService
  project: ProjectService
  task: TaskService
  timeEntry: TimeEntryService
  user: UserService

  constructor(config: IConfig) {
    const serviceConfig: IApiPayload = {
      user_token: config.token,
      company_account_id: config.companyAccount,
      lang: config.language ?? 'eng',
      request: {},
    }

    this.activity = new ActivityService(config.siteUrl, serviceConfig)
    this.calendar = new CalendarService(config.siteUrl, serviceConfig)
    this.companyAccount = new CompanyAccountService(
      config.siteUrl,
      serviceConfig
    )
    this.contact = new ContactService(config.siteUrl, serviceConfig)
    this.project = new ProjectService(config.siteUrl, serviceConfig)
    this.task = new TaskService(config.siteUrl, serviceConfig)
    this.timeEntry = new TimeEntryService(config.siteUrl, serviceConfig)
    this.user = new UserService(config.siteUrl, serviceConfig)
  }
}

export class ScoroCompanyAPI {
  activity: ActivityService
  calendar: CalendarService
  companyAccount: CompanyAccountService
  contact: ContactService
  project: ProjectService
  task: TaskService
  timeEntry: TimeEntryService
  user: UserService

  constructor(config: IConfig) {
    const serviceConfig: IApiPayload = {
      apiKey: config.token,
      company_account_id: config.companyAccount,
      lang: config.language ?? 'eng',
      request: {},
    }

    this.activity = new ActivityService(config.siteUrl, serviceConfig)
    this.calendar = new CalendarService(config.siteUrl, serviceConfig)
    this.companyAccount = new CompanyAccountService(
      config.siteUrl,
      serviceConfig
    )
    this.contact = new ContactService(config.siteUrl, serviceConfig)
    this.project = new ProjectService(config.siteUrl, serviceConfig)
    this.task = new TaskService(config.siteUrl, serviceConfig)
    this.timeEntry = new TimeEntryService(config.siteUrl, serviceConfig)
    this.user = new UserService(config.siteUrl, serviceConfig)
  }
}
