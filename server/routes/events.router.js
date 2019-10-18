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
    let eventToAdd = req.body;
let queryText = 
`INSERT INTO user_calendar_react ("user_id","event_title","event_description","event_location","event_date", "start_time","end_time")
VALUES($1,$2,$3,$4,$5,$6,$7)`;
pool.query(queryText, 
    [
        eventToAdd.userId, 
        eventToAdd.title, 
        eventToAdd.description, 
        eventToAdd.location, 
        eventToAdd.date, 
        eventToAdd.startTime, 
        eventToAdd.endTime])
        .then((response) =>{
            console.log(response);
        }).catch((error) =>{
            console.log(`error posting new event ${error}`);
        })

});

module.exports = router;