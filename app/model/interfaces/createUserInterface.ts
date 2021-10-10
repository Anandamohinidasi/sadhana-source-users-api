export interface CreateUserDTO {
    _id?: string
    name: string
    document: string
    email: string
    password: string
    spiritualName: string
    guru: string
    permissions: string[]
  }