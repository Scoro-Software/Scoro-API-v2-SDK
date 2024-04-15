export interface IConfig {
	token: string;
	siteUrl: string;
	companyAccount: string;
	language?: string;
}

export interface IUserConfig extends IConfig {}

export interface IApiPayload {
	lang: string;
	user_token?: string;
	apiKey?: string;
	company_account_id: string;
	request: Record<string, string>;
	filter?: Record<string, string>;
	perPage?: number;
}
