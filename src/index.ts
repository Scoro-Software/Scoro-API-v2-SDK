import { ActivityService } from '@/services/activity/activity.service'
import { AddressService } from '@/services/address/address.service'
import { BillsService } from '@/services/bill/bill.service'
import { BookmarkService } from '@/services/bookmark/bookmark.service'
import { CalendarService } from '@/services/calendar/calendar.service'
import { CategoryService } from '@/services/category/category.service'
import { ClientProfileService } from '@/services/client-profile/client-profile.service'
import { CommentService } from '@/services/comment/comment.service'
import { CompanyAccountService } from '@/services/company-account/company-account.service'
import { ContactService } from '@/services/contact/contact.service'
import { CustomFieldService } from '@/services/custom-field/custom-field.service'
import { CustomModuleService } from '@/services/custom-module/custom-module.service'
import { DepotService } from '@/services/depot/depot.service'
import { EventResourceService } from '@/services/event-resource/event-resource.service'
import { ExpensesService } from '@/services/expense/expense.service'
import { FileService } from '@/services/file/file.service'
import { FinanceAccountService } from '@/services/finance-account/finance-account.service'
import { FinanceObjectService } from '@/services/finance-object/finance-object.service'
import { InvoicesService } from '@/services/invoice/invoice.service'
import { LocalPriceListService } from '@/services/local-price-list/local-price-list.service'
import { NotificationService } from '@/services/notification/notification.service'
import { OrdersService } from '@/services/order/order.service'
import { PDFTemplateService } from '@/services/pdf-template/pdf-template.service'
import { PrepaymentsService } from '@/services/prepayment/prepayment.service'
import { PriceListService } from '@/services/price-list/price-list.service'
import { ProductService } from '@/services/product/product.service'
import { ProductGroupService } from '@/services/product-group/product-group.service'
import { ProjectPhaseService } from '@/services/project-phase/project-phase.service'
import { ProjectService } from '@/services/project/project.service'
import { PurchaseOrdersService } from '@/services/purchase-order/purchase-order.service'
import { QuoteService } from '@/services/quote/quote.service'
import { ReceiptAccountsService } from '@/services/receipt-account/receipt-account.service'
import { ReceiptGroupsService } from '@/services/receipt-group/receipt-group.service'
import { RelationTypeService } from '@/services/relation-type/relation-type.service'
import { RelationService } from '@/services/relation/relations.service'
import { RolePriceService } from '@/services/role-price/role-price.service'
import { ScheduledInvoiceService } from '@/services/schedule-invoice/schedule-invoice.service'
import { SearchService } from '@/services/search/search.service'
import { SendLogService } from '@/services/send-log/send-log.service'
import { StatusService } from '@/services/status/status.service'
import { TagService } from '@/services/tag/tag.service'
import { TaskService } from '@/services/task/task.service'
import { TimeEntryService } from '@/services/time-entry/time-entry.service'
import { TriggerActionService } from '@/services/triggers-action/trigger-action.service'
import { UserGroupService } from '@/services/user-group/user-group.service'
import { UserLaborCostService } from '@/services/user-labor-cost/user-labor-cost.service'
import { UserRoleService } from '@/services/user-role/user-role.service'
import { UserService } from '@/services/user/user.service'
import { VatCodeService } from '@/services/vat-code/vat-code.service'
import { WebhookService } from '@/services/webhook/webhook.service'
import type { IApiPayload, IConfig } from './resources/types/api.type'

export class ScoroUserAPI {
  readonly activity: ActivityService
  readonly address: AddressService
  readonly bill: BillsService
  readonly bookmark: BookmarkService
  readonly calendar: CalendarService
  readonly category: CategoryService
  readonly clientProfile: ClientProfileService
  readonly comment: CommentService
  readonly companyAccount: CompanyAccountService
  readonly contact: ContactService
  readonly customField: CustomFieldService
  readonly customModule: CustomModuleService
  readonly depot: DepotService
  readonly eventResource: EventResourceService
  readonly expense: ExpensesService
  readonly file: FileService
  readonly financeAccount: FinanceAccountService
  readonly financeObject: FinanceObjectService
  readonly invoice: InvoicesService
  readonly localPriceList: LocalPriceListService
  readonly notification: NotificationService
  readonly order: OrdersService
  readonly pdfTemplate: PDFTemplateService
  readonly prepayment: PrepaymentsService
  readonly priceList: PriceListService
  readonly product: ProductService
  readonly productGroup: ProductGroupService
  readonly project: ProjectService
  readonly projectPhase: ProjectPhaseService
  readonly purchaseOrder: PurchaseOrdersService
  readonly quote: QuoteService
  readonly receiptAccount: ReceiptAccountsService
  readonly receiptGroup: ReceiptGroupsService
  readonly relation: RelationService
  readonly relationType: RelationTypeService
  readonly rolePrice: RolePriceService
  readonly scheduleInvoice: ScheduledInvoiceService
  readonly search: SearchService
  readonly sendLog: SendLogService
  readonly status: StatusService
  readonly tag: TagService
  readonly task: TaskService
  readonly timeEntry: TimeEntryService
  readonly triggerAction: TriggerActionService
  readonly user: UserService
  readonly userGroup: UserGroupService
  readonly userLaborCost: UserLaborCostService
  readonly userRole: UserRoleService
  readonly vatCode: VatCodeService
  readonly webhook: WebhookService

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
    this.product = new ProductService(config.siteUrl, serviceConfig)
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
  readonly activity: ActivityService
  readonly address: AddressService
  readonly bill: BillsService
  readonly bookmark: BookmarkService
  readonly calendar: CalendarService
  readonly category: CategoryService
  readonly clientProfile: ClientProfileService
  readonly comment: CommentService
  readonly companyAccount: CompanyAccountService
  readonly contact: ContactService
  readonly customField: CustomFieldService
  readonly customModule: CustomModuleService
  readonly depot: DepotService
  readonly eventResource: EventResourceService
  readonly expense: ExpensesService
  readonly file: FileService
  readonly financeAccount: FinanceAccountService
  readonly financeObject: FinanceObjectService
  readonly invoice: InvoicesService
  readonly localPriceList: LocalPriceListService
  readonly notification: NotificationService
  readonly order: OrdersService
  readonly pdfTemplate: PDFTemplateService
  readonly prepayment: PrepaymentsService
  readonly priceList: PriceListService
  readonly product: ProductService
  readonly productGroup: ProductGroupService
  readonly project: ProjectService
  readonly projectPhase: ProjectPhaseService
  readonly purchaseOrder: PurchaseOrdersService
  readonly quote: QuoteService
  readonly receiptAccount: ReceiptAccountsService
  readonly receiptGroup: ReceiptGroupsService
  readonly relation: RelationService
  readonly relationType: RelationTypeService
  readonly rolePrice: RolePriceService
  readonly scheduleInvoice: ScheduledInvoiceService
  readonly search: SearchService
  readonly sendLog: SendLogService
  readonly status: StatusService
  readonly tag: TagService
  readonly task: TaskService
  readonly timeEntry: TimeEntryService
  readonly triggerAction: TriggerActionService
  readonly user: UserService
  readonly userGroup: UserGroupService
  readonly userLaborCost: UserLaborCostService
  readonly userRole: UserRoleService
  readonly vatCode: VatCodeService
  readonly webhook: WebhookService

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
    this.product = new ProductService(config.siteUrl, serviceConfig)
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
