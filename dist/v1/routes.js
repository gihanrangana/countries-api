"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/countries', async (req, res, next) => {
    res.send("countries");
});
exports.default = router;
