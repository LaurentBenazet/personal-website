import Typography from "typography"

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.6,
    headerFontFamily: [
        "Avenir Next",
        "Helvetica Neue",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
    ],
    bodyFontFamily: ["Georgia", "serif"],
});

export const {scale, rhythm, options} = typography;
export default typography