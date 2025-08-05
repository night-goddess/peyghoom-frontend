"use client";

import { createTheme } from "@mui/material/styles";
// import { PigmentOptions } from "@pigment-css/nextjs-plugin";
// import { peydaWebFaNum } from "@survey-nexus/rtc-ui";

export const theme = createTheme({
  direction: "rtl",
  typography: {
    // fontFamily: vazirMatn.style.fontFamily,
  },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        text: {
          // primary: "#00263D",
          primary: "#000",
          secondary: "rgba(0, 38, 61, 0.6)",
          disabled: "rgba(0, 38, 61, 0.38)",
        },
        primary: {
          main: "#364FD9",
          dark: "#253797",
          light: "#5E72E0",
          contrastText: "#fff",
          "50": "#e6e9fa",
          "200": "#c3caf3",

          //
          // cbd1f6 200
        },
        secondary: {
          main: "#6DC5FF",
          light: "#8AD0FF",
          dark: "#4C89B2",
          contrastText: "#FFFFFF",
        },
        error: {
          main: "#B3261E",
          dark: "#B22921",
          light: "#FF6259",
          contrastText: "#ffffff",
          "50": "#fbf4f3",
          "200": "#f0d4d2",
        },
        background: {
          default: "#F5F5F5",
          paper: "#ffffff",
        },
        warning: {
          main: "#FD9B23",
          light: "#FDAF4F",
          dark: "#B16C18",
          contrastText: "#FFFFFF",
        },
        info: {
          main: "#c87bf3",
          light: "#D395F5",
          dark: "#8C56AA",
          contrastText: "#FFFFFF",
        },
        divider: "#eeeeee",
        success: {
          main: "#34c759",
          dark: "#248B3E",
          light: "#30D158",
          contrastText: "#FFFFFF",
          "50": "#f5fcf6",
          "200": "#d6f4de",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#0A95FF",
          light: "#3BAAFF",
          dark: "#0768B2",
          contrastText: "#ffffff",
        },
        secondary: {
          main: "#6DC5FF",
          light: "#8AD0FF",
          dark: "#4C89B2",
          contrastText: "#FFFFFF",
        },
        error: {
          main: "#FF3B30",
          dark: "#B22921",
          light: "#FF6259",
          contrastText: "#ffffff",
        },
        background: {
          default: "#0F1A27",
          paper: "#1A2733",
        },
        warning: {
          main: "#FD9B23",
          light: "#FDAF4F",
          dark: "#B16C18",
          contrastText: "#FFFFFF",
        },
        info: {
          main: "#c87bf3",
          light: "#D395F5",
          dark: "#8C56AA",
          contrastText: "#FFFFFF",
        },
        divider: "#243545",
        success: {
          main: "#34c759",
          dark: "#248B3E",
          light: "#30D158",
          contrastText: "#FFFFFF",
        },
        text: {
          primary: "#F1F1F1",
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
    cssVarPrefix: "pey",
  },
});
