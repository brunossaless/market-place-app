import { User } from "./user";

export interface RegisterParams {
    name: string;
    email: string;
    password: string;
    avatarUrl?: string;
    phone: string;
}

export interface RegisterResponse {
    user: User;
    token: string;
    refreshToken: string;
}