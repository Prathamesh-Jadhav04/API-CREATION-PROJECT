import express from "express";

const App = express();

App.get("/Api/users", function (req, res) {
  res.send(["Minakshi", "Krishika", "Shravni"]);
});

App.listen(4000, function () {
  console.log("Server started on port 4000");
});
