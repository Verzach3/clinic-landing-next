"use client";

import { useState } from "react";
import { Button, Modal, Text } from "@mantine/core";
import Image from "next/image";
import classes from "./ClientComponent.module.css";

const ClientComponent = ({ className }: { className?: string }) => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleClick = () => {
    setModalOpened(true);
  };

  return (
    <>
      <Button
        variant="gradient"
        size="lg"
        radius="xl"
        className={`${classes.controlContac} ${className}`}
        onClick={handleClick}
      >
        Adquirir informacion
      </Button>

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Redirección a WellFit Platform"
        centered
      >
        <div className={classes.modalContent}>
          <Text ta="center" size="lg" className={classes.modalHeader}>
            ¿Tienes alguno de estos síntomas?
          </Text>
          <Text ta="center" className={classes.modalDescription}>
            Te vamos a redirigir a WellFit Platform. Realiza el registro, responde
            las encuestas y mejoraremos tu vida.
          </Text>
          <div className={classes.modalImage}>
            <Image
              src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"
              alt="WellFit Logo"
              width={200}
              height={200}
            />
          </div>
          <Button
            className={`${classes.modalButton} ${classes.modalButtonFullWidth}`}
            onClick={() =>
              (window.location.href = "https://platform.wellfitclinic.com/")
            }
          >
            Ir a la plataforma
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ClientComponent;
