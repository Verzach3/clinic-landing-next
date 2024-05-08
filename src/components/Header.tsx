"use client";

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconStatusChange,
  IconThermometer,
  IconCircuitSwitchClosed,
  IconHazeMoon,
  IconArrowDownBar,
  IconMoodSick,
  IconChevronDown,
  IconGenderFemale,
  IconLogin2,
  IconGenderMale,
  IconBrandBlogger
} from "@tabler/icons-react";
import classes from "./Header.module.css";
import Link from "next/link";
import { useAtom } from "jotai";
import { navShown } from "@/state/navShown";
import Image from "next/image";

const headerSections = [
  {
    icon: IconThermometer,
    title: "Dolor de cabeza",
    description: "Sensación dolorosa en cualquier parte de la cabeza, variando en intensidad.",
    path: "/sintomas/dolorcabeza",
  },
  {
    icon: IconMoodSick,
    title: "Fatiga",
    description: " Cansancio extremo y falta de energía persistente",
    path: "/sintomas/fatiga",
  },
  {
    icon: IconCircuitSwitchClosed,
    title: "Perdida de cabello",
    description: "Reducción notable de cabello en el cuero cabelludo.",
    path: "/sintomas/perdidacabello",
  },
  {
    icon: IconArrowDownBar,
    title: "Bajo deseo sexual",
    description: "Disminución del interés en la actividad sexual.",
    path: "/sintomas/bajodeseo",
  },
  {
    icon: IconHazeMoon,
    title: "Sofocos / Sudores nocturnos",
    description: "Calor repentino y transpiración excesiva durante la noche",
    path: "/sintomas/sofocos",
  },
  {
    icon: IconStatusChange,
    title: "Cambios de Humor /Ansiedad  / Depresion",
    description: "Alteraciones del estado de ánimo, inquietud y tristeza profunda.",
    path: "/sintomas/ansiedad",
  },
];

const headerCategories = [
  {
    icon: IconGenderMale,
    title: "Recursos Masculinos",
    description: "Conocer mas para contenido de caballero",
    path: "/info/masculine/hormonashombres-hgh",
  },
  {
    icon: IconGenderFemale,
    title: "Recursos Femeninos",
    description: "Conocer mas para contenido de Femenino",
    path: "/info/feminine/sintomasmenopauticos-aumentodepeso",
  },
];

const headerBlog = [
  {
    icon: IconBrandBlogger,
    title: "Blogs",
    description: "Conocer todo nuestros Blogs",
    path: "/blog",
  },
];

export function Header() {
  const [drawerOpened, setDrawerOpened] = useAtom(navShown);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [linksOpenedCategorias, { toggle: toggleLinksCategorias }] = useDisclosure(false);
  const theme = useMantineTheme();
  const theme1 = useMantineTheme();

  const links = headerSections.map((item) => (
    <Link
      href={item.path}
      key={item.title}
      shallow
      style={{ textDecoration: "none", color: "black" }}
    >
      <UnstyledButton className={classes.subLink} onClick={() => setDrawerOpened(false)}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.blue[6]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  const linksBlog = headerBlog.map((item) => (
    <Link
      href={item.path}
      key={item.title}
      shallow
      style={{ textDecoration: "none", color: "black" }}
    >
      <UnstyledButton className={classes.subLink} onClick={() => setDrawerOpened(false)}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.blue[6]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  const linksCategorias = headerCategories.map((item) => (
    <Link
      href={item.path}
      key={item.title}
      shallow
      style={{ textDecoration: "none", color: "black" }}
    >
      <UnstyledButton className={classes.subLink} onClick={() => setDrawerOpened(false)}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.blue[6]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
  ));

  return (
    <>
      <div className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" shallow>
            <Image
              width={90}
              height={50}
              priority
              src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"
              alt="/logo.avif"
              unoptimized
            />
          </Link>
          <Group h="101%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            

            <a href="/about" className={classes.link}>
              Nosotros
            </a>

            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.linksCategorias}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Edu-Wellfit
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Especialidad Variada</Text>
                  <Anchor href="/infowoman" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <SimpleGrid cols={2} spacing={0}>
                  {linksCategorias}
                </SimpleGrid>

                <Divider my="sm" />

                <Group justify="space-between" px="md">
                  <Text fw={500}>Categoria de Sintomas</Text>
                </Group>

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <Divider my="sm" />

                <Group justify="space-between" px="md">
                  <Text fw={500}>Conoce nuestro Blog</Text>
                </Group>

                <SimpleGrid cols={2} spacing={0}>
                  {linksBlog}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <a href="/programs" className={classes.link}>
              Servicios
            </a>

            <a href="/datasalud" className={classes.link}>
              Data-Salud
            </a>
          </Group>

          <Group visibleFrom="sm">
      <Button
        rightSection={<IconLogin2 size={"1.3rem"} />}
        variant="gradient"
        gradient={{ from: 'blue', to: 'green' }}
      >
        Mi Cuenta
      </Button>
    </Group>

          <Burger
            opened={drawerOpened}
            onClick={() => setDrawerOpened((o) => !o)}
            hiddenFrom="sm"
          />
        </Group>
      </div>

      <Drawer
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
        opened={drawerOpened}
        styles={{
          inner: {
            maxWidth: "100vw"
          }
        }}
        onClose={() => setDrawerOpened(false)}
        padding="md"
        title="WellFit Clinic"
        hiddenFrom="sm"
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <UnstyledButton className={classes.linksCategorias} onClick={toggleLinksCategorias}>
            <Center inline>
              <Box component="span" mr={5}>
                Edufit
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme1.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Divider my="sm" />
          <Collapse in={linksOpenedCategorias}>
            <Text className={classes.categoryTitle}>Especialidad Variada</Text>
            {linksCategorias}
            <Divider my="sm" />
            <Text className={classes.categoryTitle}>Categoria de Sintomas</Text>
            {links}
            <Divider my="sm" />
            <Text className={classes.categoryTitle}>Conoce nuestro Blog</Text>
            {linksBlog}
          </Collapse>

          <a href="/about" className={classes.link}>
            Nosotros
          </a>
          <Divider my="sm" />
          <a href="/programs" className={classes.link}>
            Servicios
          </a>
          <Divider my="sm" />

          <a href="/datasalud" className={classes.link}>
            Data-Salud
          </a>
          <Divider my="sm" />


          <Group justify="center" grow pb="xl" px="md">
          <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'green' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Registrate
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}

export default Header;