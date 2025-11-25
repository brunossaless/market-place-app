import { useState } from "react"

import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "./register.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserStore } from "../../shared/store/user-store";

export const useRegisterViewModel = () => {
    const { mutateAsync, isPending } = useRegisterMutation();
    const { setSession } = useUserStore();

    const { handleSubmit, formState: { errors }, control } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "bruno",
            email: "bruno@teste.com",
            password: "bruno",
            confirmPassword: "bruno",
            phone: "11999299999",
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        const {confirmPassword, ...registerData} = data;
        const response = await mutateAsync(registerData);
        setSession({
            userData: response.user,
            token: response.token,
            refreshToken: response.refreshToken,
        });
    });

    return {
        errors,
        control,
        onSubmit,
        isPending,
    };
}