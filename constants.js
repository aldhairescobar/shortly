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
  cyan: "hsl(180, 66%, 49%)",
  darkViolet: "hsl(257, 27%, 26%)",
  red: "hsl(0, 87%, 67%)",
  gray: "hsl(0, 0%, 75%)",
  grayishViolet: "hsl(257, 7%, 63%)",
  veryDarkBlue: "hsl(255, 11%, 22%)",
  veryDarkViolet: "hsl(260, 8%, 14%)",
};

export const WEIGHTS = {
  regular: 400,
  medium: 500,
  bold: 700,
};
