'use client';

import React from 'react';
import { Modal, Button, Text, Image } from '@mantine/core';
import { FaWhatsapp } from 'react-icons/fa';
import classes from './ModalMedicasa.module.css';

interface BannerRedirectionMediCasaProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

const ModalMedicasaRedirection: React.FC<BannerRedirectionMediCasaProps> = ({ opened, setOpened }) => {
  const handleRedirect = () => {
    const whatsappNumber = '+573107686345';
    const message = 'Hola, quiero más información sobre cómo obtener mi MediCasa. 🏥';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={<Text ta="center" size="xl" className={classes.title}>Redirección a WhatsApp</Text>}
      centered
      size="md"
    >
      <Text ta="center" size="lg" mb="sm">
        ¿Quieres obtener MediCasa?
      </Text>
      <Text ta="center" mb="md">
        Te vamos a redirigir a WhatsApp. Envíanos un mensaje para obtener más información y agendar tu MediCasa.
      </Text>
      <div className={classes.imageContainer}>
        <Image
          src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"
          alt="WellFit Logo"
          width={150}
        />
      </div>
      <Button className={classes.button} onClick={handleRedirect}>
        <FaWhatsapp size={20} style={{ marginRight: '10px' }} />
        Agendar MediCasa
      </Button>
    </Modal>
  );
};

export default ModalMedicasaRedirection;
