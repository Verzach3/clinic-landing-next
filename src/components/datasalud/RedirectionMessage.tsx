import React, { useState } from 'react';
import { Text, Modal, Button, LoadingOverlay } from '@mantine/core';
import classes from './RedirectionMessage.module.css';

interface RedirectionMessageProps {
  opened: boolean;
  onClose: () => void;
  onRedirect: () => void;
}

export function RedirectionMessage({ opened, onClose, onRedirect }: RedirectionMessageProps) {
  const [loading, setLoading] = useState(false);

  const handleRedirect = () => {
    setLoading(true);
    setTimeout(() => {
      onRedirect();
    }, 2000);
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
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
        <Text size="lg" className={classes.modalText}  >
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
  );
}