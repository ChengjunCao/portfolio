export const maxContainerWidth = 1600;

// These breakpoint values don't seem to be getting used
// Seems like default values apply no matter what's entered here
// Haven't been able to debug why yet, this matches what Styled-System's docs show
export const breakpoints = ["40em", "52em", "64em", "80em"];

const buildMediaQuery = (size) => `@media screen and (min-width: ${size})`;

export const mediaQueries = {
  sm: buildMediaQuery(breakpoints[0]),
  md: buildMediaQuery(breakpoints[1]),
  lg: buildMediaQuery(breakpoints[2]),
  xl: buildMediaQuery(breakpoints[3]),
};

export const space = {
  none: "0px",
  xxs: "4px",
  xs: "8px",
  sm: "16px",
  md: "24px",
  lg: "48px",
  xl: "96px",
};

export const sizes = {
  xxs: "12px",
  xs: "16px",
  sm: "24px",
  md: "48px",
  lg: "64px",
  xl: "128px",
};

export const fonts = {
  body: "IBM Plex Sans, system-ui, Helvetica, Arial, sans-serif",
  monospace: "IBM Plex Mono, Menlo, monospace",
  condensed: "IBM Plex Sans Condensed",
};

export const font = fonts.body;

export const fontSizes = {
  xxs: "10px",
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  xxl: "32px",
};

export const medium = 400;
export const bold = 700;
export const regular = medium;

export const fontWeights = { regular, medium, bold };

export const lineHeights = {
  xxs: "12px",
  xs: "16px",
  sm: "20px",
  md: "24px",
  lg: "28px",
  xl: "32px",
  xxl: "40px",
};

export const radii = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
};
export const radius = radii.md;

const trueBlack = "#111111";
const black = "#3D3D3D"; // Neutral/Black
const mediumGray = "#889096"; // Neutral/Medium Gray
const gray = mediumGray;
const disabledGray = "#d4d4d4"; // Neutral/Disabled Gray
const lightGray = "#ebebeb"; // Neutral/Light Gray
const paleGray = "#f7f7f7"; // Neutral/Pale Gray
const white = "#ffffff"; // Neutral/White

//Activate Branding
const activatePink = "#FF2FBE";
// Primary
const blue100 = "#BEE4FF";
const lightBlue = "#3E97D6";
const blue = "#0A5B94";
const darkBlue = "#093F6B";
const primary = blue;
// Secondary
const lightGreen = "#24D56B";
const green = "#0AAB4B";
const darkGreen = "#12783C";
const secondary = green;
// Accent 1
const lightOrange = "#FFAB61";
const orange = "#F78723";
const darkOrange = "#E87209";
const accent1 = orange;
// Accent 2
const lightPurple = "#C183FF";
const purple = "#4D19A1";
const darkPurple = "#2C066B";
const accent2 = purple;
// Accent 3
const lightRed = "#DA6286";
const red = "#B11A47";
const darkRed = "#7F1C39";
const accent3 = red;
// Accent 4
const lightYellow = "#FFF897";
const yellow = "#FFEF0D";
const darkYellow = "#E8D900";
const accent4 = yellow;

const text = black;
const buttonGray = lightGray;
const borderGray = lightGray;

const positive = green;
const warning = "#F0B000";
const negative = "#D0021B";

export const shadows = {
  none: "0px",
  sm: "0 1px 4px rgba(0, 0, 0, 0.18)",
  md: "0 0 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.1)",
  lg: "0 0 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.1)",
  xl: "0 16px 32px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.07)",
  inner: "inset 0 1px 4px rgba(0, 0, 0, 0.04)",
};

export const opacity = {
  full: "100%",
  high: "75%",
  medium: "50%",
  low: "25%",
  none: "0%",
};

// Animation duration
export const duration = {
  fast: "150ms",
  normal: "300ms",
  slow: "450ms",
  slowest: "600ms",
};

// Animation easing curves
const easeInOut = "cubic-bezier(0.5, 0, 0.25, 1)";
const easeOut = "cubic-bezier(0, 0, 0.25, 1)";
const easeIn = "cubic-bezier(0.5, 0, 1, 1)";

