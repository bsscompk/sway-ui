import { Component, JSX } from "solid-js";

type ParagraphProps = JSX.HTMLAttributes<HTMLParagraphElement>;

const P: Component<ParagraphProps> = (props): JSX.Element => {
    return <p {...props}>{props.children}</p>;
};

type AnchorProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

const A: Component<AnchorProps> = (props): JSX.Element => {
    return <a {...props}>{props.children}</a>;
};

export { P, A };
