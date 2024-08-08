const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.send('Hello World')
});

app.get("/about", function (req, res) {
    res.send("About Page")
});

app.get("/profile", function (req, res) {
    res.send("Profile Page")
});

app.get("/contact", function (req, res, next) {
    return next(new Error("404 Page Not Found"));
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something Went Wrong!')
})


app.listen(3000)