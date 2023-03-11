const products = require("../data/products")

const list = (req, res) => {
    console.log("GET /products")
    res.json(products)
}

const show = (req, res) => {
    console.log("GET /products/_id");

    let myID = req.params.id

    let matching = products.find((item, index) => {
        return item.id == myID
    })

    if (matching) {
        res.json(matching)
    } else {
        res.send("Invalid ID")
    }
}

const create = (req, res) => {
    console.log("POST /products");

    let newProduct = {
        "_id": getRandomInt(),
        "name": req.body.name,
        "description": req.body.description,
        "rating": req.body.rating,
        "imgUrl": req.body.imgUrl,
        "price": req.body.price,
        "category": req.body.category,
        "reviews": [
            {"description": req.body.description,
            "rating": req.body.rating}
        ]
    }

    products.push(newProduct)
    res.json(newProduct)
    
}

const getRandomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}

module.exports = {list, show, create}