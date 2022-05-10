import { withTheme } from "styled-components";

export const theme1 = {
  typography: {
    h1: {

      border: "none",
      color: "white",
      background: "black",

    },
    h3: {
      fontSize: 25,
      border: "none",
      color: "white",
      background: "black",
      border: "none",

    },
    h3_Contacts: {
      color: "black",
      border: "none",
    },
    h6: {
      color: "black",
      fontSize: 20,


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

      border: "2px solid blue",
      color: "white",

    },
    h3: {
      border: "2px solid darkblue",
      fontSize: 25,


    },
    h3_Contacts: {
      color: "black",
      border: "2px solid darkblue",
    },
    h6: {
      color: "black",
      fontSize: 20,


    },
  }


};


export const theme3 = {
  typography: {
    h1: {

      border: "none",
      color: "white",
      background: "#111111",

    },
    h3: {
      fontSize: 25,
      border: "none",
      color: "white",
      background: "#111111",
      border: "none",

    },
    h3_Contacts: {
      color: "black",
      border: "none",
    },
    h6: {
      color: "black",
      fontSize: 20,


    },
  },
  "palette": {
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
        st1: {


          background: "#111111",
          border: "none",
          color: "white"

        },
        st2: {


          background: "#111111",
          border: "none",

        },
        st3: {


          background: "#111111",
          border: "none",

        },
        "root": {
          "background": "#111111",
          "border": "none",
        }
      }
    }
  }
};