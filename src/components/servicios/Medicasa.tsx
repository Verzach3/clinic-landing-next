import React from 'react';
import { Container, Title, Text, List, ThemeIcon, Image, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './MediCasa.module.css';

const listItems = [
  'Resfriados y gripes comunes',
  'Infecciones del tracto respiratorio',
  'Infecciones de la piel',
  'Dolor de garganta y fiebre',
  'Lesiones menores y accidentes domésticos',
];

function Medicasa() {
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} shadow="md" p="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title className={classes.title} order={2}>
            ¡Atención Médica Domiciliaria para tu Bienestar!
          </Title>
          <Text className={classes.description}>
            ¿Necesitas atención médica de forma inmediata y sin tener que salir de casa? ¡Nosotros te lo brindamos! Nuestro equipo especializado en medicina general está aquí para atender tus necesidades de salud con la máxima comodidad y eficacia.
          </Text>
          <Text className={classes.description}>
            Utilizando la última tecnología médica y pruebas rápidas, estamos capacitados para diagnosticar y tratar una amplia gama de enfermedades, lesiones y condiciones médicas. Algunas de las condiciones que atendemos incluyen, pero no se limitan a:
          </Text>
          <List
            className={classes.list}
            icon={
              <ThemeIcon color="blue" size={24} radius="xl">
                <IconCheck size={16} />
              </ThemeIcon>
            }
          >
            {listItems.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/Services/AtencionMedica.avif"
            alt="Atención médica domiciliaria"
            className={classes.image}
          />
        </motion.div>
      </Paper>
    </Container>
  );
}

export default Medicasa;