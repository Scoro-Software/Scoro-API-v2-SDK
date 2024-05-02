export interface IRelation {
  object_id: number
  related_objects: IObject[] | Record<string, IObject>[]
  type: string
  custom_fields?: { id: string; name: string; value: unknown; type: string }[] // Only filled on view requests
}

export interface IDeleteRelations {
  object_id: number
  related_objects: number[]
  type: string
}

interface IObject {
  id: number
  relation: string
  comment: string
  is_default: boolean
}
