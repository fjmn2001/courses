"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var port = 3000;
app.get('/', function (_req, res) {
    res.status(401).json({
        ok: false,
        message: 'Without token'
    });
    // res.json({
    //     ok: true,
    //     message: 'Wohooo with TS'
    // })
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
