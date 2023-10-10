const express = require('express');

const router = express.Router();

router.post('/register');

router.post('/login', (req, res)=>{
    res.json({message:"Login the user"});
});

router.get('/current', (req, res)=>{
    res.json({message:"The current user"});
});

module.exports = router;
