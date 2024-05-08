'use client';
import React from 'react';
import { Text, SimpleGrid, Container, Button, ThemeIcon } from '@mantine/core';

import { MdBookOnline } from 'react-icons/md';
import { IconNotes, IconCrown, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import classes from './HeroBeneficios.module.css';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';

export function HeroBeneficios() {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroSections = [
    {
      title: 'Dile adiós a los procesos tardíos',
      description: 'Servicio de salud avanzado diseñado para compilar, analizar y utilizar historiales médicos utilizando la inteligencia artificial (IA)',
      benefits: [
        { icon: MdBookOnline, text: 'Acceso a servicios en línea' },
        { icon: IconNotes, text: 'Datos detallados de pacientes' },
        { icon: IconCrown, text: 'Prioridad en atención y registros médicos' },
      ],
      backgroundImage: 'url(https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/FilasHospitales.avif?t=2024-05-08T15%3A07%3A33.371Z)',
    },
    {
      title: '¿Cómo DataSalud optimiza la atención médica?',
      description: 'Con DataSalud, puedes disfrutar de una experiencia médica más eficiente y personalizada.',
      questions: [
        'Análisis avanzado de historiales médicos para diagnósticos más precisos.',
        'Asignación inteligente de citas y priorización de casos urgentes.',
        'Recomendaciones personalizadas de tratamientos y medicamentos.',
      ],
      backgroundImage: 'url(https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/DoctHiro.avif?t=2024-05-08T14%3A01%3A05.774Z)',
    },
    {
      title: '¿Qué beneficios ofrece DataSalud a los pacientes?',
      description: 'DataSalud está diseñado para mejorar la calidad de vida de los pacientes.',
      questions: [
        '¿Cómo DataSalud puede mejorar la continuidad de la atención médica?',
        '¿Cómo DataSalud puede ayudar a prevenir enfermedades y complicaciones?',
        '¿Cómo DataSalud puede reducir los tiempos de espera y el estrés del paciente?',
      ],
      backgroundImage: 'url(https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/HappyPacient.png?t=2024-05-08T15%3A44%3A37.848Z)',
    },
  ];
  
  const slides = heroSections.map((section, index) => (
    <Carousel.Slide key={index}>
      <div className={classes.slideContainer} style={{ backgroundImage: section.backgroundImage }}>
        <div className={classes.content}>
          <Text component="h2" className={classes.title}>
            {section.title}
          </Text>
          <Text className={classes.description} mt={30}>
            {section.description}
          </Text>
          {section.benefits && (
            <SimpleGrid cols={3} mt={30} spacing="xl">
              {section.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className={classes.iconWrapper}>
                  <ThemeIcon variant="gradient" size={64}>
                    <benefit.icon size={40} />
                  </ThemeIcon>
                  <Text mt={10} className={classes.iconText}>
                    {benefit.text}
                  </Text>
                </div>
              ))}
            </SimpleGrid>
          )}
          {section.questions && (
            <div className={classes.questionsWrapper}>
              {section.questions.map((question, questionIndex) => (
                <Text key={questionIndex} className={classes.question}>
                  {question}
                </Text>
              ))}
            </div>
          )}
          <Button variant="gradient" gradient={{ from: 'blue', to: 'green' }} size="xl" className={classes.control} mt={40}>
            Regístrate
          </Button>
        </div>
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
    </div>
  );
}

export default HeroBeneficios;