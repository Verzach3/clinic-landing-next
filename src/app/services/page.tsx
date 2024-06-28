'use client';
import React, { useState, useEffect } from 'react';
import { Container, Title, Box, SegmentedControl } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './page.module.css';
import Medicasa from '@/components/servicios/Medicasa';
import DataSalud from '@/components/servicios/DataSalud';
import PruebasLaboratorios from '@/components/servicios/PruebasLaboratorios';
import Footer from "@/components/Footer";

const serviceVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Services() {
  const [activeService, setActiveService] = useState<'medicasa' | 'dataSalud' | 'pruebasLaboratorios'>('medicasa');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const serviceElement = document.querySelector(hash);
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleServiceChange = (value: string) => {
    setActiveService(value as 'medicasa' | 'dataSalud' | 'pruebasLaboratorios');
  };

  return (
    <div className={classes.programs}>
      <Container className={classes.container}>
        <Title className={classes.title} order={2}>
          Nuestros Servicios
        </Title>
        <Box className={classes.segmentedWrapper}>
          <SegmentedControl
            value={activeService}
            onChange={handleServiceChange}
            data={[
              { label: 'Medicasa', value: 'medicasa' },
              { label: 'DataSalud', value: 'dataSalud' },
              { label: 'Pruebas', value: 'pruebasLaboratorios' },
            ]}
            className={`${classes.segmented} ${classes.segmentedMobile}`}
            size="md"
            radius="xl"
            fullWidth
          />
        </Box>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            variants={serviceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={classes.serviceContentWrapper}
          >
            {activeService === 'medicasa' && <Medicasa />}
            {activeService === 'dataSalud' && <DataSalud />}
            {activeService === 'pruebasLaboratorios' && <PruebasLaboratorios />}
          </motion.div>
        </AnimatePresence>
      </Container>

      <Footer />
    </div>
  );
}

export default Services;