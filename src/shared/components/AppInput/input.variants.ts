import { tv, type VariantProps } from "tailwind-variants";

export const appInputVariants = tv({
    slots: {
        container: "w-full my-4",
        wrapper: "flex-row items-center border-b border-gray-200 pb-2",
        input: "bg-transparent text-base text-gray-500 flex-1",
        label: "text-gray-300 text-xs mb-3 font-semibold",
        error: "text-sm text-danger mt-1"
    },
    variants: {
        isFocused: {
            true: {},
        },
        isError: {
            true: {},
        },
        isDisabled: {
            true: {},
        },
    },
    defaultVariants: {
        isDisabled: false,
        isError: false,
        isFocused: false,
    },
});

export type AppInputVariantsProps = VariantProps<typeof appInputVariants>;