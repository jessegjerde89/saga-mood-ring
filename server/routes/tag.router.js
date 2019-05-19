const express = require('express'); 
const pool = require('../modules/pool'); 

const router = express.Router(); 

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM tags'
    pool.query(queryText)
    .then(result => { 
        res.send(result.rows); 
    }).catch( error => {
        console.log('Error in get call', error);
        res.sendStatus(500); 
    })
})

router.post(`/`, (req,res) => {
    const queryText = 
    (`INSERT INTO "images_tags" ("images_id", "tag_id", "tag_name")
    VALUES (2, 2, 'Calming')`)
    pool.query(queryText)
.then( response => {
    console.log('in put tag', response )
    res.sendStatus(201); 
}).catch( error => {
    res.sendStatus(500); 
})
})


module.exports = router; 