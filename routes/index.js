const router = require('express').Router();

router.get('/', (request, response) => {
    return response.status(200).json({ message: 'Ann-Tiquities API Server' });
});

router.use('/api', require('./api'));

module.exports = router;
