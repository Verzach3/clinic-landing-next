'use client';

import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from "./Footer.module.css";
import { RiTwitterXLine } from "react-icons/ri";
import Image from "next/image";
import Link from 'next/link';

const data = [
  {
    title: 'Nosotros',
    links: [
      { label: 'Acerca de nosotros', link: '/about' },
      { label: 'Atencion al cliente', link: '#' },
      { label: 'Soporte', link: '#contact-us' },
      { label: 'Ubicacion', link: 'https://maps.app.goo.gl/ebrWfChz6dPpqKWs9', external: true },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Comunidad',
    links: [
      { label: 'Instagram', link: 'https://www.instagram.com/tuenlacedeinstagram', external: true },
      { label: 'X-Twitter', link: 'https://twitter.com/tuenlacedetwitter', external: true },
      { label: 'Plataforma', link: 'https://platform.wellfitclinic.com/login', external: true },
      { label: 'Atencion Via WhatsApp', link: 'https://wa.me/573107686345', external: true },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => {
      if (link.external) {
        return (
          <Text<'a'>
            key={index}
            className={classes.link}
            component="a"
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Text>
        );
      }

      return (
        <Link key={index} href={link.link}>
          <Text className={classes.link}>{link.label}</Text>
        </Link>
      );
    });

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            width={130}
            height={100}
            src={"https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"}
            alt={"/logo.avif"}
            unoptimized
          />
          <Text size="xs" c="dimmed" className={classes.description}>
            Haz de tu salud una prioridad con WellFit Clinics.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} WellFit Clinics. Todos Los Derechos Reservados.
        </Text>
        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://twitter.com/tuenlacedetwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.youtube.com/tuenlacedeyoutube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="https://www.instagram.com/tuenlacedeinstagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

export default Footer;