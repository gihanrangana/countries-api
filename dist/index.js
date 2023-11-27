"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./v1/routes"));
dotenv_1.default.config();
const PORT = process.env.port || 4000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/v1', routes_1.default);
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
module.exports = app;
