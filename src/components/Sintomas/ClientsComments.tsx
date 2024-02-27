'use client'
import React, {useRef} from 'react';
import {Text, Avatar, Group, Container, Title} from '@mantine/core';
import classes from './Clientscomments.module.css';
import {Rating} from '@mantine/core';
import {Carousel} from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ClientsComments() {
  const autoplay = useRef(Autoplay({delay: 2000}));
  return (
    <Container className={classes.container}>
      <Title className={classes.title}>Conoce la opinion de nuestros clientes</Title>
      <Carousel

        align="start"
        loop
        withControls={false}
        style={{
          width: "100%",
          maxWidth: "100%",
          margin: "auto",
          padding: "0 20px",
        }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide className={classes.comment}>
          <Group>
            <Avatar
              src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/CommensUser.png.avif"
              alt="Cristian Ramirez"
              radius="xl"
            />
            <div>
              <Text size="sm">Cristian Ramirez</Text>

            </div>
          </Group>

          <Text pl={54} pt="sm" size="sm">
            He visto su landing y servicios... De verdad que me encuentro impresionada.
            Nadie ha pensado tanto en la salud y bienestar de los usuarios. De lo poco que he leído,
            he visto muy buena formación en los programas que brinda. ¡Qué bien por Wellfit! ¡Espero que abran para
            agendar mi cita!.
          </Text>

          <Rating value={4.5} readOnly size="sm" className={classes.stars}/>
        </Carousel.Slide>
        <Carousel.Slide className={classes.comment}>
          <Group>
            <Avatar
              src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/CommensUser2.png.avif"
              alt="Jacob Warnhalter"
              radius="xl"
            />
            <div>
              <Text size="sm">Jacob Warnhalter</Text>
              <Text size="xs" c="dimmed">
                10 minutes ago
              </Text>
            </div>
          </Group>

          <Text pl={54} pt="sm" size="sm">
            Después de explorar su landing y los servicios que ofrecen, no puedo evitar estar asombrada.
            Es evidente que han puesto mucho esfuerzo en cuidar la salud y el bienestar de los usuarios.
            La calidad de los programas que brindan es impresionante. ¡Kudos a Wellfit!
            ¡Espero con entusiasmo la apertura para poder reservar mi cita!
          </Text>

          <Rating value={4.5} readOnly size="sm" className={classes.stars}/>
        </Carousel.Slide>

        <Carousel.Slide className={classes.comment}>
          <Group>
            <Avatar
              src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/CommensUser2.png.avif"
              alt="Juan Rodríguez"
              radius="xl"
            />
            <div>
              <Text size="sm">Juan Rodríguez</Text>
              <Text size="xs" c="dimmed">
                10 minutes ago
              </Text>
            </div>
          </Group>

          <Text pl={54} pt="sm" size="sm">
            Después de explorar su landing y los servicios que ofrecen, no puedo evitar estar asombrada.
            Es evidente que han puesto mucho esfuerzo en cuidar la salud y el bienestar de los usuarios.
            La calidad de los programas que brindan es impresionante. ¡Un abrazo Wellfit!
            ¡Espero con entusiasmo la apertura para poder reservar mi cita!
          </Text>

          <Rating value={4.5} readOnly size="sm" className={classes.stars}/>
        </Carousel.Slide>

      </Carousel>
    </Container>
  );
}
