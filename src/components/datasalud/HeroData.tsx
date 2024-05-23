'use client';
import React, { useState } from 'react';
import { Container, Title, Text, Button, Modal, LoadingOverlay } from '@mantine/core';
import classes from './HeroData.module.css';

export function HeroData() {
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

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Tu <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'green' }}>Data-Salud</Text>
            </Title>
            <Text className={classes.description} mt={30}>
              servicio de salud avanzado diseñado para compilar, analizar y utilizar historiales médicos utilizando la inteligencia artificial (IA)
            </Text>
            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'green' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={handleRegisterClick}
            >
              Registrate
            </Button>
          </div>
        </div>
      </Container>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <Text
            size="2xl"
            className={classes.modalTitle}
          
          >
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
          <Text
            size="lg"
            className={classes.modalText}
          >
            Estamos encantados de tenerte aquí. En unos momentos serás redirigido a nuestra plataforma para completar tu registro.
          </Text>
          <Text
            size="lg"
            className={classes.modalText}
          >
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

export default HeroData;