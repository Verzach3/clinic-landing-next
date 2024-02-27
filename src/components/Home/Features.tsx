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
    title: "¿Te sientes fatigado?",
    description:
      "Sensación de cansancio constante, incluso después de descansar adecuadamente.",
  },
  {
    icon: GiNailedHead,
    title: "¿Problemas de concentración?",
    description:
      "Problemas para enfocar la atención o mantenerse alerta en tareas cotidianas.",
  },
  {
    icon: GiHairStrands,
    title: "¿Perdida de cabello?",
    description:
      "Reducción notable en la cantidad de cabello en el cuero cabelludo.",
  },
  {
    icon: PiSmileySadFill,
    title: "¿Ansiedad / Depresion?",
    description:
      "Sensación de nerviosismo, preocupación constante o tristeza profunda.",
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
            ¿Tienes alguno de estos sintomas?
          </Title>
          <Text className="dimmed justified">
          En WellFit Clinic, estamos aquí para resolverlo. La fatiga persistente, 
          dificultad para concentrarte, pérdida de cabello o sentimientos
          de ansiedad y depresión pueden indicar posibles desequilibrios hormonales
          o problemas de salud subyacentes.
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
