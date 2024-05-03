const express = require("express");
const app = express();
const mongoose = require('mongoose')
const user = require("./user.controller");
const port = 3000;

app.use(express.json())

mongoose.connect('mongodb+srv://andrezavilesrdz:Qwerty123@cluster0.rrzjzbv.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0')

app.get("/", user.list);
app.post("/", user.create);
app.get("/:id", user.get);
app.put("/:id", user.update);
app.patch("/:id", user.update);
app.delete("/:id", user.destroy);

app.listen(port, () => {
  console.log("Iniciando la aplicacion");
});
