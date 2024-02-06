"use client";

import Header from "@/components/Header";
import {AppShell, Center, ScrollArea} from "@mantine/core";

function HomeTemplate({children}: { children: React.ReactNode }) {
  return (
    <AppShell styles={{
      root: {
        overflow: "hidden"
      }
    }}
              style={{overflow: "hidden"}} header={{height: 60}} footer={{height: 60}}>
      <AppShell.Header style={{
        width: "100%"
      }}>
          <Header/>
      </AppShell.Header>
      <AppShell.Main style={{
        width: "100%",
      }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default HomeTemplate;
