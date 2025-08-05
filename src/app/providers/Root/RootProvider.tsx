"use client";
import { ReactNode } from "react";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import EmotionCacheProvider from "../EmotionCacheProvider";
import { theme } from "@/app/theme/theme";
import PWAProvider from "../PwaProvider/PWAProvider";

function RootProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <InitColorSchemeScript attribute="class" defaultMode="dark" />
      <AppRouterCacheProvider
        options={{
          enableCssLayer: true,
        }}
      >
        <EmotionCacheProvider>
          <ThemeProvider theme={theme} defaultMode="dark">
            <CssBaseline />
            <PWAProvider>{children}</PWAProvider>
          </ThemeProvider>
        </EmotionCacheProvider>
      </AppRouterCacheProvider>
    </>
  );
}

export default RootProvider;
