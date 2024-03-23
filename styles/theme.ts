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
};
