export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export const COLORS = {
  /* Color palette Figma */
  cyan: "hsl(180, 66%, 49%)",
  lightGray: "hsl(225, 32%, 95%)",
  grayishViolet: "hsl(257, 8%, 63%)",
  darkViolet: "hsl(257, 26%, 33%)",
  veryDarkViolet: "hsl(257, 27%, 26%)",
  veryDarkBlue: "hsl(257, 11%, 21%)",

  red: "hsl(0, 87%, 67%)",
  gray: "hsl(0, 0%, 75%)",
  white: "hsl(0, 100%, 100%)",
};

export const WEIGHTS = {
  regular: 400,
  medium: 500,
  bold: 700,
};
