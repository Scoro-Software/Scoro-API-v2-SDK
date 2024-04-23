export interface IProjectPhase {
  id: number // Project phase's ID
  project_id: number // Project's ID
  type: string // Possible values are "phase" and "milestone"
  title: string // Project phase's title
  start_date: string // Project phase's start date (YYYY-mm-dd)
  end_date: string // Project phase's end date (YYYY-mm-dd)
  ordering: number // Project phase's order in list
  quote_line_id: number // Related quote line ID
}
