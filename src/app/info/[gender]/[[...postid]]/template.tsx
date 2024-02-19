'use client'

import {ScrollArea, AppShell, Drawer, Affix, ActionIcon, LoadingOverlay} from "@mantine/core";
import {
  IconMenu2,
  IconPlayerTrackNext,
} from "@tabler/icons-react";
import {usePathname} from "next/navigation";
import classes from "./template.module.css"
import {LinksGroup} from "@/components/info/NavbarLinksGroup";
import {useDisclosure} from "@mantine/hooks";
import React, {useEffect, useState} from "react";
import {getNavBarData} from "@/util/getNavBarData";
import { motion } from "framer-motion";
export function InfoForWomens({children}: { children: React.ReactNode }) {
  const [links, setLinks] = useState<React.ReactNode[]>([]);
  const pathname = usePathname();
  const gender = pathname.split("/")[2]
  useEffect(() => {
    let initialOpened = true;
    getNavBarData(gender).then((data) => {
      data = data.map((data) => {
        return {
          ...data,
          links: data.links?.map((link) => {
            return {
              label: link.label,
              link: link.link
            }
          })
        }
      })
      setLinks(data.map((item) => {
        const IconComponent = item.icon;
        const comp = <LinksGroup {...item} key={item.label} icon={IconComponent} initiallyOpened={initialOpened}/>
        initialOpened = false;
        return comp
      }))
    })
  }, []);


  const [opened, {open, close}] = useDisclosure(false);
  return (
    <AppShell
      navbar={{width: "1.5rem", breakpoint: "sm"}}
    >
      <Affix position={{top: 70}}>
        <motion.div
          whileHover={{}}
          animate={{
            x: [5, 0, 5],
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.2
          }}
        >
          <ActionIcon variant={"light"} size={"xl"} onClick={open} color={"gray"}>
            <IconMenu2 color={"black"} size={"1.8rem"}/>
          </ActionIcon>
        </motion.div>
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
