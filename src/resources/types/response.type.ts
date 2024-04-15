export interface IViewResponse<T> {
	status: string;
	statusCode: number;
	messages: Record<string, string>;
	errors: Record<string, string>;
	data: T;
}

export interface ICreateResponse<T> extends IViewResponse<T> {}

export interface IListResponse<T> {
	status: string;
	statusCode: number;
	messages: Record<string, string>;
	errors: Record<string, string>;
	data: T[];
}
