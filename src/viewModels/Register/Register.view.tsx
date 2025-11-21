import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.view.Model";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  errors,
  control,
  onSubmit,
  isPending,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Register Page</Text>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Register {isPending ? "Loading..." : "Register"}</Text>
      </TouchableOpacity>
    </View>
  );
};
