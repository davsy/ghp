import { createMuiTheme } from '@material-ui/core/styles';

export const CONSTANTS = {
    PRIMARY: "#5c5c5c",
    PRIMARYDARK: "#0c0c0c",
    SECONDARY: "#869dab",
    SECONDARYDARK: "#2d4450",
    BGDARK: "#0C120C",
    BGLIGHT: "#FBF5F3",
}

export const Theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: CONSTANTS.PRIMARY,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: CONSTANTS.SECONDARY,
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});