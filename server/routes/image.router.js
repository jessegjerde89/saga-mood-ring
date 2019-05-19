const express = require('express'); 
const pool = require('../modules/pool'); 

const router = express.Router(); 

router.get('/images', (req, res) => {
    const queryText = 'SELECT * FROM images'
    pool.query(queryText)
    .then(result => { 
        res.send(result.rows); 
    }).catch( error => {
        console.log('Error in get call', error);
        res.sendStatus(500); 
    })
})


router.post(`/images/addtags`, (req,res) => {
    const queryText = 
    (`INSERT INTO "images_tags" ("images_id", "tag_id")
    VALUES ($1, $2)`)
    pool.query(queryText[req.query.image_id, req.query.tag_id])
.then( response => {
    console.log('in put tag', response )
    res.sendStatus(201); 
}).catch( error => {
    res.sendStatus(500); 
})
})


module.exports = router