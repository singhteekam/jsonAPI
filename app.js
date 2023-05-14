const express= require("express");
const app= express();
const port= process.env.PORT || 5000;

const quiz= require("./quiz.json");
const fruits= require("./fruits.json");

//quiz.json
app.get("/quiz", (req, res)=>{
    res.send(quiz);
});

app.get("/quiz/easy/allcategories/:id", (req, res)=>{
    res.send(quiz["Easy"]["AllCategories"][req.params.id])
});
app.get("/quiz/easy/sports/:id", (req, res)=>{
    res.send(quiz["Easy"]["Sports"][req.params.id])
});
app.get("/quiz/medium/allcategories/:id", (req, res)=>{
    res.send(quiz["Medium"]["AllCategories"][req.params.id])
});
app.get("/quiz/medium/sports/:id", (req, res) => {
  res.send(quiz["Medium"]["Sports"][req.params.id]);
});
app.get("/quiz/hard/allcategories/:id", (req, res)=>{
    res.send(quiz["Hard"]["AllCategories"][req.params.id])
});
app.get("/quiz/hard/sports/:id", (req, res) => {
  res.send(quiz["Hard"]["Sports"][req.params.id]);
});


//fruits.json
app.get("/fruits", (req, res)=>{
    res.send(fruits);
}); 

app.get("/fruits/:id", (req, res) => {
  res.send(fruits[req.params.id]);
}); 


app.listen(port);