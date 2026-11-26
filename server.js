const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use("/documents", express.static(path.join(__dirname, "documents")));

app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/books', (req, res) => {
    res.render('books.ejs'); 
});
app.get('/archive', (req, res) => {
    res.render('archive.ejs'); 
});
app.get('/vote', (req, res) => {
    res.render('vote.ejs'); 
});
app.get('/calendar', (req, res) => {
    res.render('calendar.ejs'); 
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});