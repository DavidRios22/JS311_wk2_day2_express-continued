const comments = require("../data/comments")

const list = (req, res) => {
    console.log("GET /comments")
    res.json(comments)
}

const show = (req, res) => {
    console.log("GET /comments/_id");

    let myID = req.params.id

    let matching = comments.find((item, index) => {
        return item.id == myID
    })

    if (matching) {
        res.json(matching)
    } else {
        res.send("Invalid ID")
    }
}

const create = (req, res) => {
    console.log("POST /comments");

    let newComment = {
        "_id": getRandomInt(),
        "body": req.body.body,
        "postId": 1 
    }

    comments.push(newComment)
    res.json(newComment)
    
}

const getRandomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}

module.exports = {list, show, create}