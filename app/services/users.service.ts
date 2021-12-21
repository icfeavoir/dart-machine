import { User } from '~/types';
import { db } from '../utils/db.server';


export async function createUser(newUser: User) {
  return db.user.create({ data: newUser });
}
