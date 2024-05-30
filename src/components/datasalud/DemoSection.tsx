'use client'
import React, { useState } from 'react';
import { Text, Button, Container, Modal, Loader } from '@mantine/core';
import { FaSearch, FaExpandArrowsAlt } from 'react-icons/fa';
import { useMediaQuery } from '@mantine/hooks';
import classes from './DemoSection.module.css';

export function DemoSection() {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handlePreview = () => {
    setLoading(true);
    setTimeout(() => {
      setOpened(true);
      setLoading(false);
    }, 1000);
  };

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.2);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 0.2);
    }
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.content}>
          <Text component="h2" className={classes.title}>
            Recopilamos tu Data, <br /> Mejoramos tu Historia Clínica
          </Text>
          <Text className={classes.description}>
            En DataSalud, nos enfocamos en recopilar y analizar tu información médica para generar una historia clínica completa y precisa que optimice tu atención médica. Nuestro formato estandarizado y fácil de leer permite a los profesionales de la salud acceder rápidamente a tus antecedentes médicos, alergias, medicamentos y tratamientos, lo que mejora la eficiencia y la calidad de la atención.
          </Text>
        </div>
        <div className={classes.previewContainer}>
          <div className={classes.previewImageContainer}>
            <img
              src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/Preview.avif?t=2024-05-10T17%3A40%3A08.297Z"
              alt="Imagen de DataSalud"
              className={classes.previewImage}
            />
            <Button
              variant="filled"
              color="blue"
              size="lg"
              className={classes.previewButton}
              onClick={handlePreview}
            >
              <FaSearch style={{ marginRight: '8px' }} />
              Previsualizar Historia Clínica
            </Button>
          </div>
        </div>
      </Container>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered={!isMobile}
        className={classes.modal}
        fullScreen={isMobile}
        styles={{
          inner: {
            height: '100%',
            overflow: 'auto',
          },
        }}
      >
        {loading ? (
          <Loader size="xl" />
        ) : (
          <div className={classes.modalContent}>
            <div className={classes.zoomControls}>
              <Button
                variant="outline"
                color="blue"
                size="md"
                className={classes.zoomButton}
                onClick={handleZoomOut}
              >
                <FaSearch style={{ transform: 'rotate(-45deg)' }} />
              </Button>
              <Button
                variant="outline"
                color="blue"
                size="md"
                className={classes.zoomButton}
                onClick={handleZoomIn}
              >
                <FaExpandArrowsAlt />
              </Button>
            </div>
            <iframe
              src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/Juanito%20Arango%20.pdf?t=2024-05-14T14%3A59%3A28.242Z"
              className={classes.modalPage}
              title="Historia Clínica"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: 'top left',
              }}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export default DemoSection;