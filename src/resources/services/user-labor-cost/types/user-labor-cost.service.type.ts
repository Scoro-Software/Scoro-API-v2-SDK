interface ILaborCost {
  date: string
  hour_cost: number
}

export interface IUserLaborCost {
  user_id: number
  labor_cost: ILaborCost[]
}
