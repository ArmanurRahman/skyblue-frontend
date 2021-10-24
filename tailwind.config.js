module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            tablet: "640px",
            desktop: "1000px",
        },
        extend: {
            colors: {
                primaryLight: "#a5d8ff",
                primaryMain: "#339af0",
                primaryDark: "#1864ab",
                secondaryLight: "#ffe8cc",
                secondaryMain: "#ff922b",
                secondaryDark: "#d9480f",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    "@screen desktop": {
                        maxWidth: "1300px",
                    },
                },
            });
        },
    ],
};
