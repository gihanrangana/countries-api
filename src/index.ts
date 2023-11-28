import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import router from './v1/routes';

dotenv.config()

const PORT = process.env.port || 4000

const app = express();

app.use(cors())
app.use(express.json())

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
})

app.use('/v1', router)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

module.exports = app