import type { AppProps } from "next/app";
import "@/styles/reset.css";
import { AuthProvider } from "@/utils/firebase/provider";
import "@/utils/firebase/client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import initAuth from "@/utils/firebase/initAuth";

initAuth();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* <AuthProvider> */}
      <Component {...pageProps} />
      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}
