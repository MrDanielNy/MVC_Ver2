import { createContext } from "react";
export const ThemeContext = createContext({
    theme: "",
    toggleTheme: () => {

    },
})
export const Blind = createContext({
    BlindTheme: "",
    toggleBlindTheme: () => {

    },
});

export const Cognitive = createContext({
    cognitiveTheme: "",
    toggleCognitiveTheme: () => {

    },
});