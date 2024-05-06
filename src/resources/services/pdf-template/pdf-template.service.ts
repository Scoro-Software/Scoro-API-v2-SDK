import { APIClient } from '../../base'
import { IPDFTemplate } from './types/pdf-template.type'

export class PDFTemplateService extends APIClient {
  async getPDFTemplates(): Promise<IPDFTemplate[]> {
    return await this.list<IPDFTemplate>('customFields')
  }

  async findAllPDFTemplatesBy(
    filters: Record<string, any>
  ): Promise<IPDFTemplate[]> {
    return await this.list<IPDFTemplate>('customFields', filters)
  }
}
