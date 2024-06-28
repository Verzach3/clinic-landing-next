'use client';
import React, { useState } from 'react';
import { Container, Title, Box, SegmentedControl, Text } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './page.module.css';
import CardsProgramsMens from "@/components/programs/CardsProgramsMens";
import CardsProgramsWomen from "@/components/programs/CardsProgramsWomen";
import Footer from "@/components/Footer";

function Programs() {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men');

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'men' | 'women');
  };

  return (
    <motion.div 
      className={classes.programs}
      animate={{ 
        backgroundImage: activeTab === 'men' 
          ? 'linear-gradient(135deg, #1a5eb6e3, #69bff1)'
          : 'linear-gradient(135deg, #FF69B4, #FFB6C1)'
      }}
      transition={{ duration: 0.5 }}
    >
      <Container className={classes.container}>
      <Title className={classes.title} order={2}>
            Nuestros Programas
          </Title>
          <Text className={classes.subtitle}>
            Descubre el programa perfecto para ti
          </Text>
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
    </motion.div>
  );
}

export default Programs;