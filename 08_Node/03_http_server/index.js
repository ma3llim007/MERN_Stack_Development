const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} : ${req.method} : New Request Received\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("./log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Home Page")
                break;
            case "/about":
                const name = myUrl.query.name;
                const id = myUrl.query.id;
                res.end(`Hi My Name Is ${name} And My Id Is ${id}`);
                break;
            case "/signup":
                if (req.method ==='GET') {
                    res.end("Sign Form");
                } else if(req.method ==='POST'){
                    res.end("Sign Form POST");
                }
                break;
            default:
                res.end("404 Not Found")
                break;
        }
    })
});

myServer.listen(8000, () => console.log("Server Started!"));