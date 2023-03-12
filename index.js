const express = require("express");
const { dirname } = require("path");
const app = express();
app.use(express.static("/public"))

const port = process.env.PORT || 4001;

app.use(express.json())

// frontend
const path = require("path")
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    const commentsData = (JSON.stringify(require("./data/comments")).split('}').join("<br><br>"));
    const contactsData = (JSON.stringify(require("./data/contacts")).split('}').join("<br><br>"));
    const productsData = (JSON.stringify(require("./data/products")).split('}').join("<br><br>"));
    const vehiclesData = (JSON.stringify(require("./data/vehicles")).split('}').join("<br><br>"));
    res.render("index", {commentsData: commentsData, contactsData: contactsData, productsData: productsData, vehiclesData: vehiclesData})
})
//

//comments section
const comments = require("./routes/commentsRoutes")
app.use("/comments", comments)

//contacts section
const contacts = require("./routes/contactsRoutes")
app.use("/contacts", contacts)

//products section
const products = require("./routes/productsRoutes")
app.use("/products", products)

//vehicles section
const vehicles = require("./routes/vehiclesRoutes")
app.use("/vehicles", vehicles)



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
