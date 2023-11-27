import * as fs from 'node:fs';
import * as  path from 'node:path';
import { axiosInstance } from "./axios"

const countries = async () => {
    const { data } = await axiosInstance.get("countries.json")

    fs.writeFileSync(path.join(process.cwd(), "data/countries.json"), JSON.stringify(data))

    console.log("Countries ✅");
}

const countriesCities = async () => {
    const { data } = await axiosInstance.get("countries+cities.json")

    fs.writeFileSync(path.join(process.cwd(), "data/countries_cities.json"), JSON.stringify(data))

    console.log("Countries and Cities ✅");
}

const countriesStatesCities = async () => {
    const { data } = await axiosInstance.get("countries+states+cities.json")

    fs.writeFileSync(path.join(process.cwd(), "data/countries_states_cities.json"), JSON.stringify(data))

    console.log("Countries,States and Cities ✅");
}

const cities = async () => {
    const { data } = await axiosInstance.get("cities.json")

    fs.writeFileSync(path.join(process.cwd(), "data/cities.json"), JSON.stringify(data))

    console.log("Cities ✅");
}

export { countries, countriesCities, countriesStatesCities, cities }