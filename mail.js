const express = require('express');

const router = express.Router();

router.get('/get_user',(req,res)=>{
    res.json(
        {
         "name":"Sanika N",
         "age":"20",
         "email":"sanikanehe2006@gmail.com"
        }
    )
})

router.post('/register',(req,res)=>{

    let user = req.body;

    console.log(user)

    res.json({
        "msg":"Registration Successful."
    })
})

module.exports = router