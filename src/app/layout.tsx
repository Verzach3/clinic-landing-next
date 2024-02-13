import "normalize.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import {Provider} from "jotai";
import {ColorSchemeScript, MantineProvider} from "@mantine/core";

import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Script from "next/script";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "WellFit Clinic",
  description: "WellFit Clinic",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
        <Script strategy={"beforeInteractive"} async src={"https://umami.wellfitclinic.com/script.js"}
              data-website-id="ddd1df27-bd8e-472f-85b7-b6d75eb02b11"/>
      <ColorSchemeScript/>
    </head>
    <body>
    <MantineProvider>
      <Provider>{children}</Provider>
    </MantineProvider>
    </body>
    </html>
  );
}
