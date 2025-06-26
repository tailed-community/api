import { onRequest } from "firebase-functions/https";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth";

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();
const _cors = cors({ origin: true });

app.use(_cors);
app.use(cookieParser());

//Routes
app.use("/auth", authRouter);

exports.app = onRequest({ cors: true }, app);
