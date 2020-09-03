var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json(
        {
            message: 'request POST is executed',
            data: {
                username: req.param('username'),
                email: req.param('email'),
                website: req.param('website'),
                phone: req.param('phone'),
            }
            
        }
    );
});

module.exports = router;