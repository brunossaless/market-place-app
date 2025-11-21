import * as yup from "yup";

export const registerSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
    confirmPassword: yup.string().required("Confirmar senha é obrigatório"),
    phone: yup.string().required("Telefone é obrigatório").matches(/^\d{11}$/, "Telefone deve ter 11 dígitos"),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;