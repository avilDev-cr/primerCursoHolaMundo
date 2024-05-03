

const express = require("express");
const app = express();
const mongoose = require('mongoose')
const user = require("./user.controller");
const port = 3000;

app.use(express.json())

mongoose.connect('mongodb+srv://andrezavilesrdz:Qwerty123@cluster0.rrzjzbv.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0')

app.get("/users", user.list);
app.post("/users", user.create);
app.get("/users/:id", user.get);
app.put("/users/:id", user.update);
app.patch("/users/:id", user.update);
app.delete("/users/:id", user.destroy);

app.use(express.static('client'))


app.get('/', (req,res)=>{
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})
app.get('*', (req,res)=>{
    res.status(404).send('Esta pagina no existe')
})
app.listen(port, () => {
  console.log("Iniciando la aplicacion");
});
