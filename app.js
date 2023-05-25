const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const MONGO_URL =
    'mongodb+srv://naman03:x8EVvyDWYfRtoNAH@mongodbclustor.9bh73lc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
