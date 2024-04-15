import { ActivityService } from './resources/services/activity/activity.service';
import { ProjectService } from './resources/services/project/project.service';
import { TaskService } from './resources/services/task/task.service';
import { UserService } from './resources/services/user/user.service';
import type { IApiPayload, IConfig } from './resources/types/api.type';

export class ScoroUserAPI {
	user: UserService;
	task: TaskService;
	project: ProjectService;
	activity: ActivityService;

	constructor(config: IConfig) {
		const serviceConfig: IApiPayload = {
			user_token: config.token,
			company_account_id: config.companyAccount,
			lang: config.language ?? 'eng',
			request: {},
		};

		this.user = new UserService(config.siteUrl, serviceConfig);
		this.task = new TaskService(config.siteUrl, serviceConfig);
		this.project = new ProjectService(config.siteUrl, serviceConfig);
		this.activity = new ActivityService(config.siteUrl, serviceConfig);
	}
}

export class ScoroCompanyAPI {
	user: UserService;
	task: TaskService;
	project: ProjectService;
	activity: ActivityService;

	constructor(config: IConfig) {
		const serviceConfig: IApiPayload = {
			apiKey: config.token,
			company_account_id: config.companyAccount,
			lang: config.language ?? 'eng',
			request: {},
		};

		this.user = new UserService(config.siteUrl, serviceConfig);
		this.task = new TaskService(config.siteUrl, serviceConfig);
		this.project = new ProjectService(config.siteUrl, serviceConfig);
		this.activity = new ActivityService(config.siteUrl, serviceConfig);
	}
}
