'use client';
import React, { useState } from 'react';
import { Text, SimpleGrid, Container, Button, ThemeIcon, Modal, LoadingOverlay } from '@mantine/core';
import classes from './FeatureData.module.css';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  title: string;
  description: string;
}

function Feature({ image, title, description, className, ...others }: FeatureProps) {
  return (
    <div className={`${classes.feature} ${className}`} {...others}>
      <div className={classes.content}>
        <img src={image} alt={title} className={classes.icon} />
        <Text fw={700} fz="xl" mb="xs" mt={25} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="md" className={classes.description}>
          {description}
        </Text>
      </div>
    </div>
  );
}

export function FeatureData() {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegisterClick = () => {
    setOpened(true);
  };

  const handleRedirect = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = 'https://platform.wellfitclinic.com';
    }, 2000);
  };

  const items = [
    {
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/AnalisisExhaustivo.avif',
      title: 'Recopilación y Análisis Exhaustivo de Datos',
      description: 'Recopilamos toda la documentación médica disponible, incluyendo notas de visitas anteriores, para obtener una visión completa de la salud del paciente.',
    },
    {
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/InteracionPaciente.avif',
      title: 'Interacción con el Paciente y Generación de Conocimientos',
      description: 'Nos comunicamos directamente con el paciente para obtener información adicional y generar conocimientos valiosos sobre su estado de salud.',
    },
    {
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/Compilacion.avif',
      title: 'Compilación y Presentación de Resultados',
      description: 'Compilamos todos los hallazgos y resultados en un informe completo y fácil de entender, que se presenta al paciente y al equipo médico.',
    },
  ];

  return (
    <Container mt={80} mb={80} size="lg">
      <div className={classes.sectionHeader}>
        <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'green' }} className={classes.title}>
          Data-Salud
        </Text>{' '}
        <Text component="span" inherit className={classes.subtitle}>
          Transformando la Salud con Datos
        </Text>{' '}
      </div>
      <Text ta="center" size="xl" mb={60} mt={20}>
        <Text component="span" inherit variant="gradient" gradient={{ from: 'teal', to: 'lime' }} className={classes.highlight}>
          Cómo Trabajamos
        </Text>{' '}
        - Nuestro Proceso en 3 Pasos
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items.map((item, index) => (
          <Feature key={item.title} image={item.image} title={`${index + 1}. ${item.title}`} description={item.description} />
        ))}
      </SimpleGrid>
      <div className={classes.ctaContainer}>
        <Text ta="center" size="xl" mb={30}>
          Descubre cómo nuestra plataforma puede{' '}
          <Text component="span" inherit variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} className={classes.highlight}>
            transformar
          </Text>{' '}
          la forma en que manejas los datos de salud
        </Text>
        <Button
          variant="gradient"
          gradient={{ from: 'blue', to: 'green' }}
          size="xl"
          radius="xl"
          onClick={handleRegisterClick}
        >
          Regístrate Ahora
        </Button>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text size="2xl" className={classes.modalTitle} >
            ¡Bienvenido a WellfitClinic!
          </Text>
        }
        centered
        size="lg"
        padding="xl"
        className={classes.modal}
      
      >
        <LoadingOverlay visible={loading} />
        <div className={classes.modalContent}>
          <Text size="lg" className={classes.modalText} >
            Estamos encantados de tenerte aquí. En unos momentos serás redirigido a nuestra plataforma para completar tu registro.
          </Text>
          <Text size="lg" className={classes.modalText}>
            Prepárate para una experiencia de salud única y personalizada con DataSalud.
          </Text>
          <Button
            variant="gradient"
            gradient={{ from: 'blue', to: 'green' }}
            size="md"
            radius="xl"
            className={classes.modalButton}
            onClick={handleRedirect}
            loading={loading}
          >
            Ir a la plataforma
          </Button>
        </div>
      </Modal>
    </Container>
  );
}