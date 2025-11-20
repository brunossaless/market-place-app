import { FC } from "react";
import { Text, View } from "react-native";

type RegisterViewProps = {
  userDate: object;
  setUserDate: (data: object) => void;
};

export const RegisterView: FC<RegisterViewProps> = ({
  userDate,
  setUserDate,
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Register Page</Text>
    </View>
  );
};
