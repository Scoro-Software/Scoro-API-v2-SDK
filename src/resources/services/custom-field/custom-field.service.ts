import { APIClient } from '../../base'
import { ICustomField } from './types/custom-field.type'

export class CustomFieldService extends APIClient {
  async getCustomFields(): Promise<ICustomField[]> {
    return await this.list<ICustomField>('customFields')
  }

  async findAllCustomFieldsBy(
    filters: Record<string, unknown>
  ): Promise<ICustomField[]> {
    return await this.list<ICustomField>('customFields', filters)
  }
}
