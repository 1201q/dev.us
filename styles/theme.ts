const mediaQ = {
  pcMargin: 130,
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
    bg_mint: "rgb(0, 217, 166)",
    bg_lightMint: "#f1fef7",
    bg_lightMint2: "rgba(119, 213, 169, 0.3)",
    bg_lightGray: "rgb(251, 251, 253)",
    bg_gray: "#e9ecf3",
    bg_black: "#333333",
    bg_lightBlue: "#ecf3fe",
    bg_lightRed: "#faefee",

    hover_lightBlue: "#d5dffb",
    hover_lightRed: "#f4d2ce",
    f_green: "rgb(0, 152, 116)",
    f_darkGray: "#44576c",
    f_red: "rgb(240, 68, 82)",
    f_blue: "rgb(49, 130, 246)",

    f_lightGray: "#98a8b9",
    border_gray: "rgb(215, 226, 235)",
  },
} as const;

export type themeType = typeof theme;
export type colorThemeKeyType = keyof (typeof theme)["color"];
