import { ActivityService } from './resources/services/activity/activity.service'
import { AddressService } from './resources/services/address/address.service'
import { BillsService } from './resources/services/bill/bill.service'
import { BookmarkService } from './resources/services/bookmark/bookmark.service'
import { CalendarService } from './resources/services/calendar/calendar.service'
import { CategoryService } from './resources/services/category/category.service'
import { ClientProfileService } from './resources/services/client-profile/client-profile.service'
import { CommentService } from './resources/services/comment/comment.service'
import { CompanyAccountService } from './resources/services/company-account/company-account.service'
import { ContactService } from './resources/services/contact/contact.service'
import { CustomFieldService } from './resources/services/custom-field/custom-field.service'
import { CustomModuleService } from './resources/services/custom-module/custom-module.service'
import { DepotService } from './resources/services/depot/depot.service'
import { EventResourceService } from './resources/services/event-resource/event-resource.service'
import { ExpensesService } from './resources/services/expense/expense.service'
import { FileService } from './resources/services/file/file.service'
import { FinanceAccountService } from './resources/services/finance-account/finance-account.service'
import { FinanceObjectService } from './resources/services/finance-object/finance-object.service'
import { InvoicesService } from './resources/services/invoice/invoice.service'
import { LocalPriceListService } from './resources/services/local-price-list/local-price-list.service'
import { NotificationService } from './resources/services/notification/notification.service'
import { OrdersService } from './resources/services/order/order.service'
import { PDFTemplateService } from './resources/services/pdf-template/pdf-template.service'
import { PrepaymentsService } from './resources/services/prepayment/prepayment.service'
import { PriceListService } from './resources/services/price-list/price-list.service'
import { ProductGroupService } from './resources/services/product-group/product-group.service'
import { ProjectPhaseService } from './resources/services/project-phase/project-phase.service'
import { ProjectService } from './resources/services/project/project.service'
import { PurchaseOrdersService } from './resources/services/purchase-order/purchase-order.service'
import { QuoteService } from './resources/services/quote/quote.service'
import { ReceiptAccountsService } from './resources/services/receipt-account/receipt-account.service'
import { ReceiptGroupsService } from './resources/services/receipt-group/receipt-group.service'
import { RelationTypeService } from './resources/services/relation-type/relation-type.service'
import { RelationService } from './resources/services/relation/relations.service'
import { RolePriceService } from './resources/services/role-price/role-price.service'
import { ScheduledInvoiceService } from './resources/services/schedule-invoice/schedule-invoice.service'
import { SearchService } from './resources/services/search/search.service'
import { SendLogService } from './resources/services/send-log/send-log.service'
import { StatusService } from './resources/services/status/status.service'
import { TagService } from './resources/services/tag/tag.service'
import { TaskService } from './resources/services/task/task.service'
import { TimeEntryService } from './resources/services/time-entry/time-entry.service'
import { TriggerActionService } from './resources/services/triggers-action/trigger-action.service'
import { UserGroupService } from './resources/services/user-group/user-group.service'
import { UserLaborCostService } from './resources/services/user-labor-cost/user-labor-cost.service'
import { UserRoleService } from './resources/services/user-role/user-role.service'
import { UserService } from './resources/services/user/user.service'
import { VatCodeService } from './resources/services/vat-code/vat-code.service'
import { WebhookService } from './resources/services/webhook/webhook.service'
import type { IApiPayload, IConfig } from './resources/types/api.type'

export class ScoroUserAPI {
  activity: ActivityService
  address: AddressService
  bill: BillsService
  bookmark: BookmarkService
  calendar: CalendarService
  category: CategoryService
  clientProfile: ClientProfileService
  comment: CommentService
  companyAccount: CompanyAccountService
  contact: ContactService
  customField: CustomFieldService
  customModule: CustomModuleService
  depot: DepotService
  eventResource: EventResourceService
  expense: ExpensesService
  file: FileService
  financeAccount: FinanceAccountService
  financeObject: FinanceObjectService
  invoice: InvoicesService
  localPriceList: LocalPriceListService
  notification: NotificationService
  order: OrdersService
  pdfTemplate: PDFTemplateService
  prepayment: PrepaymentsService
  priceList: PriceListService
  product: ProjectService
  productGroup: ProductGroupService
  project: ProjectService
  projectPhase: ProjectPhaseService
  purchaseOrder: PurchaseOrdersService
  quote: QuoteService
  receiptAccount: ReceiptAccountsService
  receiptGroup: ReceiptGroupsService
  relation: RelationService
  relationType: RelationTypeService
  rolePrice: RolePriceService
  scheduleInvoice: ScheduledInvoiceService
  search: SearchService
  sendLog: SendLogService
  status: StatusService
  tag: TagService
  task: TaskService
  timeEntry: TimeEntryService
  triggerAction: TriggerActionService
  user: UserService
  userGroup: UserGroupService
  userLaborCost: UserLaborCostService
  userRole: UserRoleService
  vatCode: VatCodeService
  webhook: WebhookService

