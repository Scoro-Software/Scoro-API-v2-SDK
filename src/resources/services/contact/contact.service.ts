import { APIClient } from '../../base'
import { IContactRelatedObjects } from './types/contact-related-object.type'
import { IContact } from './types/contact.type'

export class ContactService extends APIClient {
  async listContacts(
    filters: Record<string, unknown> = {}
  ): Promise<IContact[]> {
    return this.list<IContact>('contacts', filters)
  }

  async viewContact(id: number): Promise<IContact> {
    return this.view<IContact>('contacts', id)
  }

  async createContact(contact: IContact): Promise<IContact> {
    return this.create<IContact>('contacts', contact)
  }

  async updateContact(id: number, contact: IContact): Promise<IContact> {
    return this.update<IContact>('contacts', id, contact)
  }

  async deleteContact(id: number): Promise<void> {
    return this.delete('contacts', id)
  }

  async getRelatedObjects(id: number): Promise<IContactRelatedObjects> {
    return this.customCallWithouBodyAndId<IContactRelatedObjects>(
      'contacts',
      'getRelatedObjects',
      id
    )
  }
}
