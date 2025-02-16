import { Component, JSX } from "solid-js";

import "@lib/components/button/index.css";

type ButtonTypes = "button" | "submit" | "reset";

type ButtonProps = {
    onClick?: () => void;
    children: JSX.Element;
    disabled?: boolean;
    type?: ButtonTypes;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: Component<ButtonProps> = (props): JSX.Element => {
    return (
        <button data-scope="button" data-part="root" {...props}>
            {props.children}
        </button>
    );
};

export { Button };
