import "normalize.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import {Provider} from "jotai";
import {ColorSchemeScript, MantineProvider} from "@mantine/core";

import type {Metadata} from "next";
import {Inter} from "next/font/google";


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
