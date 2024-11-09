import type { Config } from "tailwindcss";

export default {
    content: ["./lib/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                analogous: "var(--color-analogous)",
            },
        },
    },
    plugins: [
        ({ addComponents }) => {
            addComponents({
                ":root": {
                    "--color-primary": "#0b7659",
                    "--color-analogous": "#34a95c",
                },
            });
        },
    ],
} satisfies Config;
