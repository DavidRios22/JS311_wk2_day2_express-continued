const express = require("express");
const app = express();
app.use(express.static("/public"))


const port = process.env.PORT || 4001;

app.use(express.json())

//display page
const commentsDisplay = require("./data/comments")
const contactsDisplay = require("./data/contacts")
const productsDisplay = require("./data/products")
const vehiclesDisplay = require("./data/vehicles")
app.get("/", (req, res) => {
    res.json(vehiclesDisplay)
})

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
