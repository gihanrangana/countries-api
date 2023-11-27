"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = require("../utils/data");
// import countriesJson from "../../data/countries.json"
// import countriesCitiesJson from "../../data/countries_cities.json"
// import citiesJson from '../../data/cities.json'
const countriesJson = require("../../data/countries.json");
const countriesCitiesJson = require("../../data/countries_cities.json");
const countriesStatesJson = require("../../data/countries_states_cities.json");
const citiesJson = require("../../data/cities.json");
const router = (0, express_1.Router)();
router.get('/update', async (req, res) => {
    const { query } = req.query;
    try {
        if (query === "countries")
            await (0, data_1.countries)();
        if (query === "countries_cities")
            await (0, data_1.countriesCities)();
        if (query === "countries_states_cities")
            await (0, data_1.countriesStatesCities)();
        if (query === "cities")
            await (0, data_1.cities)();
        res.send("Done");
    }
    catch (err) {
        res.send(err.message);
    }
});
router.get('/countries', async (req, res, next) => {
    const { countryCode } = req.query;
    let filtered = countriesJson;
    if (countryCode)
        filtered = countriesJson.filter(country => country.iso2 === countryCode);
    res.json(filtered);
});
router.get('/cities-by-country', async (req, res, next) => {
    const { countryCode } = req.query;
    let filtered = countriesCitiesJson.filter(country => country.iso2 === countryCode);
    res.json(filtered);
});
router.get('/cities', async (req, res, next) => {
    const { query } = req.query;
    let filtered = [];
    if (query) {
        const filteredCountries = countriesCitiesJson.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
            .map(country => ({ name: country.name, iso2: country.iso2, id: country.id }));
        const filteredCities = countriesCitiesJson.flatMap(country => country.cities).filter(city => city.name.toLowerCase().includes(query.toLowerCase()))
            .map(city => {
            const country = citiesJson.filter(c => city.id === c.id)[0];
            return { ...city, country: country.country_name };
        });
        filtered = [...filteredCountries, ...filteredCities];
    }
    res.json(filtered);
});
exports.default = router;
