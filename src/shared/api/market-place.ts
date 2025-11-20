import axios, { AxiosInstance } from "axios";
export class MarketPlaceAPI {
    private instance: AxiosInstance;
    private isRefreshing: boolean = false;

    constructor() {
        this.instance = axios.create({
            baseURL: "https://api.example.com",
        });
    }

    getInstance() {
        return this.instance;
    }
}

export const marketPlaceAPI = new MarketPlaceAPI().getInstance();