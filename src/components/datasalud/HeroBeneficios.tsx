'use client';
import React from 'react';
import { Text, SimpleGrid, Container, Button, ThemeIcon, Modal, LoadingOverlay } from '@mantine/core';
import { MdBookOnline } from 'react-icons/md';
import { IconNotes, IconCrown, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import classes from './HeroBeneficios.module.css';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';

export function HeroBeneficios() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setOpened(true);
  };

  const handleRedirect = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = 'https://platform.wellfitclinic.com/';
    }, 2000);
  };

  const heroSections = [
    {
      title: 'Dile adiós a los procesos tardíos',
      description: 'DataSalud es un servicio de salud avanzado diseñado para compilar, analizar y utilizar historiales médicos utilizando inteligencia artificial (IA), optimizando la atención médica y mejorando la experiencia del paciente.',
      benefits: [
        { icon: MdBookOnline, text: 'Acceso a servicios en línea' },
        { icon: IconNotes, text: 'Datos detallados de pacientes' },
        { icon: IconCrown, text: 'Prioridad en atención' },
      ],
      backgroundImage: 'url(https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/FilasHospitales.avif?t=2024-05-08T15%3A07%3A33.371Z)',
    },
    {
      title: '¿Cómo DataSalud optimiza la atención médica?',
      description: 'Con DataSalud, puedes disfrutar de una experiencia médica más eficiente y personalizada. Nuestro sistema utiliza análisis avanzado de historiales médicos para diagnósticos precisos, asignación inteligente de citas, y recomendaciones personalizadas de tratamientos.',
      backgroundImage: 'url(https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/DoctHiro.avif?t=2024-05-08T14%3A01%3A05.774Z)',
    },
    {
      title: 'Beneficios de DataSalud para los pacientes',
      description: 'DataSalud está diseñado para mejorar la calidad de vida de los pacientes. Nuestro sistema ayuda a mejorar la continuidad de la atención médica, prevenir enfermedades y complicaciones, y reducir tiempos de espera y estrés del paciente.',
      backgroundImage: 'url(https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/HappyPacient.png?t=2024-05-08T15%3A44%3A37.848Z)',
    },
  ];

  const slides = heroSections.map((section, index) => (
    <Carousel.Slide key={index}>
      <div className={classes.slideContainer} style={{ backgroundImage: section.backgroundImage }}>
        <div className={classes.overlay}></div>
        <Container size={900} className={classes.content}>
          <Text component="h1" className={classes.title}>
            {section.title}
          </Text>
          <Text className={classes.description} mt={30}>
            {section.description}
          </Text>
          {section.benefits && (
            <SimpleGrid cols={3} mt={50}>
              {section.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className={classes.benefit}>
                  <ThemeIcon variant="light" size={50} radius="xl" className={classes.benefitIcon}>
                    <benefit.icon size={30} />
                  </ThemeIcon>
                  <Text className={classes.benefitText}>{benefit.text}</Text>
                </div>
              ))}
            </SimpleGrid>
          )}
          <Button
            onClick={handleRegister}
            size="xl"
            radius="xl"
            variant="gradient"
            gradient={{ from: 'blue', to: 'green' }}
            className={classes.control}
            mt={50}
            loading={loading}
          >
            Regístrate
          </Button>
        </Container>
      </div>
    </Carousel.Slide>
  ));

  return (
    <div className={classes.root}>
      <Carousel
        classNames={{
          root: classes.carousel,
          controls: classes.controlsContainer,
          indicator: classes.indicator,
        }}
        height="100vh"
        slideSize="100%"
        slideGap="md"
        align="start"
        slidesToScroll={1}
        loop
        withControls
        withIndicators
        onSlideChange={setActiveSlide}
        nextControlIcon={<IconArrowRight className={classes.controlIcon} />}
        previousControlIcon={<IconArrowLeft className={classes.controlIcon} />}
      >
        {slides}
      </Carousel>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text size="xl" className={classes.modalTitle} ta={"center"}>
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
          <Text size="lg" className={classes.modalText}>
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
    </div>
  );
}

export default HeroBeneficios;