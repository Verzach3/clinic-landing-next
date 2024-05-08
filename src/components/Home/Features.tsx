import { Title, SimpleGrid, Text, Button, ThemeIcon, Container, Grid, rem, Divider, Paper } from "@mantine/core";
import classes from "./Features.module.css";
import { GiNailedHead, GiPersonInBed, GiHairStrands } from "react-icons/gi";
import { PiSneakerMoveFill } from "react-icons/pi";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: GiPersonInBed,
    title: "1. Responda nuestro cuestionario",
    description: "Comience su viaje hacia un bienestar óptimo completando nuestro cuestionario inicial. Este paso crucial nos permite comprender mejor sus necesidades individuales y diseñar un plan personalizado para mejorar su salud y calidad de vida.",
  },
  {
    icon: GiNailedHead,
    title: "2. Consulta Gratis",
    description: "Aproveche nuestra oferta de consulta gratuita y discuta abiertamente sus inquietudes de salud con nuestros expertos. Durante esta sesión, recibirá una evaluación inicial de su estado de salud y recomendaciones sobre cómo podemos ayudarlo a alcanzar sus objetivos de bienestar.",
  },
  {
    icon: GiHairStrands,
    title: "3. Consulta con el profesional",
    description: "Dedique tiempo a una consulta individual con nuestros profesionales en bienestar. Esta sesión le brinda la oportunidad de profundizar en sus preocupaciones de salud, recibir orientación especializada y establecer objetivos realistas para mejorar su bienestar general.",
  },
  {
    icon: PiSneakerMoveFill,
    title: "Cita Medica- Informe Detallado",
    description: "Reserve una cita médica completa y detallada con nuestro equipo médico. Durante esta consulta exhaustiva, recibirá un análisis completo de su salud, incluido un informe detallado que aborda sus inquietudes específicas.",
  },
];

export function Features() {
  const words = [ "En cuatro pasos !"];
  const el = useRef<HTMLSpanElement>(null);
  const sleepTime = 100;
  const pauseTime = 1000;
  const currWordIndex = useRef(0);

  const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

  const typewriterEffect = async () => {
    while (true) {
      const currWord = words[currWordIndex.current];
      for (let i = 0; i < currWord.length; i++) {
        if (el.current) {
          el.current.textContent = currWord.substring(0, i + 1);
        }
        await sleep(sleepTime);
      }
      await sleep(pauseTime);
      for (let i = currWord.length; i > 0; i--) {
        if (el.current) {
          el.current.textContent = currWord.substring(0, i - 1);
        }
        await sleep(sleepTime);
      }
      currWordIndex.current = (currWordIndex.current + 1) % words.length;
    }
  };

  useEffect(() => {
    void typewriterEffect();
  }, []);

  const items = features.map((feature) => (
    <Paper key={feature.title} shadow="md" p="xl" radius="md" className={classes.featureItem}>
      <ThemeIcon size={60} radius="md" variant="gradient" gradient={{ deg: 133, from: "blue", to: "cyan" }}>
        <feature.icon style={{ width: rem(40), height: rem(40) }} />
      </ThemeIcon>
      <Divider className={classes.iconDivider} />
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm" className={classes.justified}>
        {feature.description}
      </Text>
    </Paper>
  ));

  return (
    <div className={classes.featuresBackground}>
      <Container size="xl" className={classes.wrapper}>
        <Grid gutter={80}>
          <Grid.Col span={12}>
            <Title className={classes.title} order={2}>
              Mejora Tu Vida{" "}
              <span ref={el} className={classes.typedText} />
            </Title>
            <Divider className={classes.titleDivider} />
            <SimpleGrid cols={{ base: 1, sm: 1, lg: 2 }} spacing="xl">
              {items}
            </SimpleGrid>
            <div className={classes.buttonWrapper}>
              <Button variant="gradient"      gradient={{ from: 'blue', to: 'green' }} size="lg" radius="md">
                Inicia Tu Cambio
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
