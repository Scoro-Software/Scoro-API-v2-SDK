import { APIClient } from '../../base'
import { IContact } from './types/contact.type'

export class ContactService extends APIClient {
  async listContacts(
    filters: Record<string, unknown> = {}
  ): Promise<IContact[]> {
    return this.list<IContact>('contact', filters)
  }

  async viewContact(id: number): Promise<IContact> {
    return this.view<IContact>('contact', id)
  }

  async createContact(contact: IContact): Promise<IContact> {
    return this.create<IContact>('contact', contact)
  }

  async updateContact(id: number, contact: IContact): Promise<IContact> {
    return this.update<IContact>('contact', id, contact)
  }

  async deleteContact(id: number): Promise<void> {
    return this.delete('contact', id)
  }
}
