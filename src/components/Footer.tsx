'use client'

import {Text, Container, ActionIcon, Group, rem} from '@mantine/core';
import {IconBrandYoutube, IconBrandInstagram} from '@tabler/icons-react';
import classes from "./Footer.module.css";
import { RiTwitterXLine } from "react-icons/ri";

import Image from "next/image";

const data = [
  {
    title: 'Nosotros',
    links: [
      {label: 'Acerca de nosotros', link: '#'},
      {label: 'Atencion al cliente', link: '#'},
      {label: 'Soporte', link: '#'},
      {label: 'Ubicacion', link: '#'},
    ],
  },
  {
    title: 'Servicios',
    links: [
      {label: 'Contribute', link: '#'},
      {label: 'Media assets', link: '#'},
      {label: 'Changelog', link: '#'},
      {label: 'Releases', link: '#'},
    ],
  },
  {
    title: 'Comunidad',
    links: [
      {label: 'Instagram', link: '#'},
      {label: 'X-Twitterr', link: '#'},
      {label: 'Plataforma', link: '#'},
      {label: 'Atencion Via WhatsApp', link: '#'},
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image width={130} height={100}
                 src={"https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"} alt={"/logo.avif"} unoptimized/>
          <Text size="xs" c="dimmed" className={classes.description}>
           Haz de tu salud una prioridad con WellFit Clinics.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {(new Date()).getFullYear()} WellFit Clinics. Todos Los Derechos Reservados.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <RiTwitterXLine style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

export default Footer;
