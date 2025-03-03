import { APIClient } from '@/resources/base'
import { ICalendar } from './types/calendar.type'

export class CalendarService extends APIClient {
  async getCalendarEvents(): Promise<ICalendar[]> {
    return await this.list<ICalendar>('calendar')
  }

  async findAllCalendarEventsBy(
    filters: Record<string, any>,
    perPage = 50,
    page = 1,
    detailedResponse = true
  ): Promise<ICalendar[]> {
    return await this.list<ICalendar>(
      'calendar',
      filters,
      {},
      perPage,
      page,
      detailedResponse
    )
  }

  async getCalendarById(id: number): Promise<ICalendar> {
    return await this.view<ICalendar>('calendar', id)
  }

  async createCalendar(data: Partial<ICalendar>): Promise<ICalendar> {
    return await this.create<ICalendar>('calendar', data)
  }

  async updateCalendar(
    id: number,
    data: Partial<ICalendar>
  ): Promise<ICalendar> {
    return await this.update<ICalendar>('calendar', id, data)
  }

  async deleteCalendar(id: number): Promise<void> {
    await this.delete('calendar', id)
  }
}
