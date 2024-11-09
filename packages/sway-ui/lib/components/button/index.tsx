import { Component, JSX } from "solid-js";

import "@lib/components/button/index.css";

type ButtonProps = {
    onClick?: () => void;
    children: JSX.Element;
};

const Button: Component<ButtonProps> = (props): JSX.Element => {
    return (
        <button data-scope="button" data-part="root" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export { Button };
