export interface IUser {
	email: string;
	isActive: boolean; // Deprecated
	status: string; // Possible values: active, inactive, pending, awaiting
	birthday: string; // Date (YYYY-mm-dd)
	category: string; // Possible values: user, admin or customer portal. Default values: user, admin.
	position: string; // User job/position.
	userPicture: string; // User profile image URL. Available only for "list" and "view" actions
	roleId: number;
	userGroupsIds: number[]; // User groups ID-s.
	countryId: string; // User country ID.
	gsm: string; // User phone number.
	timezone: string; // User timezone
	modifiedDate: Date | null; // The date when user was last modified.
}
