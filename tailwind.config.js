/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
            },
            keyframes: {
                moveUp: {
                    '0%': {
                        opacity: 1,
                        transform: "translateX(0px) translateY(0px) scale(1)",
                    },
                    '25%': {
                        opacity: 0,
                        transform: "translateX(10px) translateY(-10px) scale(0.9)",
                    },
                    '26%': {
                        opacity: 0,
                        transform: "translateX(-10px) translateY(10px) scale(0.9)",
                    },
                    '55%': {
                        opacity: 1,
                        transform: "translateX(0px) translateY(0px) scale(1)",
                    },
                },
            },
            animation: {
                moveUp: 'moveUp 1s ease-in-out',
            },
        },
    },
    plugins: [],
};
