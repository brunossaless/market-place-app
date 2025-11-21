import { useState } from "react"

import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useForm } from "react-hook-form";
import { RegisterFormData, registerSchema } from "./register.schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const useRegisterViewModel = () => {
    const { mutateAsync, isPending } = useRegisterMutation();

    const { handleSubmit, formState: { errors }, control } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            name: "teste",
            email: "teste@teste.com",
            password: "teste",
            confirmPassword: "teste",
            phone: "11999999999",
        },
    });

    const onSubmit = handleSubmit(async (data) => {
        const {confirmPassword, ...registerData} = data;
        await mutateAsync(registerData);
    });

    return {
        errors,
        control,
        onSubmit,
        isPending,
    };
}