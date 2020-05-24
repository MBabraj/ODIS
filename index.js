const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 3000
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/static", express.static(path.join(__dirname, "public")));
var r_number = /\d/
var r_special_char = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
var r_mala_l = /[a-z]/
var r_duza_l = /[A-Z]/

// var dlugosc = "jest dlugie"
// var cyfry = "ma cyfry"

app.post('/example', (req, res) => {
  //res.send(`Twoje haslo to :${req.body.password}.`);
  if (req.body.password.length >= 8){
    //res.send(`Twoje haslo ma ponad 8 znakow - good!`);
    dlugosc = "Twoje haslo ma przynajmniej 8 znaków - tak"
  }else if(req.body.password.length < 8){
    dlugosc = "Twoje haslo ma przynajmniej 8 znaków - nie"
  }
  
  if (r_number.test(req.body.password)){
    cyfry = "Twoje haslo zawiera cyfrę - tak"
  }else{
    cyfry = "Twoje haslo zawiera cyfrę - nie"
  }

  if (r_special_char.test(req.body.password)){
    special = "Twoje haslo zawiera znak specialny - tak"
  }else{
    special = "Twoje haslo zawiera znak specialny - nie"
  }

  if (r_mala_l.test(req.body.password)){
    mala_l = "Twoje haslo zawiera małą literę - tak"
  }else{
    mala_l = "Twoje haslo zawiera małą literę - nie"
  }

  if (r_duza_l.test(req.body.password)){
    duza_l = "Twoje haslo zawiera wielką literę - tak"
  }else{
    duza_l = "Twoje haslo zawiera wielką literę - nie"
  }

  //res.send(dlugosc + '\n' + cyfry);
  res.render('index', { title: 'Hey', dlugosc: dlugosc, cyfry: cyfry, special: special, mala_l:mala_l, duza_l:duza_l})
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
