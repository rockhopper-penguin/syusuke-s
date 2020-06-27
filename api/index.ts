import express from "express";

const app: express.Express = express();

app.get("/", (req: express.Request, res: express.Response) => {
  return res.send("Communication successful!");
});

app.get("/data", (req: express.Request, res: express.Response) => {
  const data: object = [
    {
      name: "Rockhopper-Penguin",
      Github_url: "https://github.com/rockhopper-penguin",
      using_language: "TypeScript",
    },
  ];
  return res.send(JSON.stringify(data));
});

app.listen(3000);
console.log("Server running port 3000");

export default app;
