import { PrismaClient, PostKind, Prisma } from "./generated/client";

const prisma = new PrismaClient({});

async function main() {
  await prisma.$connect();

  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.patient.deleteMany({});
  await prisma.director.deleteMany({});
  await prisma.movie.deleteMany({});
  await prisma.nativeTypeModel.deleteMany({});

  await prisma.user.create({
    data: {
      age: 50,
      amount: 123,
      balance: 0,
      email: "test1@test.test",
      name: "Test",
      role: "ADMIN",
      grades: [5, 4, 4],
      aliases: ["Tony"],
      posts: {
        create: [
          {
            title: "Post title 1",
            subtitle: "Post subtitle 2",
            content: "Content 1",
            kind: PostKind.BLOG,
            createdAt: new Date("2019-08-16"),
            published: true,
            updatedAt: new Date("2019-08-17"),
            metadata: {
              publishedOnWikiLeaks: true,
            },
          },
          {
            title: "Post title 2",
            subtitle: "Post subtitle 2",
            content: "Content 2",
            kind: PostKind.ADVERT,
            createdAt: new Date("2019-08-17"),
            published: false,
            metadata: {
              publishedOnWikiLeaks: false,
            },
          },
        ],
      },
    },
  });
  await prisma.user.create({
    data: {
      age: 1,
      amount: 123,
      balance: 0,
      email: "test2@test.test",
      name: "Test",
      role: "USER",
      grades: [3, 2, 5],
      aliases: ["Johny"],
      posts: {
        create: [
          {
            title: "Post title 3",
            subtitle: "Post subtitle 3",
            content: "Content 3",
            kind: PostKind.BLOG,
            createdAt: new Date("2019-08-16"),
            published: true,
            updatedAt: new Date("2019-08-17"),
            metadata: {
              views: 1,
            },
          },
          {
            title: "Post title 4",
            subtitle: "Post subtitle 4",
            content: "Content 4",
            kind: PostKind.ADVERT,
            createdAt: new Date("2019-08-17"),
            published: false,
            metadata: {
              views: 0,
            },
          },
          {
            title: "Post title 5",
            subtitle: "Post subtitle 5",
            content: "Content 5",
            kind: PostKind.BLOG,
            createdAt: new Date("2019-08-16"),
            published: true,
            updatedAt: new Date("2019-08-17"),
            metadata: {
              views: 2137,
              publishedOnWikiLeaks: true,
            },
          },
        ],
      },
    },
  });

  await prisma.category.create({
    data: {
      name: "Famous stars",
      slug: "famous-stars",
      number: 1,
    },
  });
  await prisma.category.create({
    data: {
      name: "Famous stars",
      slug: "famous-stars-2",
      number: 2,
    },
  });

  await prisma.patient.create({
    data: {
      email: "test@test.test",
      firstName: "John",
      lastName: "Doe",
    },
  });
  await prisma.patient.create({
    data: {
      email: "test2@test.test",
      firstName: "John",
      lastName: "Bravo",
    },
  });

  await prisma.director.create({
    data: {
      firstName: "Bob",
      lastName: "Nolan",
      movies: {
        create: [{ title: "Hello World" }, { title: "Hello World 2" }],
      },
    },
  });

  await prisma.movie.create({
    data: {
      title: "Hello World 3",
      director: {
        create: {
          firstName: "Alice",
          lastName: "Allen",
        },
      },
    },
  });

  await prisma.nativeTypeModel.create({
    data: {
      bigInt: BigInt("123456789123456789"),
      decimal: new Prisma.Decimal(21.37),
      byteA: Buffer.from([4, 8, 15, 16, 23, 42]),
    },
  });

  console.log("All data inserted!");
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
