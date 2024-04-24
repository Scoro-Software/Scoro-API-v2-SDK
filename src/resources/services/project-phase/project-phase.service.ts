import { APIClient } from '../../base'
import type { IProjectPhase } from './types/project-phase.type'

export class ProjectPhaseService extends APIClient {
  async getProjectServices(): Promise<IProjectPhase[]> {
    return await this.list<IProjectPhase>('projectPhases')
  }
}
