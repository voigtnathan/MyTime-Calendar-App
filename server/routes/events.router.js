const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const moment = require('moment');

router.get('/:date', (req, res) => {
    // let todaysDate = moment().format('MM/DD/YYYY'); //get today's date and set it to a format the database will be able to work with
    console.log('request params', req.params)
    let date = req.params.date
    console.log('date',date)
    let placeholder = date.valueOf();
    console.log('placeholder',placeholder);
    let formattedDate = moment(placeholder).format('MM/DD/YYYY')
    console.log('newly formatted date',formattedDate)
    let queryText = `SELECT * FROM user_calendar_react WHERE event_date = $1`;
    pool.query(queryText, [formattedDate])
    .then((result) => {
        console.log(result.rows)
        res.send(result.rows)
    }).catch((error) =>{
        console.log(`error in get request ${error}`);
    })
});

router.get('/event/:id', (req,res) => {
    const queryText = `SELECT * FROM user_calendar_react WHERE id=$1`;
    pool.query(queryText, [req.params.id])
    .then((result) =>{
        console.log(result.rows);
        res.send(result.rows);
    }).catch((error) =>{
        console.log(`error getting this event ${error}`);
    })
})
router.delete('/event/:id', (req,res) => {
    const queryText = `DELETE FROM user_calendar_react WHERE id=$1`
    pool.query(queryText, [req.params.id])
    .then(() =>{
        res.sendStatus(200);
    })
})

router.put('/event/:id', (req, res) => {
    let eventToAdd = req.body;
    
    let queryText = 
    `UPDATE user_calendar_react SET user_id = $1 , event_title = $2, event_description = $3, event_location = $4, event_date = $5, start_time = $6, end_time = $7 WHERE id=$8`;
    pool.query(queryText, 
    [   
        eventToAdd.userId, 
        eventToAdd.title, 
        eventToAdd.description, 
        eventToAdd.location, 
        eventToAdd.date, 
        eventToAdd.startTime, 
        eventToAdd.endTime,
        req.params.id ])
        .then((response) =>{
            console.log(response);
        }).catch((error) =>{
            console.log(`error posting new event ${error}`);
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