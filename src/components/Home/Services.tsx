'use client';
import React from 'react';
import { Container, Title, Text, Button } from '@mantine/core';
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
          <div className={classes.textContent}>
            <Title className={classes.title}>
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
              style={{
                justifySelf: "right",
              }}
              className={classes.control}
              onClick={() => {
                const contactUsSection = document.getElementById("contact-us");
                if (contactUsSection) {
                  contactUsSection.scrollIntoView({ behavior: "smooth" });
                }
              } }
            >
              Contactanos
            </Button>
          </div>
        </div>
      </Container>
      <Container className={classes.container}>
        <div className={classes.content}>
          <div className={classes.textContent}>
            <Title className={classes.title}>
              Atencion medica en casa
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
              style={{
                justifySelf: "right",
              }}
              className={classes.control}
              onClick={() => {
                const contactUsSection = document.getElementById("contact-us");
                if (contactUsSection) {
                  contactUsSection.scrollIntoView({ behavior: "smooth" });
                }
              } }
            >
              Contactanos
            </Button>
          </div>
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