import { APIClient } from '../../base'
import { IFileUpload } from './types/file-upload.type'
import { IFile } from './types/file.type'

export class FileService extends APIClient {
  async getFiles(): Promise<IFile[]> {
    return await this.list<IFile>('files')
  }

  async createFile(data: Partial<IFile>): Promise<IFile> {
    return await this.create<IFile>('files', data)
  }

  async updateFile(id: number, data: Partial<IFile>): Promise<IFile> {
    return await this.update<IFile>('files', id, data)
  }

  async deleteFile(id: number): Promise<void> {
    await this.delete('files', id)
  }

  async getFile(id: number): Promise<IFile> {
    return await this.view<IFile>('files', id)
  }

  async downloadBinary(id: number): Promise<void> {
    await this.customCallWithouBodyAndId('files', 'download', id)
  }

  async addRelation(id: number, data: Partial<IFile>): Promise<void> {
    await this.customCallWithBodyAndId('files', 'download', id, data)
  }

  async removeRelation(id: number, data: Partial<IFile>): Promise<void> {
    await this.customCallWithBodyAndId('files', 'download', id, data)
  }

  async uploadFile(data: Partial<IFileUpload>): Promise<void> {
    await this.customCallWithBody('files', 'modify', data)
  }
}
