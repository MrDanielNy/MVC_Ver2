export const theme1 = `{
  "palette": {
    "primary": {
      "main": "#181414"
    },
    "secondary": {
      "main": "#ffffff"
    }
  },
  "components": {
    "MuiButton": {
      "defaultProps": {
        "disableRipple": true,
        "size": "small",
        "sx": {
          "color": "#ffffff"
        }
      }
    },
    "MuiPaper": {
      "defaultProps": {
        "elevation": 10
      },
      "styleOverrides": {
        "root": {
          "background": "#070505"
        }
      }
    }
  }
}`;

export const theme2 = {
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#00b0ff"
    },

  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        size: "large",
        sx: {
          borderRadius: "10px"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "gray"
        }
      },
      defaultProps: {
        elevation: 20
      }
    }
  }
};
