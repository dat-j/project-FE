import store from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Layout from "./layout";
import LayoutTop from "./layout_top";
import LayoutCollection from "./layout_collection";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const layoutCollection = ["/collection"];

  return (
    <Provider store={store}>
      {layoutCollection.includes(router.pathname) ? (
        <>
          <LayoutTop />
          {/* <LayoutCollection /> */}
          {/* <Layout/> */}
          <Component {...pageProps} />
        </>
      ) : (
        <>
          <LayoutTop />
          {/* <Layout/> */}
          <Component {...pageProps} />
        </>
      )}
    </Provider>
  );
}
