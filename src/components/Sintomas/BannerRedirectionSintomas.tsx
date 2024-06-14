'use client';

import React from 'react';
import { Modal, Button, Text, Image } from '@mantine/core';

interface BannerRedirectionSintomasProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

const BannerRedirectionSintomas: React.FC<BannerRedirectionSintomasProps> = ({ opened, setOpened }) => {
  const handleRedirect = () => {
    window.location.href = 'https://platform.wellfitclinic.com/';
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Redirección a WellFit Platform"
      centered
      size="lg"
    >
      <Text ta="center" size="lg" mb="md">
        ¿Tienes alguno de estos síntomas?
      </Text>
      <Text ta="center" mb="md">
        Te vamos a redirigir a WellFit Platform. Realiza el registro, responde las encuestas y mejoraremos tu vida.
      </Text>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Image
          src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg"
          alt="WellFit Logo"
          width={200}
        />
      </div>
      <Button fullWidth onClick={handleRedirect}>
        Ir a la plataforma
      </Button>
    </Modal>
  );
};

export default BannerRedirectionSintomas;
