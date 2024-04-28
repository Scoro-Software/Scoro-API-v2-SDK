import { APIClient } from '../../base'
import { IDocPdf } from '../shared/types/doc-pdf.type'
import { IExpense } from './types/expense.type'

export class ExpensesService extends APIClient {
  async getExpense(id: number): Promise<IExpense> {
    return await this.view<IExpense>('expenses', id)
  }

  async getExpenses(): Promise<IExpense[]> {
    return await this.list<IExpense>('expenses')
  }

  async updateExpense(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('expenses', id, data)
  }

  async createExpense(data: Partial<IExpense>): Promise<IExpense> {
    return await this.create('expenses', data)
  }

  async deleteExpense(id: number): Promise<void> {
    await this.delete('expenses', id)
  }

  async findAllExpensesBy(
    filters: Record<string, unknown>
  ): Promise<IExpense[]> {
    return await this.list<IExpense>('expenses', filters)
  }
}
