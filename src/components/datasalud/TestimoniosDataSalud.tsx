'use client'
import React, { useEffect, useState } from 'react';
import { Text, SimpleGrid, Paper, Center, Group, Image, Container, rem, Title, Stack } from '@mantine/core';
import { RingProgress } from '@mantine/core';
import { IconHeartbeat, IconStethoscope, IconChartBar } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import classes from './TestimoniosDataSalud.module.css';

const estadisticas = [
  { label: 'Eficiencia en Diagnóstico', stats: '92%', progress: 92, color: 'teal', icon: IconStethoscope },
  { label: 'Mejora en Seguimiento', stats: '87%', progress: 87, color: 'blue', icon: IconHeartbeat },
  { label: 'Satisfacción del Paciente', stats: '95%', progress: 95, color: 'green', icon: IconChartBar },
];

const testimonios = [
  {
    imagen: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/TestimonioMujer.avif',
    nombre: 'María Rodríguez',
    cargo: 'Paciente',
    testimonio: 'Con DataSalud, mi historial médico está completo y actualizado. Los médicos pueden acceder fácilmente a mi información y brindarme una atención personalizada.',
  },
  {
    imagen: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/Testimonio1.avif?t=2024-05-16T17%3A16%3A54.409Z',
    nombre: 'Maicol Ledezma',
    cargo: 'Médico',
    testimonio: 'DataSalud ha mejorado significativamente la eficiencia en mi práctica médica. Puedo acceder rápidamente al historial de mis pacientes y tomar decisiones informadas.',
  },
  // Agrega más testimonios aquí
];

export function TestimoniosDataSaludSection() {
  const [progress, setProgress] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress >= Math.max(...estadisticas.map((stat) => stat.progress))) {
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const stats = estadisticas.map((stat) => (
    <Paper withBorder radius="xl" p="md" key={stat.label} className={classes.statItem}>
      <Group>
        <RingProgress
          size={100}
          roundCaps
          thickness={8}
          sections={[{ value: progress >= stat.progress ? stat.progress : progress, color: stat.color }]}
          label={
            <Center>
              <stat.icon size={rem(24)} stroke={1.5} color={stat.color} />
            </Center>
          }
        />
        <div>
          <Text size="xs" color="dimmed" tt="uppercase" fw={700}>
            {stat.label}
          </Text>
          <Text fw={700} size="xl" color={stat.color}>
            {stat.stats}
          </Text>
        </div>
      </Group>
    </Paper>
  ));

  return (
    <div className={classes.rootContainer}>
      <Container size="lg" className={classes.container}>
        <Title order={2} className={classes.title}>
          <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'green' }}>
            DataSalud
          </Text>
        </Title>
        <Text className={classes.description}>
          Nuestra plataforma recopila y organiza la información médica de manera eficiente, brindando a los profesionales de la salud acceso rápido y completo al historial clínico de sus pacientes. Esto se traduce en diagnósticos más precisos, seguimiento optimizado y una mejor atención médica.
        </Text>
        <SimpleGrid cols={isMobile ? 1 : 3} spacing="xl" mb="xl" className={classes.statGrid}>
          {stats}
        </SimpleGrid>
        {isMobile ? (
          <Stack gap="xl">
            {testimonios.map((testimonio, index) => (
              <Paper key={index} p="xl" radius="md" withBorder className={classes.testimonialItem}>
                <Stack align="center" gap="md">
                  <Image src={testimonio.imagen} alt={testimonio.nombre} radius="xl" width={120} height={120} />
                  <div>
                    <Text size="lg" className={classes.testimonialText} ta="center">
                      "{testimonio.testimonio}"
                    </Text>
                    <Text size="md" className={classes.testimonialName} ta="center">
                      {testimonio.nombre}
                    </Text>
                    <Text size="sm" className={classes.testimonialCargo} ta="center">
                      {testimonio.cargo}
                    </Text>
                  </div>
                </Stack>
              </Paper>
            ))}
          </Stack>
        ) : (
          <SimpleGrid cols={2} spacing="xl" className={classes.testimonialGrid}>
            {testimonios.map((testimonio, index) => (
              <Paper key={index} p="xl" radius="md" withBorder className={classes.testimonialItem}>
                <Group>
                  <Image src={testimonio.imagen} alt={testimonio.nombre} radius="xl" width={120} height={120} />
                  <div>
                    <Text size="lg" className={classes.testimonialText}>
                      "{testimonio.testimonio}"
                    </Text>
                    <Text size="md" className={classes.testimonialName}>
                      {testimonio.nombre}
                    </Text>
                    <Text size="sm" className={classes.testimonialCargo}>
                      {testimonio.cargo}
                    </Text>
                  </div>
                </Group>
              </Paper>
            ))}
          </SimpleGrid>
        )}
      </Container>
    </div>
  );
}

export default TestimoniosDataSaludSection;