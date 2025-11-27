import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.view.Model";
import { AppInput } from "../../shared/components/AppInput";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  errors,
  control,
  onSubmit,
  isPending,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="flex-1 items-center justify-center">
      <AppInput label="E-mail" value={email} onChangeText={setEmail} leftIcon="mail-outline"/>
      <AppInput label="Senha" value={password} onChangeText={setPassword} leftIcon="lock-closed-outline"/>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Register {isPending ? "Loading..." : "Register"}</Text>
      </TouchableOpacity>
    </View>
  );
};
