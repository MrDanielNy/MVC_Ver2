import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
    typography: {
        h1: {

            border: "none",
            color: "white",
            background: "",


        },
        h2: {

            border: "none",
            color: "white",
            background: "",




        },
        h3: {
            fontSize: 20,
            border: "none",
            background: "",

        },
        h6: {
            color: "black",
            fontSize: 20,


        },
        underText: {
            fontSize: 20,
            border: "none",
        },
    },
    palette: {
        primary: {
            main: "#000030"
        },
        secondary: {
            main: "#ffffff",

        }
    },
    shape: {
        borderRadius: 4
    },
    components: {

        MuiButton: {

            defaultProps: {

                sx: {
                    borderRadius: "10px",
                    border: "none",
                    color: "black",
                }

            }
        },
        MuiButton: {


            root: {

                fontSize: "30",
                textTransform: "none",

                background: "#ffffff"
            }
        },
        MuiPaper: {

            styleOverrides: {
                st1: {


                    background: "#190974",
                    border: "none",

                },
                st2: {


                    background: "#004391",
                    border: "none",

                },
                st3: {


                    background: "#7c6500",
                    border: "none",

                },
                stMain: {


                    background: "#7c6500",
                    border: "none",

                },
                root: {
                    background: "#060641f5",
                    border: "none",
                },

            },
            defaultProps: {
                elevation: 0
            }
        }
    }
});

export default baseTheme;
