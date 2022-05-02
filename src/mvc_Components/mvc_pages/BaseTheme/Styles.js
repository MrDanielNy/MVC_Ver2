import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
    palette: {
        primary: {
            main: "#000030"
        },
        secondary: {
            main: "#ffffff"
        }
    },
    shape: {
        borderRadius: 4
    },
    components: {
        MuiButton: {
            defaultProps: {
                sx: {
                    margin: 1
                }
            }
        },
        MuiButton: {
            root: {
                textTransform: "none",

                background: "#ffffff"
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: "#060641f5"
                },

            },
            defaultProps: {
                elevation: 0
            }
        }
    }
});

export default baseTheme;
