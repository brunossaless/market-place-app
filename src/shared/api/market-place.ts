import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const getBaseUrl = () => {
    return Platform.select({
        ios: "http://localhost:3001",
        android: "http://10.0.2.2:3001",
    });
};

const baseURL = getBaseUrl();

export class MarketPlaceAPI {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: baseURL,
        });
    }

    getInstance() {
        return this.instance;
    }
}

export const marketPlaceAPI = new MarketPlaceAPI().getInstance();