import { Router } from "express";
import { cities, countries, countriesCities, countriesStatesCities } from "../utils/data";

// import countriesJson from "../../data/countries.json"
// import countriesCitiesJson from "../../data/countries_cities.json"
// import citiesJson from '../../data/cities.json'
const countriesJson: any[] = require("../../data/countries.json")
const countriesCitiesJson: any[] = require("../../data/countries_cities.json")
const countriesStatesJson: any[] = require("../../data/countries_states_cities.json")
const citiesJson: any[] = require("../../data/cities.json")

const router = Router()

router.get('/update', async (req, res) => {

    const { query } = req.query;

    try {
        if (query === "countries") await countries()
        if (query === "countries_cities") await countriesCities();
        if (query === "countries_states_cities") await countriesStatesCities()
        if (query === "cities") await cities()

        res.send("Done")
    } catch (err) {
        res.send(err.message)
    }

});

router.get('/countries', async (req, res, next) => {

    const { countryCode } = req.query

    let filtered = countriesJson

    if (countryCode) filtered = countriesJson.filter(country => country.iso2 === countryCode)

    res.json(filtered)
})

router.get('/cities-by-country', async (req, res, next) => {
    const { countryCode } = req.query

    let filtered = countriesCitiesJson.filter(country => country.iso2 === countryCode)

    res.json(filtered)

})

router.get('/cities', async (req, res, next) => {
    const { query }: { query?: string } = req.query

    let filtered = [];

    if (query) {
        const filteredCountries = countriesCitiesJson.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
            .map(country => ({ name: country.name, iso2: country.iso2, id: country.id }))

        const filteredCities = countriesCitiesJson.flatMap(country => country.cities).filter(city => city.name.toLowerCase().includes(query.toLowerCase()))
            .map(city => {
                const country = citiesJson.filter(c => city.id === c.id)[0]
                return { ...city, country: country.country_name }
            })

        filtered = [...filteredCountries, ...filteredCities]
    }

    res.json(filtered)

});

export default router;