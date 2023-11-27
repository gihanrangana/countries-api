"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const axiosInstance = axios_1.default.create({
    baseURL: "https://gihanrangana.github.io/countries-states-cities-database/",
    timeout: 1000
});
exports.axiosInstance = axiosInstance;
