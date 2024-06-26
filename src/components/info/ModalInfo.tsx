'use client';

import { useState } from "react";
import { Modal, Button, Text, Image } from "@mantine/core";
import classes from "./ModalInfo.module.css";

const ModalInfo = ({ postName }: { postName: string }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleButtonClick = () => {
    setModalOpened(true);
  };

  const handleModalClose = () => {
    setModalOpened(false);
  };

  const handleRedirect = () => {
    window.location.href = "https://platform.wellfitclinic.com/login";
  };

  return (
    <>
      <Button variant="white" size="lg" onClick={handleButtonClick}>
        ¡Quiero este Plan!
      </Button>
      <Modal
        opened={modalOpened}
        onClose={handleModalClose}
        title={<Text ta="center" size="xl" className={classes.title}>Redirección a la Plataforma</Text>}
        centered
        size="md"
        className={classes.modal}
      >
        <Text ta="center" size="lg" mb="sm" className={classes.message}>
          ¿Quieres asociar el programa <span className={classes.programName}>{postName}</span> a tu vida? Te redirigiremos a la plataforma para que respondas las encuestas y lleves tu proceso de Data Salud.
        </Text>
        <div className={classes.imageContainer}>
          <Image
            src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"
            alt="WellFit Logo"
            width={150}
          />
        </div>
        <Button className={classes.button} onClick={handleRedirect}>
          Redirigir a la Plataforma
        </Button>
      </Modal>
    </>
  );
};

export default ModalInfo;
