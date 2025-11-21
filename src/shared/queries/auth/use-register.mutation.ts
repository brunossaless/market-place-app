import { useMutation } from "@tanstack/react-query";
import { RegisterParams } from "../../interfaces/http/register";
import { AuthService } from "../../services/auth.service";

export const useRegisterMutation = () => {
    const mutation = useMutation({
        mutationFn: async (params: RegisterParams) => await AuthService.register(params),
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return mutation;
};