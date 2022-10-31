const express = require("express");
const router = express.Router();
const fs = require("fs");


router.get("/", (req, res) => {
    const locations = JSON.parse(fs.readFileSync(`data/interchanges.json`));
    res.json(locations);
})



module.exports = router;