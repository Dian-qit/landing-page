const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    const locals = {
        title: "Renew Homes",
        description: "Wawa"
    }

    res.render('index', { locals });
});


router.get('/contact-us', (req, res) => {
    res.render('contact-us');
});


module.exports = router;