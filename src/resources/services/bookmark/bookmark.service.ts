import { APIClient } from '../../base'
import type { IBookmark } from './types/bookmark.type'

export class BookmarkService extends APIClient {
  async getBookmarks(): Promise<IBookmark[]> {
    return await this.list<IBookmark>('bookmarks')
  }

  async findAllBookmarkBy(
    query: Record<string, unknown>
  ): Promise<IBookmark[]> {
    return await this.list<IBookmark>('bookmarks', query)
  }
}