export const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
};

// Animation delay
export const transitionDelays = {
  sm: "60ms",
  md: "160ms",
  lg: "260ms",
  xl: "360ms",
};

export const contrastRatio = 1;

export const colors = {
  accent1,
  accent2,
  accent3,
  accent4,
  activatePink,
  black,
  blue,
  blue100,
  borderGray,
  buttonGray,
  darkBlue,
  darkGreen,
  darkOrange,
  darkPurple,
  darkRed,
  darkYellow,
  disabledGray,
  gray,
  green,
  lightBlue,
  lightGray,
  lightGreen,
  lightOrange,
  lightPurple,
  lightRed,
  lightYellow,
  mediumGray,
  negative,
  orange,
  paleGray,
  positive,
  primary,
  purple,
  red,
  secondary,
  text,
  trueBlack,
  warning,
  white,
  yellow,
};

export const palette = {
  mediumGray: {
    light: text,
    base: mediumGray,
    dark: mediumGray,
  },
  black: {
    light: mediumGray,
    base: black,
    dark: black,
  },
  primary: {
    light: lightBlue,
    base: blue,
    dark: darkBlue,
  },
  secondary: {
    light: lightGreen,
    base: green,
    dark: darkGreen,
  },
  success: {
    light: lightGreen,
    base: green,
    dark: darkGreen,
  },
  error: {
    light: lightRed,
    base: red,
    dark: darkRed,
  },
  warning: {
    light: lightYellow,
    base: yellow,
    dark: darkYellow,
  },
  alert: {
    light: lightOrange,
    base: orange,
    dark: darkOrange,
  },
  text: {
    lightest: paleGray,
    light: mediumGray,
    base: text,
    dark: trueBlack,
  },
  background: {
    lightest: white,
    light: paleGray,
    base: buttonGray,
    dark: lightGray,
    darkest: text,
  },
  border: {
    light: lightGray,
    base: borderGray,
    dark: mediumGray,
  },
};

export const textStyles = {
  display1: {
    fontSize: fontSizes.mega,
    fontWeight: bold,
    lineHeight: lineHeights.mega,
    letterSpacing: -0.6,
  },
  display2: {
    fontSize: fontSizes.xl,
    fontWeight: bold,
    lineHeight: lineHeights.xl,
    letterSpacing: -0.4,
  },
  display3: {
    fontSize: fontSizes.lg,
    fontWeight: bold,
    lineHeight: lineHeights.lg,
    letterSpacing: -0.2,
  },
  caption: {
    fontSize: fontSizes.xs,
    fontWeight: regular,
    lineHeight: lineHeights.xs,
    letterSpacing: 0.2,
  },
  label: {
    fontSize: fontSizes.xs,
    fontWeight: bold,
    lineHeight: lineHeights.xs,
    letterSpacing: 0.2,
    textTransform: "uppercase",
    color: mediumGray,
  },
  micro: {
    fontSize: fontSizes.xxs,
    fontWeight: regular,
    lineHeight: fontSizes.xxs,
    letterSpacing: 0.2,
  },
  body1: {
    fontSize: fontSizes.md,
    fontWeight: regular,
    lineHeight: lineHeights.md,
    letterSpacing: 0, // overwrite page CSS
  },
  body2: {
    fontSize: fontSizes.sm,
    fontWeight: regular,
    lineHeight: lineHeights.sm,
    letterSpacing: 0, // overwrite page CSS
  },
  table: {
    fontFamily: fonts.condensed,
    fontSize: fontSizes.sm,
    fontWeight: regular,
    lineHeight: lineHeights.sm,
  },
};

// Alphabetical ordering
const baseTheme = {
  bold,
  breakpoints,
  colors,
  contrastRatio,
  duration,
  font,
  fontSizes,
  fontWeights,
  lineHeights,
  maxContainerWidth,
  mediaQueries,
  opacity,
  palette,
  radii,
  radius,
  regular,
  shadows,
  sizes,
  space,
  textStyles,
  timingFunctions,
  transitionDelays,
};

export const theme = { ...baseTheme };

export default theme;
