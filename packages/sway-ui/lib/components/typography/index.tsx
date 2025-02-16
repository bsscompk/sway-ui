import { Component, JSX } from "solid-js";

type AnchorProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

const A: Component<AnchorProps> = (props): JSX.Element => <a {...props}>{props.children}</a>;

type ParagraphProps = JSX.HTMLAttributes<HTMLParagraphElement>;

const P: Component<ParagraphProps> = (props): JSX.Element => <p {...props}>{props.children}</p>;

export { A, P };
