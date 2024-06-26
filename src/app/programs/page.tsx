'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Container, Title, Box, SegmentedControl, Button } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './page.module.css';
import CardsProgramsMens from "@/components/programs/CardsProgramsMens";
import CardsProgramsWomen from "@/components/programs/CardsProgramsWomen";
import Medicasa from '@/components/servicios/Medicasa';
import DataSalud from '@/components/servicios/DataSalud';
import PruebasLaboratorios from '@/components/servicios/PruebasLaboratorios';
import Footer from "@/components/Footer";

const serviceVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

function Programs() {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men');
  const [activeService, setActiveService] = useState<'medicasa' | 'dataSalud' | 'pruebasLaboratorios'>('medicasa');
  const programsRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const serviceElement = document.querySelector(hash);
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'men' | 'women');
  };

  const handleServiceChange = (value: string) => {
    setActiveService(value as 'medicasa' | 'dataSalud' | 'pruebasLaboratorios');
  };

  const handleScrollToPrograms = () => {
    if (programsRef.current) {
      programsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={classes.programs}>
      {showButton && (
        <Button
          onClick={handleScrollToPrograms}
          className={`${classes.programsButton} ${classes.hideOnMobile}`}
          variant="gradient"
          gradient={{ from: 'blue', to: 'green' }}
          size="md"
          radius="xl"
        >
          Ver Programas
        </Button>
      )}

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

      <Container className={classes.container} ref={programsRef}>
        <Title className={classes.title} order={2}>
          Nuestros Programas
        </Title>
        <Box className={classes.segmentedWrapper}>
          <SegmentedControl
            value={activeTab}
            onChange={handleTabChange}
            data={[
              { label: 'Hombres', value: 'men' },
              { label: 'Mujeres', value: 'women' },
            ]}
            className={classes.segmented}
            size="lg"
            radius="xl"
          />
        </Box>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'men' ? <CardsProgramsMens /> : <CardsProgramsWomen />}
          </motion.div>
        </AnimatePresence>
      </Container>

      <Footer />
    </div>
  );
}

export default Programs;
