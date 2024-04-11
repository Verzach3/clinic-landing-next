'use client';
import React, { useState } from 'react';
import { Container, Title, Text, Button, Paper, SegmentedControl, Box } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './page.module.css';
import CardsProgramsMens from "@/components/programs/CardsProgramsMens";
import CardsProgramsWomen from "@/components/programs/CardsProgramsWomen";

function Programs() {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men');

  const handleTabChange = (value: string) => {
    setActiveTab(value as 'men' | 'women');
  };

  return (
    <div className={classes.programs}>
      <Container className={classes.container}>
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
    </div>
  );
}

export default Programs;