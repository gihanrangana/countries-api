"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cities = exports.countriesStatesCities = exports.countriesCities = exports.countries = void 0;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const axios_1 = require("./axios");
const countries = async () => {
    const { data } = await axios_1.axiosInstance.get("countries.json");
    fs.writeFileSync(path.join(process.cwd(), "data/countries.json"), JSON.stringify(data));
    console.log("Countries ✅");
};
exports.countries = countries;
const countriesCities = async () => {
    const { data } = await axios_1.axiosInstance.get("countries+cities.json");
    fs.writeFileSync(path.join(process.cwd(), "data/countries_cities.json"), JSON.stringify(data));
    console.log("Countries and Cities ✅");
};
exports.countriesCities = countriesCities;
const countriesStatesCities = async () => {
    const { data } = await axios_1.axiosInstance.get("countries+states+cities.json");
    fs.writeFileSync(path.join(process.cwd(), "data/countries_states_cities.json"), JSON.stringify(data));
    console.log("Countries,States and Cities ✅");
};
exports.countriesStatesCities = countriesStatesCities;
const cities = async () => {
    const { data } = await axios_1.axiosInstance.get("cities.json");
    fs.writeFileSync(path.join(process.cwd(), "data/cities.json"), JSON.stringify(data));
    console.log("Cities ✅");
};
exports.cities = cities;
