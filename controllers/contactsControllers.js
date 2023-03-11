const contacts = require("../data/contacts")

const list = (req, res) => {
    console.log("GET /contacts")
    res.json(contacts)
}

const show = (req, res) => {
    console.log("GET /contacts/_id");

    let myID = req.params.id

    let matching = contacts.find((item, index) => {
        return item.id == myID
    })

    if (matching) {
        res.json(matching)
    } else {
        res.send("Invalid ID")
    }
}

const create = (req, res) => {
    console.log("POST /contacts");

    let newContact = {
        "_id": getRandomInt(),
        "name": req.body.name,
        "occupation": req.body.occupation,  
        "avatar": req.body.avatar
    }

    contacts.push(newContact)
    res.json(newContact)
    
}

const getRandomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}

module.exports = {list, show, create}