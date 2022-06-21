import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
    typography: {
        label: {
            color: "white",
        },
        h1: {

            border: "none",
            color: "#001433",
            background: "",


        },
        h2: {

            border: "none",
            color: "white",
            background: "",




        },
        h3: {
            fontSize: 25,
            border: "none",
            background: "",
            color: "white",

        },
        h3_Boxes: {
            color: "white",
            fontSize: 25,
            border: "none",
            background: "",

        },
        h3_Contacts: {
            border: "none",
            color: "#001433",
            background: "",


        },
        h6: {
            color: "black",
            fontSize: 20,
            border: "none",


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
                    borderRadius: "0px",
                    border: "none",
                    color: "black",
                },


            }
        },
        MuiButton: {


            root: {
                border: "none",
                fontSize: "30",
                textTransform: "none",

                background: "#ffffff"
            },

        },
        MuiPaper: {

            styleOverrides: {
                contactForm: {
                    background: "#24309c",
                    border: "rgb(250, 247, 247) 2px solid",
                    color: "white",
                },
                st1: {


                    background: "#010b2bfc",
                    border: "none",
                    animation: "lowColor 2s",
                    borderRadius: "0px"


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
                btnContainer: {
                    background: "#0b6c7e",
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
