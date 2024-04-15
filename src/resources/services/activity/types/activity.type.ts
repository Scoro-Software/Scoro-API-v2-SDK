export interface IActivity {
	activityID: number;
	name: string;
	parentID: number;
	parentName: string;
	isGroup: boolean;
	isActive: boolean;
	productID: number;
	modifiedDate: Date;
}
