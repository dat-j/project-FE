export type User = {
    id: number
    roleId: number
    email: string
    createdAt: string
    updatedAt: string
    deletedAt: Date | null
    active?: boolean
  }
  