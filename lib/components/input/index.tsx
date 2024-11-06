import { Component, JSX, Show } from "solid-js";

import { Field } from "@ark-ui/solid/field";

import "@lib/components/input/index.css";

type TextFieldProps = {
    label?: string;
    helperText?: string;
} & JSX.HTMLAttributes<HTMLInputElement>;

const TextField: Component<TextFieldProps> = (props): JSX.Element => {
    return (
        <Field.Root>
            <Show when={props.label}>
                <Field.Label>{props.label}</Field.Label>
            </Show>
            <Field.Input />
            <Show when={props.helperText}>
                <Field.HelperText>{props.helperText}</Field.HelperText>
            </Show>
        </Field.Root>
    );
};

export { TextField };
