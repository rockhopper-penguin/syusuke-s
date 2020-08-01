import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import * as moment from "moment-timezone";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

const app: express.Express = express();

app.get("/", cors(), (req: express.Request, res: express.Response) => {
  return res.send("Communication successful!");
});

app.get("/data", cors(), (req: express.Request, res: express.Response) => {
  const data: object = {
    name: "Rockhopper-Penguin",
    Github_url: "https://github.com/rockhopper-penguin",
    using_language: "TypeScript",
    acquisition_time: moment()
      .tz("Asia/Tokyo")
      .format("YYYY-MM/DD hh:mm:ss"),
    time_zone: "JST (UTC+0900)",
  };
  return res.send(JSON.stringify(data));
});

// app.listen(3000);
// console.log("Server running port 3000");

export default app;

export const api = functions.https.onRequest(app);
