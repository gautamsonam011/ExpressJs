const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.sendFile('templates/index.html');
});

module.exports = router;