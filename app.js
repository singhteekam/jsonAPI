const express= require("express");
const app= express();
const port= process.env.PORT || 5000;

const quiz= require("./quiz.json");
const fruits= require("./fruits.json");

app.get("/quiz", (req, res)=>{
    res.send(quiz);
});

app.get("/fruits", (req, res)=>{
    res.send(fruits);
}); 



app.listen(port);