  constructor(config: IConfig) {
    const serviceConfig: IApiPayload = {
      user_token: config.token,
      company_account_id: config.companyAccount,
      lang: config.language ?? 'eng',
      request: {},
    }

    this.activity = new ActivityService(config.siteUrl, serviceConfig)
    this.address = new AddressService(config.siteUrl, serviceConfig)
    this.bill = new BillsService(config.siteUrl, serviceConfig)
    this.bookmark = new BookmarkService(config.siteUrl, serviceConfig)
    this.calendar = new CalendarService(config.siteUrl, serviceConfig)
    this.category = new CategoryService(config.siteUrl, serviceConfig)
    this.clientProfile = new ClientProfileService(config.siteUrl, serviceConfig)
    this.comment = new CommentService(config.siteUrl, serviceConfig)
    this.companyAccount = new CompanyAccountService(
      config.siteUrl,
      serviceConfig
    )
    this.contact = new ContactService(config.siteUrl, serviceConfig)
    this.customField = new CustomFieldService(config.siteUrl, serviceConfig)
    this.customModule = new CustomModuleService(config.siteUrl, serviceConfig)
    this.depot = new DepotService(config.siteUrl, serviceConfig)
    this.eventResource = new EventResourceService(config.siteUrl, serviceConfig)
    this.expense = new ExpensesService(config.siteUrl, serviceConfig)
    this.file = new FileService(config.siteUrl, serviceConfig)
    this.financeAccount = new FinanceAccountService(
      config.siteUrl,
      serviceConfig
    )
    this.financeObject = new FinanceObjectService(config.siteUrl, serviceConfig)
    this.invoice = new InvoicesService(config.siteUrl, serviceConfig)
    this.localPriceList = new LocalPriceListService(
      config.siteUrl,
      serviceConfig
    )
    this.notification = new NotificationService(config.siteUrl, serviceConfig)
    this.order = new OrdersService(config.siteUrl, serviceConfig)
    this.pdfTemplate = new PDFTemplateService(config.siteUrl, serviceConfig)
    this.prepayment = new PrepaymentsService(config.siteUrl, serviceConfig)
    this.priceList = new PriceListService(config.siteUrl, serviceConfig)
    this.product = new ProjectService(config.siteUrl, serviceConfig)
    this.productGroup = new ProductGroupService(config.siteUrl, serviceConfig)
    this.project = new ProjectService(config.siteUrl, serviceConfig)
    this.projectPhase = new ProjectPhaseService(config.siteUrl, serviceConfig)
    this.purchaseOrder = new PurchaseOrdersService(
      config.siteUrl,
      serviceConfig
    )
    this.quote = new QuoteService(config.siteUrl, serviceConfig)
    this.receiptAccount = new ReceiptAccountsService(
      config.siteUrl,
      serviceConfig
    )
    this.receiptGroup = new ReceiptGroupsService(config.siteUrl, serviceConfig)
    this.relation = new RelationService(config.siteUrl, serviceConfig)
    this.relationType = new RelationTypeService(config.siteUrl, serviceConfig)
    this.rolePrice = new RolePriceService(config.siteUrl, serviceConfig)
    this.scheduleInvoice = new ScheduledInvoiceService(
      config.siteUrl,
      serviceConfig
    )
    this.search = new SearchService(config.siteUrl, serviceConfig)
    this.sendLog = new SendLogService(config.siteUrl, serviceConfig)
    this.status = new StatusService(config.siteUrl, serviceConfig)
    this.tag = new TagService(config.siteUrl, serviceConfig)
    this.task = new TaskService(config.siteUrl, serviceConfig)
    this.timeEntry = new TimeEntryService(config.siteUrl, serviceConfig)
    this.triggerAction = new TriggerActionService(config.siteUrl, serviceConfig)
    this.user = new UserService(config.siteUrl, serviceConfig)
    this.userGroup = new UserGroupService(config.siteUrl, serviceConfig)
    this.userLaborCost = new UserLaborCostService(config.siteUrl, serviceConfig)
    this.userRole = new UserRoleService(config.siteUrl, serviceConfig)
    this.vatCode = new VatCodeService(config.siteUrl, serviceConfig)
    this.webhook = new WebhookService(config.siteUrl, serviceConfig)
  }
}

export class ScoroCompanyAPI {
  activity: ActivityService
  address: AddressService
  bill: BillsService
  bookmark: BookmarkService
  calendar: CalendarService
  category: CategoryService
  clientProfile: ClientProfileService
  comment: CommentService
  companyAccount: CompanyAccountService
  contact: ContactService
  customField: CustomFieldService
  customModule: CustomModuleService
  depot: DepotService
  eventResource: EventResourceService
  expense: ExpensesService
  file: FileService
  financeAccount: FinanceAccountService
  financeObject: FinanceObjectService
  invoice: InvoicesService
  localPriceList: LocalPriceListService
  notification: NotificationService
  order: OrdersService
  pdfTemplate: PDFTemplateService
  prepayment: PrepaymentsService
  priceList: PriceListService
  product: ProjectService
  productGroup: ProductGroupService
  project: ProjectService
  projectPhase: ProjectPhaseService
  purchaseOrder: PurchaseOrdersService
  quote: QuoteService
  receiptAccount: ReceiptAccountsService
  receiptGroup: ReceiptGroupsService
  relation: RelationService
  relationType: RelationTypeService
  rolePrice: RolePriceService
  scheduleInvoice: ScheduledInvoiceService
  search: SearchService
  sendLog: SendLogService
  status: StatusService
  tag: TagService
  task: TaskService
  timeEntry: TimeEntryService
  triggerAction: TriggerActionService
  user: UserService
  userGroup: UserGroupService
  userLaborCost: UserLaborCostService
  userRole: UserRoleService
  vatCode: VatCodeService
  webhook: WebhookService

