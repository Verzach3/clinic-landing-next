'use client';
import React from 'react';
import { Container, Title, Text, Button, Paper } from '@mantine/core';
import { Image } from '@mantine/core';
import { IconRobotFace, IconBookmarkPlus, IconRobot, IconBookUpload } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './Service.module.css';

export function Services() {
  return (
    <div className={classes.services}>
      <div className={classes.titleContainer}>
        <Title className={classes.sectionTitle} order={1}>
          Nuestros Servicios
        </Title>

      </div>

      <Container className={classes.container}>
        <div className={classes.content}>
          {/* Pruebas de Laboratorio y Otras Evaluaciones */}
          <motion.div
            className={classes.serviceItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper shadow="md" p="xl" radius="md" className={classes.textContent}>
              <IconRobotFace size={48} className={classes.icon} />
              <Title className={classes.title} order={2}>
                Pruebas de Laboratorio y Otras Evaluaciones.
              </Title>
              <div className={classes.divider}></div>
              <Text className={classes.description}>
                En Wellfit Ofrecemos Pruebas de laboratorio para estudiar tu condición de vida
              </Text>
              <ul className={classes.list}>
                <li>Niveles de Cortisol</li>
                <li>Hormonas Sexuales</li>
                <li>Nivel de Vitamina D</li>
                <li>Niveles de Vitaminas del Complejo B</li>
                <li>Prueba de DHEA-Sulfato</li>
                <li>Ácidos Grasos Omega-3</li>
                <li>Panel Metabólico Integral (CMP)</li>
                <li>Marcadores Inflamatorios</li>
              </ul>
              <Text className={classes.footer}>
                Para consultar la lista completa de afecciones que tratamos, haga clic aquí.
              </Text>
              <Button variant="gradient" gradient={{ from: 'blue', to: 'green' }} size="lg" radius="xl" >
                Contactanos
              </Button>
            </Paper>
            <div className={classes.imageWrapper}>
              <Image
                src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/MedicinaCasa.avif?t=2024-04-08T14%3A31%3A29.722Z"
                alt="Pruebas Laboratorios"
                className={classes.image}
              />
            </div>
          </motion.div>

          {/* MediCasa Salud Integral */}
          <motion.div
            className={classes.serviceItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={classes.imageWrapper}>
              <Image
                src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/Services/Medicasa.avif"
                alt="Medicasa"
                className={classes.image}
              />
            </div>
            <Paper shadow="md" p="xl" radius="md" className={classes.textContent}>
              <IconBookmarkPlus size={48} className={classes.icon} />
              <Title className={classes.title} order={2}>
                MediCasa Salud Integral
              </Title>
              <div className={classes.divider}></div>
              <Text className={classes.description}>
                En Wellfit Ofrecemos Servicio de medicina en casa, Estamos contigo en todo momento.
              </Text>
              <ul className={classes.list}>
                <li>Consultas Médicas en el Hogar </li>
                <li>Cuidado de Enfermería</li>
                <li>Terapia Física y Ocupacional</li>
                <li>Seguimiento de Enfermedades Crónicas</li>
                <li>Gestión de Medicamentos</li>
                <li>Coordinación de Atención</li>
              </ul>
              <Text className={classes.footer}>
                Para consultar la lista completa de afecciones que tratamos, haga clic aquí.
              </Text>
              <Button variant="gradient" gradient={{ from: 'blue', to: 'green' }} size="lg" radius="xl" >
                Contactanos
              </Button>
            </Paper>
          </motion.div>

          {/* DataSalud Integral AI */}
          <motion.div
            className={classes.serviceItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paper shadow="md" p="xl" radius="md" className={classes.textContent}>
              
            <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 15, -15, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <IconRobot size={48} className={classes.icon} />
    </motion.div>
        
              <Title className={classes.title} order={2}> 
                DataSalud Integral AI
              </Title>
              <div className={classes.divider}></div>
              <Text className={classes.description}>
                En Wellfit Ofrecemos Integración de IA en la Atención al Paciente.
              </Text>
              <Text className={classes.description}>
                Nuestro servicio, centrado en Colombia, está a la vanguardia de esta transformación, ofreciendo un
                enfoque revolucionario para la gestión de la información del paciente.
              </Text>
              <ul className={classes.list}>
                <li>Cuidado Coordinado:</li>
                <li>Acceso a Información Integral</li>
                <li>Cuidado Coordinado</li>
              </ul>
              <Text className={classes.footer}>Únete a DataSalud Integral, haga clic aquí.</Text>
              <Button variant="gradient" gradient={{ from: 'blue', to: 'green' }} size="lg" radius="xl" >
                Contactanos
              </Button>
            </Paper>
            <div className={classes.imageWrapper}>
              <Image
                src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/Atencion.avif?t=2024-04-08T16%3A44%3A24.780Z"
                alt="Atención urgente"
                className={classes.image}
              />
            </div>
          </motion.div>

          {/* Talleres de Educación sobre Salud y Hormonas */}
          <motion.div
            className={classes.serviceItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={classes.imageWrapper}>
              <Image
                src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/Services/Talleres.avif"
                alt="TalleresHormonales"
                className={classes.image}
              />
            </div>
            <Paper shadow="md" p="xl" radius="md" className={classes.textContent}>
              <IconBookUpload size={48} className={classes.icon} />
              <Title className={classes.title} order={2}>
                Talleres de Educación sobre Salud y Hormonas:
              </Title>
              <div className={classes.divider}></div>
              <Text className={classes.description}>
                En Wellfit Ofrecemos talleres de educación sobre salud y hormonas, educándote sobre tu cuerpo y lo que te
                compone.
              </Text>
              <ul className={classes.list}>
                <li>Importancia de la Salud Hormonal</li>
                <li>Efectos del Desequilibrio Hormonal</li>
                <li>Rendimiento de las Hormonas</li>
                <li>medidas Preventivas</li>
              </ul>
              <Text className={classes.footer}>
                Conoce sobre tu salud Hormonal, haga clic aquí.
              </Text>
              <Button variant="gradient" gradient={{ from: 'blue', to: 'green' }} size="lg" radius="xl" >
                Contactanos
              </Button>
            </Paper>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}