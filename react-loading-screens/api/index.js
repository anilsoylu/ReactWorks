const express = require("express");
const { user, videos } = require("./fakeData");
const app = express();
app.use(express.json());

app.get("/api/user/1", (req, res) => {
  setTimeout(() => {
    res.json(user);
  }, 2500);
});

app.get("/api/videos", (req, res) => {
  setTimeout(() => {
    res.json(videos);
  }, 2500);
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
