'use client';
import React from 'react';
import { Container, Title, Text, Button, Paper } from '@mantine/core';
import { Image } from '@mantine/core';
import classes from './Service.module.css';

export function Services() {
  return (
    <div className={classes.services}>
      <Container className={classes.container}>
        <div className={classes.content}>
          <div className={classes.imageWrapper}>
            <Image
              src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/MedicinaCasa.avif?t=2024-04-08T14%3A31%3A29.722Z"
              alt="Atención urgente"
              className={classes.image}
            />
          </div>
          <Paper shadow="md" p="xl" radius="md" className={classes.textContent}>
            <Title className={classes.title} order={2}>
              Atención urgente, pruebas y diagnósticos rápidos
            </Title>
            <div className={classes.divider}></div>
            <Text className={classes.description}>
              En Wellfit Ofrecemos servicio de atención domiciliaria, utiliza la última tecnología médica para
              diagnosticar enfermedades, infecciones, lesiones y más, entre otros servicios tenemos:
            </Text>
            <ul className={classes.list}>
              <li>Enfermedades de Base</li>
              <li>Seguimiento Medico</li>
              <li>Programas para mejorar tu estilo de vida</li>
            </ul>
            <Text className={classes.footer}>
              Para consultar la lista completa de afecciones que tratamos, haga clic aquí.
            </Text>
            <Button
              variant="gradient"
              size="lg"
              radius="xl"
              className={classes.button}
              onClick={() => {
                const contactUsSection = document.getElementById("contact-us");
                if (contactUsSection) {
                  contactUsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contactanos
            </Button>
          </Paper>
        </div>
      </Container>
      <Container className={classes.container}>
        <div className={classes.content}>
          <Paper shadow="md" p="xl" radius="md" className={classes.textContent}>
            <Title className={classes.title} order={2}>
              Atención médica en casa
            </Title>
            <div className={classes.divider}></div>
            <Text className={classes.description}>
              En Wellfit Ofrecemos servicio de atención domiciliaria, utiliza la última tecnología médica para
              diagnosticar enfermedades, infecciones, lesiones y más, entre otros servicios tenemos:
            </Text>
            <ul className={classes.list}>
              <li>Enfermedades de Base</li>
              <li>Seguimiento Medico</li>
              <li>Programas para mejorar tu estilo de vida</li>
            </ul>
            <Text className={classes.footer}>
              Para consultar la lista completa de afecciones que tratamos, haga clic aquí.
            </Text>
            <Button
              variant="gradient"
              size="lg"
              radius="xl"
              className={classes.button}
              onClick={() => {
                const contactUsSection = document.getElementById("contact-us");
                if (contactUsSection) {
                  contactUsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contactanos
            </Button>
          </Paper>
          <div className={classes.imageWrapperRight}>
            <Image
              src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/Atencion.avif?t=2024-04-08T16%3A44%3A24.780Z"
              alt="Atención urgente"
              className={classes.image}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}