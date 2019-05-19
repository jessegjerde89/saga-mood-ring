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

router.get('/addtags', (req,res) => {
    console.log('in get tags', res)
    const queryTag  =` SELECT  "tags"."name", "images_tags"."images_id", "images"."title"
    FROM "images" JOIN "images_tags" ON "images"."id" = "images_tags"."images_id" 
    JOIN "tags" ON "images_tags"."tag_id" = "tags"."id";`
    pool.query(queryTag)
    .then(reslt => {
        res.sendStatus(result.rows);
        console.log(result.rows) 
    }).catch(error => {
        console.log('error in post', error)
        res.sendStatus(500)
    })
})


router.post(`/addtags`, (req,res) => {
    console.log('in post', req.body.images_id, req.body.tag_id)
    const query = (`INSERT INTO "images_tags" ("images_id", "tag_id") VALUES ($1, $2);`); 
    pool.query(query[req.body.images_id, req.body.tag_id])
.then( result => {
    res.sendStatus(201); 
}).catch( error => {
    console.log('error in post', error); 
    res.sendStatus(500)
})
})


module.exports = router