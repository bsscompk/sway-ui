import { Component, JSX } from "solid-js";

import "@lib/components/button/index.css";

type ButtonProps = {
    onClick?: () => void;
    children: JSX.Element;
};

const Button: Component<ButtonProps> = (props): JSX.Element => {
    return (
        <button
            class="w-full px-4 py-1 rounded-full bg-primary text-white hover:brightness-90 active:brightness-75"
            onClick={props.onClick}
        >
            <span class="brightness-100">{props.children} </span>
        </button>
    );
};

export { Button };
