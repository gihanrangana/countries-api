import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://gihanrangana.github.io/countries-states-cities-database/",
    timeout: 1000
})

export { axiosInstance };