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


router.post(`/addtags`, (req,res) => {
    console.log('in post', req.body.image_id, req.body.tag_id)
    const queryText = ('INSERT INTO "images_tags" ("images_id", "tag_id") VALUES ($1, $2);')
    pool.query(queryText[req.body.image_id, req.body.tag_id])
.then( response => {
    console.log('in put tag', response )
    res.sendStatus(201); 
}).catch( error => {
    console.log('error in post', error); 
})
})


module.exports = router