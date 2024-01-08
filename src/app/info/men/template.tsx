"use client";

import { ScrollArea, AppShell } from "@mantine/core";
import {
  IconGenderDemigirl,
  IconPhysotherapist,
  IconFileAnalytics,
  IconPointerCheck,
  IconAdjustments,
  IconChartInfographic,
} from "@tabler/icons-react";

import classes from "./template.module.css";
import { LinksGroup } from "@/components/info/NavbarLinksGroup";
import { UserButton } from "@/components/info/UserButton";

const mockdata = [
  {
    label: "Terapia Hormonal para hombre",
    icon: IconGenderDemigirl,

    links: [
      { label: "Estregeno", link: "/" },
      { label: "Testosterona", link: "/" },
      { label: "Cortisol", link: "/" },
      { label: "Dhea", link: "/" },
      { label: "Hormona de crecimiento", link: "/" },
    ],
  },
  {
    label: "Menopausia",
    icon: IconPhysotherapist,
    links: [
      { label: "Tratamientos", link: "/" },
      { label: "Premenopausia", link: "/" },
      { label: "Posmenopausia", link: "/" },
      { label: "Histerectomia", link: "/" },
    ],
  },
  { label: "Desequilibrio Hormonal", icon: IconChartInfographic },
  { label: "Andropausia", icon: IconChartInfographic },
  {
    label: "Sintomas de Andropausia",
    icon: IconPointerCheck,
    links: [
      { label: "Disfunsion Erectil", link: "/" },
      { label: "Perdida Muscular", link: "/" },
      { label: "Problemas Urinarios", link: "/" },
      { label: "Apnea del Sueno", link: "/" },
      { label: "Cambios de Humores (Biporalidad)", link: "/" },
      { label: "Sensacion de Fatiga", link: "/" },
      { label: "Irritacion u bipolaridad", link: "/" },
      { label: "Perdida prograsiva de Cabello", link: "/" },
      { label: "Sensacion de Depresion", link: "/" },
      { label: "Aumento de peso", link: "/" },
    ],
  },
  { label: "Niveles de Tiroides", icon: IconChartInfographic },
  { label: "Hipoglisemia", icon: IconFileAnalytics },
  { label: "Diabetes", icon: IconAdjustments },
];

export function InfoForWomens({ children }: { children: React.ReactNode }) {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <AppShell
      styles={{ navbar: { marginTop: "3.8rem" } }}
      navbar={{ width: 300, breakpoint: "sm" }}
    >
      <AppShell.Navbar>
        <nav className={classes.navbar}>
          <ScrollArea className={classes.links}>
            <div className={classes.linksInner}>{links}</div>
          </ScrollArea>

          <div className={classes.footer}>
            <UserButton />
          </div>
        </nav>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default InfoForWomens;
