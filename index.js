const bodyParser = require("body-parser");
const express = require("express");
const methodOverride = require('method-override')

const { dirname } = require("path");
const app = express();
app.use(express.static("/public"))


const port = process.env.PORT || 4001;

app.use(express.json())

// frontend
const path = require("path")
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


app.get("/", (req, res) => {
    const commentsData = (JSON.stringify(require("./data/comments")).split('}').join("<br><br>"));
    const contactsData = (JSON.stringify(require("./data/contacts")).split('}').join("<br><br>"));
    const productsData = (JSON.stringify(require("./data/products")).split('}').join("<br><br>"));
    const vehiclesData = (JSON.stringify(require("./data/vehicles")).split('}').join("<br><br>"));
    res.render("index", {commentsData: commentsData, contactsData: contactsData, productsData: productsData, vehiclesData: vehiclesData})
})

const getRandomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}

// inputs for frontend
const commentsPLEASE = require("./data/comments")
app.post('/comments', (req, res) => {
    const commentsBody = req.body.commentsBody

    let newComment = {
        "_id": getRandomInt(),
        "body": commentsBody,
        "postId": 1 
    }

    commentsPLEASE.push(newComment)
    res.json(newComment)
    // res.json(newComment)
})


const contactsPLEASE = require("./data/contacts")
app.post('/contacts', (req, res) => {
    const contactsName = req.body.contactsName
    const contactsOccupation = req.body.contactsOccupation
    const contactsAvatar = req.body.contactsAvatar

    let newContact = {
        "_id": getRandomInt(),
        "name": contactsName,
        "occupation": contactsOccupation,  
        "avatar": contactsAvatar
    }

    contactsPLEASE.push(newContact)
    res.json(newContact)
})


const productsPLEASE = require("./data/products")
app.post('/products', (req, res) => {
    const productsName = req.body.productsName
    const productsDescription = req.body.productsDescription


    let newProduct = {
        "_id": getRandomInt(),
        "name": productsName,
        "description": productsDescription,
    }

    productsPLEASE.push(newProduct)
    res.json(newProduct)
})


const vehiclesPLEASE = require("./data/vehicles")
app.post('/vehicles', (req, res) => {
    const vehiclesYear = req.body.vehiclesYear
    const vehiclesMake = req.body.vehiclesMake
    const vehiclesmodel = req.body.vehiclesmodel

    let newVehicle = {
        "_id": getRandomInt(),
        "year": vehiclesYear,  
        "make": vehiclesMake,
        "model": vehiclesmodel,
    }

    vehiclesPLEASE.push(newVehicle)
    res.json(newVehicle)
  })
//

//routes section
const comments = require("./routes/commentsRoutes")
app.use("/comments", comments)

const contacts = require("./routes/contactsRoutes")
app.use("/contacts", contacts)

const products = require("./routes/productsRoutes")
app.use("/products", products)

const vehicles = require("./routes/vehiclesRoutes")
app.use("/vehicles", vehicles)



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
