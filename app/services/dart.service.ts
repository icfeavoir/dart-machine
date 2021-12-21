import { db } from '../utils/db.server';

type WallTouched = {
  userId: string;
}

type Apero = {
  userId: string;
}

export async function addWallTouched(newWallTouched: WallTouched) {
  return db.wallTouched.create({ data: newWallTouched });
}

export async function removeWallTouched(removeWallTouched: WallTouched) {
  // get last item
  const wallTouched = await db.wallTouched.findFirst({
    where: { userId: removeWallTouched.userId },
    orderBy: { createdAt: 'desc' }
  });
  if (wallTouched) {
    return db.wallTouched.delete({ where: { id: wallTouched.id } });
  }
}

export async function addApero(apero: Apero) {
  return db.apero.create({ data: apero });
}