"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const moment = require("moment");
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
const app = express();
app.get("/", cors(), (req, res) => {
    return res.send("Communication successful!");
});
app.get("/data", cors(), (req, res) => {
    const data = {
        name: "Rockhopper-Penguin",
        Github_url: "https://github.com/rockhopper-penguin",
        using_language: "TypeScript",
        acquisition_time: moment().format("YYYY-MM/DD hh:mm:ss"),
    };
    return res.send(JSON.stringify(data));
});
// app.listen(3000);
// console.log("Server running port 3000");
exports.default = app;
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map