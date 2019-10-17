const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    let queryText = `SELECT * FROM user_calendar_react WHERE event_date = '01/31/2019'`;
    pool.query(queryText)
    .then((result) => {
        console.log(result.rows)
        res.send(result.rows)
    }).catch((error) =>{
        console.log(`error in get request ${error}`);
    })
});


router.post('/', (req, res) => {
let queryText = `INSERT INTO user_calendar_react` 
});

module.exports = router;