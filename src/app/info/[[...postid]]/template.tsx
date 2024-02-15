'use client'

import {ScrollArea, AppShell, Drawer, Affix, ActionIcon, Loader, LoadingOverlay} from "@mantine/core";
import {
  IconPlayerTrackNext,
} from "@tabler/icons-react";

import classes from "./template.module.css"
import {LinksGroup} from "@/components/info/NavbarLinksGroup";
import {UserButton} from "@/components/info/UserButton";
import {useDisclosure} from "@mantine/hooks";
import React, {useEffect, useState} from "react";
import {getNavBarData} from "@/util/getNavBarData";

export function InfoForWomens({children}: { children: React.ReactNode }) {
  const [links, setLinks] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    getNavBarData().then((data) => {
      setLinks(data.map((item) => {
        const IconComponent = item.icon;
        return <LinksGroup {...item} key={item.label} icon={IconComponent}/>
      }))
    })
  }, []);


  const [opened, {open, close}] = useDisclosure(false);
  return (
    <AppShell
      navbar={{width: "1.5rem", breakpoint: "sm"}}
    >
      <Affix position={{top: 70}}>
        <ActionIcon variant={"white"} size={"lg"} onClick={open}>
          <IconPlayerTrackNext color={"black"}/>
        </ActionIcon>
      </Affix>
      <Drawer size={"md"} className={classes.navbar} opened={opened} onClose={close}>
        {links.length === 0 ?
          <LoadingOverlay
            loaderProps={{
              type: "bars",
            }}
            visible
            zIndex={1000}
            overlayProps={{radius: "sm", blur: 2}}
          /> :
          <div>
          <ScrollArea className={classes.links}>
            <div className={classes.linksInner}>
              {links}
            </div>
          </ScrollArea>
          </div>
        }
      </Drawer>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}

export default InfoForWomens;
