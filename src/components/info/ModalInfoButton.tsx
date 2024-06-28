import { useState } from 'react';
import { Button, Modal, Text, Image } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './ModalButtonInfo.module.css';

const ModalInfoButton = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleButtonClick = () => {
    setModalOpened(true);
  };

  const handleModalClose = () => {
    setModalOpened(false);
  };

  const handleRedirect = () => {
    window.location.href = 'https://platform.wellfitclinic.com/login';
  };

  return (
    <>
      <Button
        className={classes.infoButton}
        onClick={handleButtonClick}
        leftSection={<IconHeart size={20} />}
      >
        Evaluar mi Salud
      </Button>

      <Modal
        opened={modalOpened}
        onClose={handleModalClose}
        title={<Text ta="center" size="xl" className={classes.title}>Evaluar tu Salud</Text>}
        centered
        size="md"
        className={classes.modal}
      >
        <Text ta="center" size="lg" mb="sm" className={classes.message}>
          ¿Quieres tener una mejor vida y conocer tu estado de salud? Contesta nuestras encuestas y lleva tu proceso de Data Salud.
        </Text>
        <div className={classes.imageContainer}>
          <Image
            src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"
            alt="WellFit Logo"
            width={150}
          />
        </div>
        <Button className={classes.redirectButton} onClick={handleRedirect}>
          Redirigir a la Plataforma
        </Button>
      </Modal>
    </>
  );
};

export default ModalInfoButton;
