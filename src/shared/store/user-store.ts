import { User } from "../interfaces/http/user";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface SessionsParams {
    userData: User;
    token: string;
    refreshToken: string;
}

interface UpdateTokensParams {
    token: string;
    refreshToken: string;
}

export interface UserStoreState {
    user: User | null;
    token: string | null;
    refreshToken: string | null;
}

export interface UserStoreActions {
    setSession: (params: SessionsParams) => void;
    logout: () => void;
    updateTokens: (params: UpdateTokensParams) => void;
}

export const useUserStore = create<UserStoreState & UserStoreActions>()(persist((set) => ({
    user: null,
    token: null,
    refreshToken: null,

    setSession: (session) => set({...session}),
    logout: () => set({ user: null, token: null, refreshToken: null }),
    updateTokens: (tokens) => set({ ...tokens }),
}), {
    name: "market-place-auth",
    storage: createJSONStorage(() => AsyncStorage),
}
));