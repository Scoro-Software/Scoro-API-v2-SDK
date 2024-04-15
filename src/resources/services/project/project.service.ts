import { APIClient } from './../../base';
import type { IProject } from './types/project.type';

export class ProjectService extends APIClient {
	async getProjects(): Promise<IProject[]> {
		return await this.list<IProject>('projects');
	}

	async getProject(id: number): Promise<IProject> {
		return await this.view<IProject>('projects', id);
	}

	async createProject(data: Partial<IProject>): Promise<IProject> {
		return await this.create<IProject>('projects', data);
	}

	async updateProject(id: number, data: Partial<IProject>): Promise<IProject> {
		return await this.update<IProject>('projects', id, data);
	}

	async deleteProject(id: number): Promise<void> {
		await this.delete('projects', id);
	}

	async getActiveProjects(): Promise<IProject[]> {
		return await this.list<IProject>('projects', { status: 'inprogress' });
	}

	async getCompletedProjects(): Promise<IProject[]> {
		return await this.list<IProject>('projects', { status: 'completed' });
	}

	async findAllBy(query: Record<string, unknown>): Promise<IProject[]> {
		return await this.list<IProject>('projects', query);
	}
}
