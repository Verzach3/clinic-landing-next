'use client';

import React from 'react';
import { Modal, Button, Text, Image } from '@mantine/core';
import { FaWhatsapp } from 'react-icons/fa';
import classes from './ModalDatasalud.module.css';

interface ModalDataSaludRedirectionProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  isPlatformRedirect: boolean;
}

const ModalDataSaludRedirection: React.FC<ModalDataSaludRedirectionProps> = ({ opened, setOpened, isPlatformRedirect }) => {
  const handleRedirect = () => {
    if (isPlatformRedirect) {
      // Redirigir a la plataforma
      window.location.href = 'https://plataforma.datasalud.com'; // URL de la plataforma
    } else {
      // Redirigir a WhatsApp
      const whatsappNumber = '+573107686345';
      const message = 'Hola, quiero agendar cita para realizar una prueba de Data-Salud.';
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={<Text ta="center" size="xl" className={classes.title}>Redirección a {isPlatformRedirect ? 'Plataforma' : 'WhatsApp'}</Text>}
      centered
      size="md"
    >
      {isPlatformRedirect ? (
        <>
          <Text ta="center" size="lg" mb="sm">
            ¿Quieres asociar el Data-Salud a tu vida?
          </Text>
          <Text ta="center" mb="md">
            Te redirigiremos a la plataforma para que respondas las encuestas y lleves tu proceso de Data-Salud.
          </Text>
        </>
      ) : (
        <>
          <Text ta="center" size="lg" mb="sm">
            ¿Quieres agendar tu Data-Salud?
          </Text>
          <Text ta="center" mb="md">
            Te redirigiremos a WhatsApp para que agendes tu Data-Salud.
          </Text>
        </>
      )}
      <div className={classes.imageContainer}>
        <Image
          src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"
          alt="WellFit Logo"
          width={150}
        />
      </div>
      <Button className={classes.button} onClick={handleRedirect}>
        {isPlatformRedirect ? 'Redirigir a Plataforma' : (
          <>
            <FaWhatsapp size={20} style={{ marginRight: '10px' }} />
            Redirigir a WhatsApp
          </>
        )}
      </Button>
    </Modal>
  );
};

export default ModalDataSaludRedirection;
