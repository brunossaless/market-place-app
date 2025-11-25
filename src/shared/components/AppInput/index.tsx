import { Pressable, TextInput, TouchableOpacity, View, Text } from "react-native";
import { appInputVariants, AppInputVariantsProps } from "./input.variants";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { FC } from "react";

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
    label?: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    containerClassName?: string;
    mask?: (value: string) => void | string;
}

export const AppInput: FC<AppInputProps> = ({ label, leftIcon, containerClassName, mask, ...props }) => {
    const { container, wrapper, input, label: labelStyles, error } = appInputVariants({
        isFocused: false,
        isError: false,
        isDisabled: false,
    });
    return (
        <View className={container({ className: containerClassName })}>
            <Text className={labelStyles()}>{label}</Text>
            <Pressable className={wrapper()}>
                <Ionicons size={22} name="person" />

                <TextInput className={input()} {...props} />

                <TouchableOpacity>
                    <Ionicons size={22} name="eye-off-outline" />
                </TouchableOpacity>
            </Pressable>
        </View>
    );
}