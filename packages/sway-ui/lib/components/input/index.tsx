import { Component, createSignal, Index, JSX, Show } from "solid-js";

import { Checkbox as ArkCheckbox, Field, PinInput } from "@ark-ui/solid";

import { CheckIcon, EyeIcon, EyeOffIcon } from "lucide-solid";

import "@lib/components/input/index.css";

type CheckboxProps = JSX.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: Component<CheckboxProps> = (props): JSX.Element => (
    <ArkCheckbox.Root>
        <ArkCheckbox.Control>
            <ArkCheckbox.Indicator>
                <CheckIcon />
            </ArkCheckbox.Indicator>
        </ArkCheckbox.Control>
        <ArkCheckbox.HiddenInput />
        <ArkCheckbox.Label>{props.children}</ArkCheckbox.Label>
    </ArkCheckbox.Root>
);

type PasswordFieldProps = {
    label?: string;
    helperText?: string;
} & Omit<JSX.InputHTMLAttributes<HTMLInputElement>, "type">;

const PasswordField: Component<PasswordFieldProps> = (props): JSX.Element => {
    const { label, helperText, ...inputProps } = props;

    const [showPassword, setShowPassword] = createSignal(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword());
    const inputType = () => (showPassword() ? "text" : "password");

    return (
        <Field.Root>
            <Show when={label}>
                <Field.Label>{label}</Field.Label>
            </Show>
            <div data-scope="field" data-part="control">
                <Field.Input {...inputProps} type={inputType()} />
                <button
                    type="button"
                    data-scope="field"
                    data-part="password-visibility"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword() ? <EyeIcon /> : <EyeOffIcon />}
                </button>
            </div>
            <Show when={helperText}>
                <Field.HelperText>{helperText}</Field.HelperText>
            </Show>
        </Field.Root>
    );
};

type PinFieldProps = {
    label?: string;
    length: number;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const PinField: Component<PinFieldProps> = (props): JSX.Element => {
    const { label, length } = props;

    return (
        <PinInput.Root>
            <Show when={label}>
                <PinInput.Label>{label}</PinInput.Label>
            </Show>
            <PinInput.Control>
                <Index each={Array.from({ length: length })}>{(_, index) => <PinInput.Input index={index} />}</Index>
            </PinInput.Control>
            <PinInput.HiddenInput />
        </PinInput.Root>
    );
};

type TextFieldTypes = "text" | "email";

type TextFieldProps = {
    label?: string;
    helperText?: string;
    type?: TextFieldTypes;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const TextField: Component<TextFieldProps> = (props): JSX.Element => {
    const { label, helperText, ...inputProps } = props;

    return (
        <Field.Root>
            <Show when={label}>
                <Field.Label>{label}</Field.Label>
            </Show>
            <Field.Input {...inputProps} />
            <Show when={helperText}>
                <Field.HelperText>{helperText}</Field.HelperText>
            </Show>
        </Field.Root>
    );
};

export { Checkbox, PasswordField, PinField, TextField };
