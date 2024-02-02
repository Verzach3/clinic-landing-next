"use client";

import Header from "@/components/Header";
import {AppShell} from "@mantine/core";

function HomeTemplate({children}: { children: React.ReactNode }) {
  return (
    <AppShell header={{height: 60}} footer={{ height: 60 }}>
      <AppShell.Header style={{
        width: "100vw"
      }}>
        <Header/>
      </AppShell.Header>
      <AppShell.Main style={{
        width: "100vw",
      }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default HomeTemplate;
