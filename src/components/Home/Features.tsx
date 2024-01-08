'use client'

import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  rem,
} from "@mantine/core";
import classes from "./Features.module.css";
import { GiNailedHead, GiPersonInBed, GiHairStrands } from "react-icons/gi";
import { PiSmileySadFill } from "react-icons/pi";

const features = [
  {
    icon: GiPersonInBed,
    title: "Te sientes fatigado?",
    description:
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: GiNailedHead,
    title: "Problemas de concentración?",
    description:
      "Build type safe applications, all components and hooks export types",
  },
  {
    icon: GiHairStrands,
    title: "Perdida de cabello?",
    description:
      "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
  },
  {
    icon: PiSmileySadFill,
    title: "Ansiedad / Depresion?",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
];

export function Features() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            Tienes alguno de estos sintomas?
          </Title>
          <Text c="dimmed">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
            quibusdam quas similique eligendi! Nam harum deleniti neque nemo,
            asperiores, ex, non ullam consectetur odio illum totam cumque.
            Voluptas, quibusdam dolore!
          </Text>

          <Button
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Contactanos
          </Button>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
