import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "react-redux";
import { store } from "@/slices/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme appearance="light">
        <Layout />
        <Component {...pageProps} />
        <Toaster />
      </Theme>
    </Provider>
  );
}
