const express = require("express");
const app = express();
const userSchema = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    let data = await userSchema.find();
    res.render("index", { data });
});

app.post("/addNewUser", async (req, res) => {
    let { name, username, email, number, subject, message } = req.body;
    await userSchema.create({ name, username, email, number, subject, message });
    res.redirect('/')
});

app.get("/delete/:id", async (req, res) => {
    let id = req.params.id;
    await userSchema.findOneAndDelete(id);
    res.redirect('/')
});

app.get("/updateuser/:userid", async (req, res) => {
    let { userid } = req.params;
    let data = await userSchema.findOne({ _id: userid });
    res.render("update", { data });
});

app.post("/updateUser", async (req, res) => {
    let { id, name, username, email, number, subject, message } = req.body;
    let userId = id;
    await userSchema.findOneAndUpdate({ _id: id }, { name, username, email, number, subject, message }, { new: true });
    res.redirect("/");
});


app.listen(3000);