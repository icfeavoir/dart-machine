export type User = {
  id?: string,
  name: string,
  walls?: Array<Wall>,
  aperos?: Array<Apero>,
  createdAt?: Date,
  updatedAt?: Date,
}

export type Wall = {
  id: string,
  userId: string,
  createdAt: Date,
  updatedAt: Date,
}

export type Apero = {
  id: string,
  userId: string,
  createdAt: Date,
  updatedAt: Date,
}