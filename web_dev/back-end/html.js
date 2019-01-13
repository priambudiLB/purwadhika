/*jshint esversion: 6 */

var http = require('http');
var fs = require('fs');
var welcome = fs.readFileSync("hehe.html", "utf-8");
var notfound = fs.readFileSync("notfound.html", "utf-8");
var data = fs.readFileSync("data.html", "utf-8");

var dataArr = JSON.parse(data);

var server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(welcome);
    } else if (req.url == "/data") {
        if (req.method == "POST") {
            req.on("data", (x) => {
                var dataBaru = JSON.parse(x);
                dataArr.push(dataBaru);
            });
            req.on("end", () => {
                var dataFinal = JSON.stringify(dataArr);
                fs.writeFileSync("users.json", dataFinal);
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.end('{"Status": "Data sukses dipost!"}');
            });
        } else if (req.method == "GET") {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(data);
        } else {
            res.writeHead(404, {
                "Content-Type": "text/html"
            });
            res.end(notfound);
        }

    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });
        res.end(notfound);
    }
});

server.listen(1234, () => {
    console.log("Server port 1234 Aktif");
});