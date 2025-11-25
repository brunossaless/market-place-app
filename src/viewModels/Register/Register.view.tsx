import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.view.Model";
import { AppInput } from "../../shared/components/AppInput";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  errors,
  control,
  onSubmit,
  isPending,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <AppInput />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Register {isPending ? "Loading..." : "Register"}</Text>
      </TouchableOpacity>
    </View>
  );
};
