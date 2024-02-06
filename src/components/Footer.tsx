'use client'

import {Text, Container, ActionIcon, Group, rem} from '@mantine/core';
import {IconBrandTwitter, IconBrandYoutube, IconBrandInstagram} from '@tabler/icons-react';
import classes from "./Footer.module.css";
import Logo from './Logo';
import Image from "next/image";

const data = [
  {
    title: 'Nosotros',
    links: [
      {label: 'Features', link: '#'},
      {label: 'Pricing', link: '#'},
      {label: 'Support', link: '#'},
      {label: 'Forums', link: '#'},
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
      {label: 'Join Discord', link: '#'},
      {label: 'Follow on Twitter', link: '#'},
      {label: 'Email newsletter', link: '#'},
      {label: 'GitHub discussions', link: '#'},
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
          <Image width={40} height={40}
                 src={"/logo.avif"} alt={"/logo.avif"}/>
          <Text size="xs" c="dimmed" className={classes.description}>
            lorem ipsum dolor sit amet
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {(new Date()).getFullYear()} WellFit Clinic. Todos Los Derechos Reservados.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
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
