'use client';

import React from 'react';
import { Modal, Button, Text, Image } from '@mantine/core';
import { FaWhatsapp } from 'react-icons/fa';
import classes from './ModalLaboratorios.module.css';

interface BannerRedirectionMediCasaProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  exam: string; // Add exam prop to pass the selected exam name
  isGeneralInquiry: boolean; // Add prop to determine if it is a general inquiry
}

const ModalLaboratoriosRedirection: React.FC<BannerRedirectionMediCasaProps> = ({ opened, setOpened, exam, isGeneralInquiry }) => {
  const handleRedirect = () => {
    const whatsappNumber = '+573107686345';
    const message = isGeneralInquiry ? 'Hola, quiero agendar cita para realizar una prueba.' : `Hola, quiero más información sobre cómo obtener mi prueba de ${exam}. 🏥`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  // Function to truncate text if it's too long
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={<Text ta="center" size="xl" className={classes.title}>Redirección a WhatsApp</Text>}
      centered
      size="md"
    >
      {isGeneralInquiry ? (
        <Text ta="center" size="lg" mb="sm">
          ¿Quieres realizarte otra prueba en particular? Te vamos a redirigir a WhatsApp para que agendes una cita y te realicemos tus exámenes.
        </Text>
      ) : (
        <>
          <Text ta="center" size="lg" mb="sm">
            ¿Quieres obtener información sobre <span className={classes.highlight}>{truncateText(exam, 25)}</span>?
          </Text>
          <Text ta="center" mb="md">
            Te vamos a redirigir a WhatsApp. Envíanos un mensaje para obtener más información y agendar tu <span className={classes.highlight}>{truncateText(exam, 25)}</span>.
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
        <FaWhatsapp size={20} style={{ marginRight: '10px' }} />
        {isGeneralInquiry ? 'Agendar Prueba' : `Agendar ${truncateText(exam, 25)}`}
      </Button>
    </Modal>
  );
};

export default ModalLaboratoriosRedirection;
