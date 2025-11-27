import { useRef, useState } from "react";
import { BlurEvent, FocusEvent, TextInput } from "react-native";
import { colors } from "../../../styles/colors";

interface UseAppInputViewModelProps {
    isError?: boolean;
    isDisabled?: boolean;
    error?: string;
    secureTextEntry?: boolean;
    value?: string;
    mask?: (text: string) => null | string;
    onChangeText?: (text: string) => string | void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: BlurEvent) => void;
}

export const useAppInputViewModel = ({ isError, isDisabled, error, secureTextEntry, value, mask, onChangeText, onFocus, onBlur }: UseAppInputViewModelProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef<TextInput>(null);

    const handlePasswordToggle = () => {
        setShowPassword((prev) => !prev);
    };

    const handleWrapperPress = () => {
        inputRef.current?.focus();
    }

    const handleFocus = (event: FocusEvent) => {
        console.log("handleFocus");
        setIsFocused(true);
        onFocus?.(event);
    }

    const handleBlur = (event: BlurEvent) => {
        console.log("handleBlur");
        setIsFocused(false);
        onBlur?.(event);
    }

    const getIconColor = () => {
        if (isFocused) return colors['purple-base'];
        if (isError) return colors['danger'];
        if (value) return colors['purple-base'];
        return colors.grays[200];
    }

    const handleTextChange = (text: string) => {
        if(mask){
            onChangeText?.(mask(text) || "");
        }
        else {
            onChangeText?.(text);
        }
    }

    return {
        showPassword,
        isFocused,
        inputRef,
        getIconColor,
        handleBlur,
        handleFocus,
        handleWrapperPress,
        handlePasswordToggle,
        handleTextChange,
    };
}