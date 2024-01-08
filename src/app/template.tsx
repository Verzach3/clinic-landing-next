'use client'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { AppShell } from "@mantine/core";

function HomeTemplate({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        {children}
        <Footer /> {/* El Footer se mostrará en todas las páginas */}
      </AppShell.Main>
    </AppShell>
  );
}

export default HomeTemplate;