  constructor(config: IConfig) {
    const serviceConfig: IApiPayload = {
      apiKey: config.token,
      company_account_id: config.companyAccount,
      lang: config.language ?? 'eng',
      request: {},
    }

    this.activity = new ActivityService(config.siteUrl, serviceConfig)
    this.address = new AddressService(config.siteUrl, serviceConfig)
    this.bill = new BillsService(config.siteUrl, serviceConfig)
    this.bookmark = new BookmarkService(config.siteUrl, serviceConfig)
    this.calendar = new CalendarService(config.siteUrl, serviceConfig)
    this.category = new CategoryService(config.siteUrl, serviceConfig)
    this.clientProfile = new ClientProfileService(config.siteUrl, serviceConfig)
    this.comment = new CommentService(config.siteUrl, serviceConfig)
    this.companyAccount = new CompanyAccountService(
      config.siteUrl,
      serviceConfig
    )
    this.contact = new ContactService(config.siteUrl, serviceConfig)
    this.customField = new CustomFieldService(config.siteUrl, serviceConfig)
    this.customModule = new CustomModuleService(config.siteUrl, serviceConfig)
    this.depot = new DepotService(config.siteUrl, serviceConfig)
    this.eventResource = new EventResourceService(config.siteUrl, serviceConfig)
    this.expense = new ExpensesService(config.siteUrl, serviceConfig)
    this.file = new FileService(config.siteUrl, serviceConfig)
    this.financeAccount = new FinanceAccountService(
      config.siteUrl,
      serviceConfig
    )
    this.financeObject = new FinanceObjectService(config.siteUrl, serviceConfig)
    this.invoice = new InvoicesService(config.siteUrl, serviceConfig)
    this.localPriceList = new LocalPriceListService(
      config.siteUrl,
      serviceConfig
    )
    this.notification = new NotificationService(config.siteUrl, serviceConfig)
    this.order = new OrdersService(config.siteUrl, serviceConfig)
    this.pdfTemplate = new PDFTemplateService(config.siteUrl, serviceConfig)
    this.prepayment = new PrepaymentsService(config.siteUrl, serviceConfig)
    this.priceList = new PriceListService(config.siteUrl, serviceConfig)
    this.product = new ProjectService(config.siteUrl, serviceConfig)
    this.productGroup = new ProductGroupService(config.siteUrl, serviceConfig)
    this.project = new ProjectService(config.siteUrl, serviceConfig)
    this.projectPhase = new ProjectPhaseService(config.siteUrl, serviceConfig)
    this.purchaseOrder = new PurchaseOrdersService(
      config.siteUrl,
      serviceConfig
    )
    this.quote = new QuoteService(config.siteUrl, serviceConfig)
    this.receiptAccount = new ReceiptAccountsService(
      config.siteUrl,
      serviceConfig
    )
    this.receiptGroup = new ReceiptGroupsService(config.siteUrl, serviceConfig)
    this.relation = new RelationService(config.siteUrl, serviceConfig)
    this.relationType = new RelationTypeService(config.siteUrl, serviceConfig)
    this.rolePrice = new RolePriceService(config.siteUrl, serviceConfig)
    this.scheduleInvoice = new ScheduledInvoiceService(
      config.siteUrl,
      serviceConfig
    )
    this.search = new SearchService(config.siteUrl, serviceConfig)
    this.sendLog = new SendLogService(config.siteUrl, serviceConfig)
    this.status = new StatusService(config.siteUrl, serviceConfig)
    this.tag = new TagService(config.siteUrl, serviceConfig)
    this.task = new TaskService(config.siteUrl, serviceConfig)
    this.timeEntry = new TimeEntryService(config.siteUrl, serviceConfig)
    this.triggerAction = new TriggerActionService(config.siteUrl, serviceConfig)
    this.user = new UserService(config.siteUrl, serviceConfig)
    this.userGroup = new UserGroupService(config.siteUrl, serviceConfig)
    this.userLaborCost = new UserLaborCostService(config.siteUrl, serviceConfig)
    this.userRole = new UserRoleService(config.siteUrl, serviceConfig)
    this.vatCode = new VatCodeService(config.siteUrl, serviceConfig)
    this.webhook = new WebhookService(config.siteUrl, serviceConfig)
  }
}
