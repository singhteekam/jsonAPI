const express= require("express");
const app= express();
const port= process.env.PORT || 5000;

const quiz= require("./quiz.json");

app.get("/quiz", (req, res)=>{
    res.send(quiz);
});

app.get("/parse", (req, res)=>{
    const url = "https://app.singhteekam.in/QuizAPI-Node.js/data.json";

    fetch(url)
      .then((response) => response.json())
      .then((jsonData) =>{
         console.log(jsonData)
         res.send(jsonData);
      }
         );
});



app.listen(port);