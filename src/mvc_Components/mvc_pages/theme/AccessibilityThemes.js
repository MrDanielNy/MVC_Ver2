export const theme1 = `{
  "palette": {
    "primary": {
      "main": "##32323694"
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
          "background": "#323236e8"
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
      main: "#ffffed"
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
