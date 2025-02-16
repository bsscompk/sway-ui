import { Component, JSX } from "solid-js";

import "@lib/components/button/index.css";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: Component<ButtonProps> = (props): JSX.Element => (
    <button data-scope="button" data-part="root" {...props}>
        {props.children}
    </button>
);

export { Button };
