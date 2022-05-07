import React from 'react'
import type { AppProps } from 'next/app'
import Head from "next/head";
import '../../styles/globals.css'
import { AnimatePresence } from "framer-motion";

import Header from "ui/components/Header";
import Footer from "ui/components/Footer";
import ThemeProvider from "../components/meta/ThemeContext";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    <ThemeProvider>
      <Header links={[{
          name: "Home",
          href: "/"
        }, {
          name: "Test",
          href: "/placeholder"
      }]}/>

      <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)} >
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </AnimatePresence>

      <Footer />
    </ThemeProvider>
  </>
);

export default MyApp
