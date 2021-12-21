import { PrismaClient } from "@prisma/client";
let db = new PrismaClient();

async function seed() {
  await db.wallTouched.deleteMany({});
  await db.user.deleteMany({});
  await Promise.all(
    getUsers().map(user => {   
      return db.user.create({ data: user });
    })
  );
}

seed();

function getUsers() {
  return [
    { name: "Test" },
    { name: "Pierre", walls: {create: [{},{}]}  },
  ];
}
