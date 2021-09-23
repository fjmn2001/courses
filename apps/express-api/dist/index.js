"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
app.get('/', function (_req, res) {
    // res.status(401).json({
    //     ok: false,
    //     message: 'Without token'
    // })
    res.status(200).json({
        ok: true,
        message: 'Wohooo with TS'
    });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
