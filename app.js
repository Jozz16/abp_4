const  express = require('express');
const app =express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const puerto=3000;
const hbs = require("hbs");
const archivo = require("fs");
const path = "./files/menu.json";

 
app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")

app.get("/menuCompleto",(req,res)=>{
 
    res.render("index", {resultado: JSON.parse(archivo.readFileSync(path, {encoding:"utf-8"}))                                               
    })
});
     
app.post("/menuAgregar",(req,res)=>{

const producto1 =  {
        nombre: req.body.nombre,
        precio: req.body.precio
    } 
    resultado.almuerzos.push(producto1)
    
});





    // plantilla abajo
app.all("*",(req,res)=>{
    res.status(404).send("pagina no existe")
})
//plantilla abajo
app.listen(puerto,()=>{
    console.log("servicio levantado")
})