const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));


app.get("/", function (req, res) {
    fs.readdir(`./files`, function (err, files) {
        res.render("index", { files: files });
    });
});

app.post("/create", function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.message, function (err) {
        res.redirect('/')
    });
});

app.get("/file/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
        res.render('filedetail', { filename: req.params.filename, filedata: data });
    })
});

app.get("/delete/:filename", function (req, res) {
    fs.unlink(`./files/${req.params.filename}`, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.get("/updatefilename/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
        res.render('updatefilename', { filename: req.params.filename, filedata: data });
    })
});

app.post("/changefilename", function (req, res) {
    fs.rename(`./files/${req.body.currentfilename}`, `./files/${req.body.filename}`, (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.get("/updatedetail/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
        res.render('updatedetail', { filename: req.params.filename,filedata: data });
    })
});

app.post("/changedetails", function (req, res) {
    console.log(req.body);
    fs.writeFile(`./files/${req.body.filename}`, `${req.body.message}`, function (err) {
        res.redirect('/')
    })
});

app.listen(3000)