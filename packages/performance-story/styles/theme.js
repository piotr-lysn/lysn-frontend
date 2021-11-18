import { createTheme, responsiveFontSizes, darken } from "@mui/material/styles";

let theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#4365EB',
      contrastText: '#FFFFFF',
      contrastText2: '#E1E1E1',
    },
    secondary: {
      main: '#0D1224',
    },
    background: {
      input: {
        primary: '#050812',
      },
      background1: '#191D45',
      background2: '#0D1224',
      background3: '#090D1B',
    },
    text: {
      primary: '#FFFFFF',
      disabled: darken('#E1E1E1', 0.5),
    }
  },
  shape: {
    borderRadius: 30,
  },
  typography: {
    fontFamily: 'Metropolis, sans-serif',
    secondaryFontFamily: 'Brinnan, sans-serif',
    fontWeightRegular: 400,
    h1: {
      fontSize: '48px',
      fontWeight: 400,
      lineHeight: 70/48,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 400,
      lineHeight: 70/36,
    },
    body1: {
      fontSize: '24px',
      lineHeight: 35/24,
    },
    body2: {
      fontSize: '20px',
      lineHeight: 35/20,
    },
    caption: {
      fontSize: '16px',
      lineHeight: 20/16,
    },
    button: {
      fontSize: '30px',
      fontWeight: 700,
      lineHeight: 1,
      textTransform: 'none',
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Metropolis';
          src: url('/fonts/Metropolis/MetropolisRegular.otf');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'Brinnan';
          src: url('/fonts/Brinnan/BrinnanRegular.otf');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {  
          font-family: 'Bold';
          src: url('/fonts/Brinnan/BrinnanBold.otf');
          font-weight: bold;
          font-style: normal;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        containedSizeLarge: {
          padding: theme.spacing(4, 31, 4, 31),
        },
        root: {
          '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.contrastText2,

          '&.Mui-disabled': {
            color: darken(theme.palette.primary.contrastText2, 0.5),
          },
          '&.Mui-focused': {
            color: theme.palette.primary.contrastText2,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.contrastText2,
          backgroundColor: theme.palette.background.input.primary,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.dark,
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

console.log(theme)

export default theme;