"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// express
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('ola mundo!');
});
//codifique aqui
app.listen(port, function () {
    console.log("o server esta rodando na porta ".concat(port, "!"));
});
