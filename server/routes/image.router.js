const express = require('express'); 
const pool = require('../modules/pool'); 

const router = express.Router(); 

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM images'
    pool.query(queryText)
    .then(result => { 
        res.send(result.rows); 
    }).catch( error => {
        console.log('Error in get call', error);
        res.sendStatus(500); 
    })
})


module.exports = router