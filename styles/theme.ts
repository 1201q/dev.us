const mediaQ = {
  pcMargin: 70,
  mobileMargin: 20,
};

export const theme = {
  mediaQuery: {
    pcMargin: `0px ${mediaQ.pcMargin}px`,
    mobileMargin: `0px ${mediaQ.mobileMargin}px`,
    pcWidth: `calc(100% - ${mediaQ.pcMargin * 2}px)`,
    mobileWidth: `calc(100% - ${mediaQ.mobileMargin * 2}px)`,
  },
  color: {
    bg_gray: "#e9ecf3",
    bg_black: "#333333",
    f_darkGray: "#44576c",
    f_lightGray: "#98a8b9",
    border_gray: "rgb(215, 226, 235)",
  },
};
