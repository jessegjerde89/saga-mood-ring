const express = require('express'); 
const pool = require('../modules/pool'); 

const router = express.Router(); 

router.get('/', (req, res) => {
    // const queryText = 
    // `SELECT "tags"."name", "images_tags"."images_id", "images"."title" 
    // FROM "images" JOIN "images_tags" ON "images"."id" = "images_tags"."images_id" 
    // JOIN "tags" ON "images_tags"."tag_id" = "tags"."id";`


    const queryText = 'SELECT * FROM tags'
    pool.query(queryText)
    .then(result => { 
        res.send(result.rows); 
    }).catch( error => {
        console.log('Error in get call', error);
        res.sendStatus(500); 
    })
})



module.exports = router; 