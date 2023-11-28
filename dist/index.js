"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./v1/routes"));
dotenv_1.default.config();
const PORT = process.env.port || 4000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.json({
        routes: [
            {
                path: "/v1/update",
                queryParams: [{
                        name: "query",
                        required: true
                    }],
                paramsDescription: [
                    { name: "query", description: "use provided values to update database", values: ["countries", "countries_cities", "countries_states_cities", "cities"] }
                ]
            },
            {
                path: "/v1/countries",
                queryParams: [{
                        name: "countryCode",
                        required: false
                    }],
                paramsDescription: [
                    { name: "countryCode", description: "use country iso2 code to get details" }
                ]
            },
            {
                path: "/v1/cities-by-country",
                queryParams: [{
                        name: "countryCode",
                        required: false
                    }],
                paramsDescription: [
                    { name: "countryCode", description: "use country iso2 code to get details" }
                ]
            },
            {
                path: "/v1/cities",
                queryParams: [
                    {
                        name: "query",
                        required: true
                    }
                ],
                paramsDescription: [
                    { name: "query", description: "provide a query to search from database" }
                ]
            }
        ]
    });
});
app.use('/v1', routes_1.default);
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
module.exports = app;
