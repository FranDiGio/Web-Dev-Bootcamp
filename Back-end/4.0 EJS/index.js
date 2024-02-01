import express from "express";

const app = express();
const port = 3000;

function date(number){
    if (number >= 0 && number < 5) {
        return "a week day! its time to work hard!";
    } 
    else if (number === 5 || number === 6) {
        return "the weekend! its time to have fun!";
    }
} 

app.listen(port, () =>{
    console.log(`Listening to port: ${port}`)
});

app.get("/", (req, res) => {
    var myDate = new Date('December 16, 2023');
    console.log(date(myDate.getDay()));
    console.log(myDate.getDay());
    
    res.render("C:/Users/Franc/OneDrive/Web Development/Back-end/4.0 EJS/views/index.ejs",
    { text: date(myDate.getDay())});
});

