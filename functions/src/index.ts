import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { articleRouter } from "./router/article";
import { announcementRouter } from "./router/announcement";
import { tagRouter } from "./router/tag";
import { workRouter } from "./router/work";
// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();
app.use(cors());

// app.options("*", cors);

app.use("/article", articleRouter);
app.use("/announcement", announcementRouter);
app.use("/tag", tagRouter);
app.use("/work", workRouter);

export const api = functions
    .region("asia-northeast1")
    .runWith({
        timeoutSeconds: 60,
        memory: "512MB",
    })
    .https.onRequest(app);
