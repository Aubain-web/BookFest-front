import { createTheme } from '@mui/material/styles';

export const UseTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#76199b',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

export default UseTheme;