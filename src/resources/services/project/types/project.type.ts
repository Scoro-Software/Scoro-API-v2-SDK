export type IPhase = Record<string, unknown>;

export interface IProject {
	projectID: number;
	no: number;
	projectName: string;
	description: string;
	companyID: number;
	companyName?: string; // Only available for user based API
	isPersonal?: boolean;
	isPrivate?: boolean;
	color?: string; // Format is in hex "#ffffff"
	status?: string; // Possible values: pending, inprogress, cancelled, completed, future, additional1, additional2, additional3, additional4
	statusName?: string; // Available in view request
	managerID?: number;
	managerEmail?: string;
	date?: string; // Format: YYYY-mm-dd
	deadline?: string; // Format: YYYY-mm-dd
	duration?: string; // Format: HH:ii:ss
	phases?: IPhase[]; // Phases will only be filled for view requests
	accountID?: string;
	budgetType?: string; // Possible values: quote, simple, advanced. Used only for list and view requests
	modifiedDate?: Date; // Format: YYYY-mm-dd HH:ii:ss
	deletedDate?: Date; // Format: Y-m-d\TH:i:sP
	tags?: string[]; // Array of project tags. Not used on list requests
	permissions?: Array<Record<string, unknown>>; // Type might vary, needs further definition. Used only for user based API
	projectUsers?: Array<Record<string, unknown>>; // Type might vary, needs further definition. Used only for modify and view requests
	projectCustomerPortalUsers?: Array<Record<string, unknown>>; // Type might vary, needs further definition. Used only for view requests
	projectAccounts?: Array<Record<string, unknown>>; // Type might vary, needs further definition. Project is shared between those accounts
	stripDescription?: boolean; // Deprecated Can use this argument on view requests. Strips HTML from project description field. Default value for this is true
	isRoleBased?: boolean; // If project is role based or service based. Available if roles are turned on
	localPriceListID?: number; // Local price list ID. Available for role based projects
	customFields?: Record<string, unknown>; // Type might vary, needs further definition. Only filled on view requests
	isDeleted?: boolean; // Is deleted. Use 'include_deleted = 1' in request object to get deleted objects to response as well
}
