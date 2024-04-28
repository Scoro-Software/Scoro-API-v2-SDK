export interface IFile {
  file_id: number
  hash: string
  file_name: string
  file_location: string
  file_size: string
  uploaded_by: number
  category_id: number
  repository: string // possible values are "local" - stored in Scoro, "ftp"
  file_type: string // default is "other"
  is_private: boolean
  is_public: boolean
  rel_type?: string // Related object type. Should be filled for only addRelation/removeRelation request
  rel_id?: number // Related object id. Should be filled for only addRelation/removeRelation request
  relations?: { [type: string]: number[] } // Related object ids by type. Is filled only for view request.
  permissions?: unknown[] // Object user permissions. Used only for user-based API list request
  is_deleted: boolean
  deleted_date?: string // The date when object was deleted
}
