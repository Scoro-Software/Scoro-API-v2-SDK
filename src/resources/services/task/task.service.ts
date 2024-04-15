import { APIClient } from './../../base';
import type { ITask } from './types/task.type';

export class TaskService extends APIClient {
	async getTask(id: number): Promise<ITask> {
		return await this.view<ITask>('tasks', id);
	}

	async getTasks(): Promise<ITask[]> {
		return await this.list<ITask>('tasks');
	}

	async createTask(task: Partial<ITask>): Promise<ITask> {
		return await this.create<ITask>('tasks', task);
	}

	async updateTask(id: number, task: Partial<ITask>): Promise<ITask> {
		return await this.update<ITask>('tasks', id, task);
	}

	async deleteTask(id: number): Promise<void> {
		await this.delete('tasks', id);
	}

	async findAllByPersonId(personId: number): Promise<ITask[]> {
		return await this.list<ITask>('tasks', { person_id: personId });
	}

	async findAllByCompanyId(companyId: number): Promise<ITask[]> {
		return await this.list<ITask>('tasks', { company_id: companyId });
	}

	async findAllByProjectId(projectId: number): Promise<ITask[]> {
		return await this.list<ITask>('tasks', { project_id: projectId });
	}

	async findAllBy(filter: Record<string, unknown>): Promise<ITask[]> {
		return await this.list<ITask>('tasks', filter);
	}
}
