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
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: "#09094ec9"
                }
            },
            defaultProps: {
                elevation: 0
            }
        }
    }
});

export default baseTheme;
