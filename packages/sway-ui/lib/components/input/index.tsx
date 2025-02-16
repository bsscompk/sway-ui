import { Component, createSignal, Index, JSX, Show, splitProps } from "solid-js";

import { Checkbox as ArkCheckbox, Field, PinInput } from "@ark-ui/solid";

import { CheckIcon, EyeIcon, EyeOffIcon } from "lucide-solid";

import "@lib/components/input/index.css";

type TextFieldTypes = "text" | "email";

type TextFieldProps = {
    label?: string;
    helperText?: string;
    type?: TextFieldTypes;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const TextField: Component<TextFieldProps> = (props): JSX.Element => {
    const [local, inputProps] = splitProps(props, ["label", "helperText"]);

    return (
        <Field.Root>
            <Show when={local.label}>
                <Field.Label>{local.label}</Field.Label>
            </Show>
            <Field.Input {...inputProps} />
            <Show when={local.helperText}>
                <Field.HelperText>{local.helperText}</Field.HelperText>
            </Show>
        </Field.Root>
    );
};

type PasswordFieldProps = {
    label?: string;
    helperText?: string;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const PasswordField: Component<PasswordFieldProps> = (props): JSX.Element => {
    const [local, inputProps] = splitProps(props, ["label", "helperText"]);
    const [showPassword, setShowPassword] = createSignal(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword());

    return (
        <Field.Root>
            <Show when={local.label}>
                <Field.Label>{local.label}</Field.Label>
            </Show>
            <div data-scope="field" data-part="control">
                <Field.Input {...inputProps} type={showPassword() ? "text" : "password"} />
                <button
                    type="button"
                    data-scope="field"
                    data-part="password-visibility"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword() ? <EyeIcon /> : <EyeOffIcon />}
                </button>
            </div>
            <Show when={local.helperText}>
                <Field.HelperText>{local.helperText}</Field.HelperText>
            </Show>
        </Field.Root>
    );
};

type PinFieldProps = {
    length: number;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

const PinField: Component<PinFieldProps> = (props): JSX.Element => {
    return (
        <PinInput.Root>
            <PinInput.Control>
                <Index each={Array.from({ length: props.length })}>
                    {(_, index) => <PinInput.Input index={index} />}
                </Index>
            </PinInput.Control>
            <PinInput.HiddenInput />
        </PinInput.Root>
    );
};

type CheckboxProps = {
    children: JSX.Element;
} & JSX.InputHTMLAttributes<HTMLInputElement>;

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

export { TextField, PasswordField, PinField, Checkbox };
