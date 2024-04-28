export interface IBookmark {
  country: {
    country_code: string
    country_name: string
  }[]
  city: {
    city: string
  }[]
  street: {
    street: string
  }[]
  county: {
    county: string
  }[]
  municipality: {
    municipality: string
  }[]
  zipcode: {
    zipcode: string
  }[]
}
