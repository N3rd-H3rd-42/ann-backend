if (process.env.NODE_ENV !== 'production') {
    require('dotenv');
}

const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use('/', require('./routes'));

app.listen(PORT, () => console.log(`ann-tiquities server running on port ${PORT}`));
