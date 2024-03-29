/*

var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);


fs.appendFile('greating.txt', 'Hi '+ user.username +' !\n', () =>{
    console.log('File is Created');
});


console.log(fs)  // all the  property of fs
// console.log(os) // all the  property of os



*/

//                  Day = 2

/*

const notes = require('./notes.js')

 var _ = require('lodash');       // lodash  (lodash sign { _ })

console.log('server file is available')

var age = notes.age;

var result =  notes.addNumber(age+18,50)


console.log(age);
console.log('Result '+ result);


// Lodash use

var data = ['Person',"Person",1,2,21,21,4,4,5,5,'name','age','2'];
var filter = _.uniq(data);
console.log(filter);

*/

//                  Day =3

//                  Topic => JSON
/*

const jsonString = '{ "name":" Naitik , "age": 20, "City": "Ghazipur" }'

const jsonObject = JSON.parse(jsonString)
console.log(jsonObject)  //  convert Json to object 



const objectToConvert = {
    name:"Naitik",
    age:25
};
const json = JSON.stringify(objectToConvert); // convert  object to  Json String
console.log(json);


// Rough, witer => Server,  Menucard => API, InTheMenuCard => EndPoints, 

*/








// How to make  server

const express = require("express");
const app = express();
// db use (mongoose)
const db = require("./db");

// dotenv
require('dotenv').config();

// use body-parser
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
app.use(express.json());
  

// Import the router files
const personRoutes = require('./ROUTES/personRoutes');
const menuItemsRoutes = require('./ROUTES/menuitemsRoutes');

// use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemsRoutes)


const PORT = process.env.PORT || 3000;

app.listen(PORT); // port
