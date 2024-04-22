import { APIClient } from '../../base'
import { IComment } from './types/comment.type'

export class CommentService extends APIClient {
  async listComments(
    request: Partial<IComment>,
    filters: Record<string, unknown> = {}
  ): Promise<IComment[]> {
    return this.list<IComment>('comments', filters, request)
  }

  async modifyComment(
    id: number,
    request: Partial<IComment>
  ): Promise<IComment> {
    return this.update<IComment>('comments', id, request)
  }

  async deleteComment(id: number): Promise<void> {
    return this.delete('comments', id)
  }
}
