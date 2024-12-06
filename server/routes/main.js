const express = require('express');
const router = express.Router();

// Home Page Route
router.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home',
        description: 'Welcome to our landing page'
    });
});

// About Page Route
router.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Us',
        description: 'Learn more about our company'
    });
});

// Contact Page Route
router.get('/contact', (req, res) => {
    res.render('contact', { 
        title: 'Contact',
        description: 'Get in touch with us'
    });
});

// Services Page Route
router.get('/services', (req, res) => {
    res.render('services', { 
        title: 'Our Services',
        description: 'Explore the services we offer'
    });
});

// Error 404 Route (place this last)
router.use((req, res) => {
    res.status(404).render('404', { 
        title: 'Page Not Found',
        description: 'The page you are looking for does not exist'
    });
});

module.exports = router;