'use client';
import React from 'react';
import { Container, Title, SimpleGrid, Paper, Text } from '@mantine/core';
import classes from './Services.module.css';

const servicesData = [
  {
    id: 1,
    title: 'Consultas Médicas',
    description: 'Ofrecemos consultas médicas personalizadas con nuestros expertos para evaluar tu estado de salud y recibir un plan de acción personalizado.',
  },
  {
    id: 2,
    title: 'Pruebas de Laboratorio',
    description: 'Realizamos una amplia gama de pruebas de laboratorio para detectar desequilibrios hormonales, deficiencias nutricionales y otras afecciones.',
  },
  {
    id: 3,
    title: 'Terapias Integrativas',
    description: 'Combinamos terapias naturales y convencionales para brindar un enfoque integral y holístico en el manejo de tu salud.',
  },
  {
    id: 4,
    title: 'Programas Nutricionales',
    description: 'Nuestros nutricionistas desarrollan planes nutricionales personalizados para ayudarte a alcanzar tus metas de salud y bienestar.',
  },
];

export function Services() {
  return (
    <Container className={classes.container}>
      <Title className={classes.title} order={2}>
        Nuestros Servicios
      </Title>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
        {servicesData.map((service) => (
          <Paper key={service.id} shadow="md" p="xl" radius="md" className={classes.serviceCard}>
            <Title order={3} className={classes.serviceTitle}>
              {service.title}
            </Title>
            <Text className={classes.description}>{service.description}</Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  );
}