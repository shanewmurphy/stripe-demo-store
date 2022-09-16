import "../styles/globals.css";

import { CartContext } from "@/hooks/use-cart.js";

import Nav from "@/components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
