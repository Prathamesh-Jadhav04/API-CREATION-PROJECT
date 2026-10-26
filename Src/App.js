import express from "express";

const App = express();

App.use(express.json());

App.get("/Api/users", function (req, res) {
  res.send(["Minakshi", "Krishika", "Shravni"]);
});

App.post("/Api/Add", function (req, res) {
  res.send({ Msg: "User Added In DB" });
});

App.put("/Api/Update", function (req, res) {
  res.send({ Msg: "User Updated In DB" });
});

App.delete("/Api/Delete", function (req, res) {
  res.send({ Msg: "User Deleted From DB" });
});

App.listen(4000, function () {
  console.log("Server started on port 4000");
});
