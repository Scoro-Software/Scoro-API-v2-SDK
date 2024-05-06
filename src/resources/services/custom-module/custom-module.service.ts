import { APIClient } from '../../base'
import { ICustomModule } from './types/custom-module.type'

export class CustomModuleService extends APIClient {
  async getCustomModules(): Promise<ICustomModule[]> {
    return await this.list<ICustomModule>('customModules')
  }

  async findAllCustomModulesBy(
    filters: Record<string, any>
  ): Promise<ICustomModule[]> {
    return await this.list<ICustomModule>('customModules', filters)
  }

  async getCustomModule(id: number): Promise<ICustomModule> {
    return await this.view<ICustomModule>('customModules', id)
  }
}
