const express = require('express');
const donations = require('./controllers/donationsController')

const app = express();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.sendFile("views/index.html", {
        root: __dirname
    });
});

// using as middleware
app.use(donations)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});