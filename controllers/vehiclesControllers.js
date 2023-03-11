const vehicles = require("../data/vehicles")

const list = (req, res) => {
    console.log("GET /vehicles")
    res.json(vehicles)
}

const show = (req, res) => {
    console.log("GET /vehicles/_id");

    let myID = req.params.id

    let matching = vehicles.find((item, index) => {
        return item.id == myID
    })

    if (matching) {
        res.json(matching)
    } else {
        res.send("Invalid ID")
    }
}

const create = (req, res) => {
    console.log("POST /vehicles");

    let newVehicle = {
        "_id": getRandomInt(),
        "imgUrl": req.body.imgUrl,
        "year": req.body.year,  
        "make": req.body.make,
        "model": req.body.model,
        "price": req.body.price,  
        "km": req.body.km,
        "miles": req.body.miles,
        "fuel": req.body.fuel,  
        "city": req.body.city,
        "isNew": req.body.isNew
    }

    vehicles.push(newVehicle)
    res.json(newVehicle)
    
}

const getRandomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}

module.exports = {list, show, create}