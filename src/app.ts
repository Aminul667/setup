import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

//parsers
app.use(express.json());
// app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"] }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

// ! see: 8-3 Installing eslint, refactor code, fix errors using command