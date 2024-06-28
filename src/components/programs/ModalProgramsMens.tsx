import React from 'react';
import { Modal, Button, Text, Image, useMantineTheme } from '@mantine/core';
import classes from './ModalProgramsMens.module.css';

interface ModalProgramsMensProps {
  opened: boolean;
  onClose: () => void;
  onRedirect: () => void;
  programName: string;
}

const ModalProgramsMens: React.FC<ModalProgramsMensProps> = ({ opened, onClose, onRedirect, programName }) => {
  const theme = useMantineTheme();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Redirección a la plataforma"
      centered
      classNames={{ title: classes.modalTitle }}
    >
      <div className={classes.modalContent}>
        <Image
          src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"
          alt="WellFit Clinic"
          width={150}
          className={classes.logo}
        />
        <Text ta="center" size="lg" className={classes.modalText}>
          ¿Quieres asociar el programa <span className={classes.highlight}>{programName}</span> a tu vida?
          Te redirigiremos a la plataforma para que respondas las encuestas y lleves tu proceso de Data Salud.
        </Text>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          onClick={onRedirect}
          fullWidth
          mt="md"
          size="md"
          className={classes.redirectButton}
        >
          Redirigir a la plataforma
        </Button>
      </div>
    </Modal>
  );
};

export default ModalProgramsMens;
