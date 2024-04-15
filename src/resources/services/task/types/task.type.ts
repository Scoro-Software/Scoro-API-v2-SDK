export interface ITimeEntry {
	timeEntryID?: number;
	description?: string;
	title?: string;
	userID?: number;
	activityID?: number;
	invoiceLineID?: number;
	eventID?: number;
	eventType?: string;
	calendarEventID?: number;
	timeEntryType?: string;
	startDatetime?: Date;
	endDatetime?: Date;
	duration?: string;
	billableDuration?: string;
	isCompleted?: number;
	isConfirmed?: boolean;
	isBillable?: boolean;
	completedDatetime?: Date;
	isLocked?: boolean;
	permissions?: unknown[];
	modifiedDate?: Date;
	isDeleted?: boolean;
	deletedDate?: Date;
}

export interface ITask {
	isCompleted: number;
	datetimeCompleted?: Date;
	assignedTo?: number; // Deprecated
	relatedUsers?: number[];
	relatedUsersEmails?: string[];
	durationActual?: string;
	startDatetime?: Date;
	datetimeDue?: Date;
	status?: string;
	statusName?: string;
	timeEntries?: ITimeEntry[];
	sortOrder?: number;
	quoteLineID?: number;
	priorityID?: number;
	eteID?: number;
	activityID?: number;
	activityType?: string;
	eventID?: number;
	eventName?: string;
	description?: string;
	isPersonal?: boolean;
	projectID?: number;
	projectPhaseID?: number;
	projectName?: string;
	companyID?: number;
	companyName?: string;
	personID?: number;
	personName?: string;
	invoiceID?: number;
	orderID?: number;
	quoteID?: number;
	purchaseOrderID?: number;
	rentOrderID?: number;
}
