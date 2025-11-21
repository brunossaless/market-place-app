import { marketPlaceAPI } from "../api/market-place";
import { RegisterParams, RegisterResponse } from "../interfaces/http/register";

export class AuthService {

        static async register(params: RegisterParams): Promise<RegisterResponse> {
            const response = await marketPlaceAPI.post<RegisterResponse>("/auth/register", params);
            return response.data;
        }
}