"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppShell } from "@mantine/core";

function HomeTemplate({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main style={{
        width: "100%"
      }}>
        {children}
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default HomeTemplate;
