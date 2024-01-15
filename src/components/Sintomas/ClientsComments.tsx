
'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Text, Avatar, Group, Container , Title} from '@mantine/core';
import classes from './Clientscomments.module.css'; // Asegúrate de tener un archivo CSS (por ejemplo, ClientsComments.css) para los estilos personalizados.
import { Rating } from '@mantine/core'; // Importa el componente Rating de Mantine


export function ClientsComments() {
  return (

    <Container className={classes.container}>
         <Title className={classes.title}>Conoce la opinion de nuestros clientes</Title>
         
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      className={classes.commentsCarousel} // Agrega una clase CSS para los estilos generales del carrusel
      >
      {/* Comentario 1 */}
      <div className={classes.comment}>
        <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
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
          This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa
          concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has
          water spouts that protrude from its shell. The water spouts are very accurate.
        </Text>

        <Rating value={4.5} readOnly size="sm" className={classes.stars} /> {/* Añade estrellas de puntuación aquí */}
      </div>

      <div className={classes.comment}>
        <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
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
          This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa
          concocts its own honey by blending fruits and pollen collected by Beedrill. Blastoise has
          water spouts that protrude from its shell. The water spouts are very accurate.
        </Text>

        <Rating value={4.5} readOnly size="sm" className={classes.stars} /> {/* Añade estrellas de puntuación aquí */}
      </div>


      {/* Agrega más comentarios aquí */}
    </Carousel>
            </Container>
  );
}
