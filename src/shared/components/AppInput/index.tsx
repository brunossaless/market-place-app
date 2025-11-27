import { Pressable, TextInput, TouchableOpacity, View, Text } from "react-native";
import { appInputVariants, AppInputVariantsProps } from "./input.variants";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";
import { FC } from "react";
import { useAppInputViewModel } from "./useAppInputViewModel";

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
    label?: string;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    containerClassName?: string;
    mask?: (text: string) => null | string;
    error?: string;
}

export const AppInput: FC<AppInputProps> = ({ label, leftIcon, containerClassName, mask, secureTextEntry, onBlur, value, isError, onFocus, onChangeText, error, isDisabled, ...props }) => {
    const { showPassword, handlePasswordToggle, handleWrapperPress, handleFocus, handleBlur, getIconColor, handleTextChange, isFocused, inputRef } = useAppInputViewModel({
        error,
        isError: !!error,
        mask,
        onChangeText,
        onFocus,
        onBlur,
        isDisabled,
        secureTextEntry,
        value,
    });

    const { container, wrapper, input, label: labelStyles, error: errorStyles } = appInputVariants({
        isFocused,
        isError,
        isDisabled,
    });

    return (
        <View className={container({ className: containerClassName })}>
            <Text className={labelStyles()}>{label}</Text>
            <Pressable className={wrapper()} onPress={handleWrapperPress}>
                {leftIcon && <Ionicons size={22} name={leftIcon} color={getIconColor()} />}

                <TextInput
                    ref={inputRef}
                    className={input()}
                    secureTextEntry={secureTextEntry && !showPassword}
                    value={value}
                    onChangeText={handleTextChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    editable={!isDisabled}
                    {...props}
                />

                {secureTextEntry && (
                    <TouchableOpacity onPress={handlePasswordToggle}>
                        <Ionicons
                            size={22}
                            name={showPassword ? "eye-outline" : "eye-off-outline"}
                            color={getIconColor()}
                        />
                    </TouchableOpacity>
                )}
            </Pressable>
            {error && <Text className={errorStyles()}>
                <Ionicons size={22} name="alert-circle-outline" className="ml-2"  />  {error}
                
            </Text>}
        </View>
    );
}