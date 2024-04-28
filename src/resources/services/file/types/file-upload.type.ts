export interface IFileUpload {
  size: number // total size of file being uploaded (original file size, not base64 string)
  name: string // file name
  chunk_no: number // number of chunk currently being uploaded
  chunks_total: number // total number of chunks
  chunk_data: string // base64 encoded String that cannot be bigger than 5000000 bytes
  uploaded_by: number // User ID
}
