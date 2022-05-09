import { withTheme } from "styled-components";

export const theme1 = {
  typography: {
    h1: {

      border: "none",
      color: "white",
      background: "black",

    },
    h3: {
      fontSize: 20,
      border: "none",
      color: "white",
      background: "black",
      border: "none",

    }
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
        "sx": {
          "color": "black"
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
      fontSize: 20,

      background: "black",
    }
  },
  palette: {

    primary: {
      main: "#ffffff",

    },
    secondary: {
      main: "white",
      contrastText: 'yellow',
    },

  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {

          borderRadius: 8
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: false,
        size: "large",


        sx: {
          borderRadius: "10px",
          border: "1px solid yellow",
          color: "black",
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        st1: {


          background: "#202020",
          border: "none",

        },
        st2: {


          background: "#202020",
          border: "none",

        },
        st3: {


          background: "#202020",
          border: "none",

        },
        root: {

          borderRadius: 1,
          background: "#202020"
        }
      },
      defaultProps: {
        elevation: 20
      }
    }
  }
};


export const theme3 = {
  typography: {
    h1: {

      border: "2px solid blue",
      color: "white",
    },
    h3: {
      fontSize: 20,
      border: "none",
    }
  },
  palette: {

    primary: {
      main: "#ffffff",

    },
    secondary: {
      main: "white",
      contrastText: 'yellow',
    },

  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          border: "1px solid black",
          width: 80,
          height: 80,
          borderRadius: 8
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "large",

        sx: {
          borderRadius: "10px",
          border: "1px solid yellow",
          color: "black",
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        st1: {


          background: "#202020",
          border: "none",

        },
        st2: {


          background: "#202020",
          border: "none",

        },
        st3: {


          background: "#202020",
          border: "none",

        },
        root: {
          border: "1px solid lightblue",

          borderRadius: 1,
          background: "#202020"
        }
      },
      defaultProps: {
        elevation: 20
      }
    }
  }
};
