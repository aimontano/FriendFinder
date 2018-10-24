const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/app/public/', express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/app/public/home.html'));
});

app.listen(PORT, () => console.log('server is on!'));