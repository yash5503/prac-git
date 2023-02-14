import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  res.json(user);
});

// app.get("/", async (req: Request, res: Response) => {
//   const users = await prisma.user.findMany({
//     include: { Car: true },
//   });
//   res.json(users);
// });

// app.put("/update/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const body = req.body;
//   const updatedUser = await prisma.user.update({
//     where: {
//       id: Number(id),
//     },
//     data: body,
//   });
//   res.json(updatedUser);
// });

// app.delete("/:id", async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const deletedUser = await prisma.user.delete({
//     where: {
//       id: Number(id),
//     },
//   });
//   res.json(deletedUser);
// });

// app.post("/createManyCars", async (req: Request, res: Response) => {
//   const { carList } = req.body;
//   const cars = await prisma.car.createMany({
//     data: carList,
//   });
//   res.json(cars);
// });

app.listen(3001, () => {
  console.log("server run on 3001");
});

// gitchange and pull

//this is dev branch
