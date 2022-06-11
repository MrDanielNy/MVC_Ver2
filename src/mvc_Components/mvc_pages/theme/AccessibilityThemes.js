import { withTheme } from "styled-components";

export const theme1 = {
  typography: {
    label: {
      color: "white",
    },
    h1: {
      border: "none",
      color: "white",
      background: "black",
    },
    h2: {
      background: "black",
      color: "white",
    },
    h3: {
      fontSize: 25,
      border: "none",
      color: "white",
      background: "black",
      border: "none",

    },
    h3_Boxes: {
      color: "white",
      fontSize: 25,
      border: "none",
      background: "",

    },
    h3_Contacts: {
      color: "white",
      border: "none",
      background: "black",
    },
    h6: {
      color: "black",
      fontSize: 20,
      border: "none",


    },
  },
  "palette": {
    curser: "pointer",
    "primary": {
      "main": "#353535"
    },
    "secondary": {
      "main": "#ffffff"
    }
  },
  "components": {
    "MuiButton": {
      "defaultProps": {
        "disableRipple": false,
        "size": "small",
        sx: {
          borderRadius: "10px",
          border: "none",
          color: "black",
          fontSize: "20",
        }
      }
    },
    "MuiPaper": {
      "defaultProps": {
        "elevation": 10
      },
      "styleOverrides": {
        contactForm: {
          background: "black",
          border: "rgb(250, 247, 247) 2px solid",
          color: "white",
        },
        st1: {


          background: "black",
          border: "none",
          color: "white"

        },
        st2: {


          background: "#000000",
          border: "none",

        },
        st3: {


          background: "#000000",
          border: "none",

        },
        btnContainer: {
          background: "#000000",
          border: "none",
          color: "white",
        },
        "root": {
          "background": "#353535",
          "border": "none",
        }
      }
    }
  }
};

export const theme2 = {
  typography: {
    h1: {

      border: "2px solid yellow",
      color: "white",

    },
    h2: {
      border: "2px solid yellow",

      color: "white",
      fontSize: 25,
    },
    h3: {
      border: "2px solid yellow",
      fontSize: 25,


    },
    h3_Boxes: {
      border: "2px solid yellow",
      color: "white",
      fontSize: 25,
      border: "none",
      background: "",

    },
    h3_Contacts: {
      color: "black",
      border: "2px solid yellow",
    },
    h6: {
      border: "2px solid yellow",
      color: "black",
      fontSize: 20,


    },
  }, btnContainer: {

    border: "2px solid yellow",

  },
  "root": {
    "background": "#353535",
    "border": "none",
  }


};


export const theme3 = {
  typography: {
    h1: {

      border: "none",
      color: "white",
      background: "blue"

    },
    h2: {
      background: "blue",
    },
    h3: {
      fontSize: 35,
      border: "none",
      background: "",
      color: "black",

    },
    h3_Boxes: {
      color: "#000000",
      fontSize: 25,
      border: "none",
      background: "",

    },
    h3_Contacts: {
      color: "white",
      background: "#0011ff",
      border: "none",
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
  "palette": {
    "primary": {
      "main": "#0000f5"
    },
    "secondary": {
      "main": "#ffffff"
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
        border: "none",
        fontSize: "30",
        textTransform: "none",

        background: "#ffffff"
      }
    },
    MuiPaper: {

      styleOverrides: {
        contactForm: {
          background: "#0011ff",
          border: "rgb(250, 247, 247) 2px solid",
          color: "white",
        },
        st1: {


          background: "#2600ff",
          border: "none",

        },
        st2: {


          background: "darkblue",
          border: "none",

        },
        st3: {


          background: "#ffdb39",
          border: "none",

        },
        stMain: {


          background: "#ffdb38",
          border: "none",

        },
        btnContainer: {
          background: "#5de7ff",
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
};