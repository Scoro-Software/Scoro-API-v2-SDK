import { ICustomModule } from '../../custom-module/types/custom-module.type'

export interface ICustomField {
  id: string
  name: string
  type: string
  is_filterable: boolean
  modules: ICustomModule[]
}
