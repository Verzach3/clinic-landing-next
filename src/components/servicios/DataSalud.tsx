'use client';
import React, { useState } from 'react';
import { Title, Text, List, ThemeIcon, Image, Button } from '@mantine/core';
import { IconArrowRight, IconArrowRotaryFirstRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './DataSalud.module.css';
import ManageScroll from "@/components/servicios/ManageScroll";
import { RiRobot2Line } from "react-icons/ri";
import ModalDataSaludRedirection from './ModalDataSaludRedirection';

const sectionVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const DataSalud = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [isPlatformRedirect, setIsPlatformRedirect] = useState(false);

  const handlePlatformRedirectClick = () => {
    setIsPlatformRedirect(true);
    setModalOpened(true);
  };

  const handleWhatsAppRedirectClick = () => {
    setIsPlatformRedirect(false);
    setModalOpened(true);
  };

  return (
    <div className={classes.container}>
      <ManageScroll/>
      <motion.div
        className={classes.sectionContainer}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={classes.sectionHeader}>
          <motion.div variants={itemVariants}>
            <Title className={classes.title} order={2}>
              Revolucionando el Cuidado del Paciente con Análisis Integral de Datos de Salud
            </Title>
          </motion.div>
        </div>
        <div className={classes.sectionContent}>
          <motion.div variants={itemVariants} className={classes.contentBlock}>
            <Text className={classes.subtitle} size="lg">
              ¿Qué es DataSalud Integral?
            </Text>
            <Text className={classes.description}>
              DataSalud Intergal es un servicio de salud avanzado diseñado para compilar, 
              analizar y utilizar historiales médicos utilizando la inteligencia artificial (IA) más avanzada.
               Nuestro objetivo es proporcionar un perfil médico más completo y preciso que ayude tanto a pacientes
                como a proveedores de salud a tomar decisiones informadas y proactivas sobre el cuidado de la salud.
            </Text>
 
              <motion.div variants={itemVariants}>
                <Image
                  src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/Services/DataSalud.avif"
                  alt="DataSalud"
                  className={classes.image}
                  radius="md"
                />
              </motion.div>
   
          </motion.div>
          
          <motion.div variants={itemVariants} className={classes.contentBlock}>
            <Text className={classes.subtitle} size="lg">
              ¿Cómo Funciona?
            </Text>
            <List
              className={classes.list}
              icon={
                <ThemeIcon color="blue" size={29} radius="xl">
                  <RiRobot2Line size={19} strokeWidth={2} />
                </ThemeIcon>
              }
            >
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Compilación de Datos Médicos: </span> 
                    Recopilamos toda la documentación médica, incluyendo notas de visitas anteriores y registros de especialistas,
                     para crear un historial médico integral.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Entrevistas Guiadas por IA: </span> 
                    Nos sentamos con cada paciente y, a través de preguntas generadas por nuestra IA,
                     profundizamos en su historial para descubrir información crucial que a menudo no se recoge en las consultas estándar.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Análisis Avanzado: </span>
                     Utilizamos algoritmos de IA para analizar los datos recopilados y las respuestas del paciente, 
                     obteniendo insights detallados y recomendaciones personalizadas.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Recomendaciones de IA: </span> 
                    Nuestro sistema proporciona sugerencias sobre pruebas y tratamientos que podrían ser necesarios, 
                    basándose en el análisis exhaustivo de los datos.
                  </Text>
                </List.Item>
              </motion.div>
            </List>
            <Button
              className={classes.button}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              size="lg"
              radius="xl"
              onClick={handlePlatformRedirectClick}
            >
              Quiero Data-Salud
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={classes.sectionContainer}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={classes.sectionHeader}>
          <motion.div variants={itemVariants}>
            <Title className={classes.title} order={2}>
              Beneficios
            </Title>
          </motion.div>
        </div>

        <div className={classes.sectionContent}>
          <motion.div variants={itemVariants} className={classes.contentBlock}>
            <Text className={classes.subtitle} size="lg">
              Beneficios para Pacientes
            </Text>
            <List
              className={classes.list}
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconArrowRight size={16} strokeWidth={2} />
                </ThemeIcon>
              }
            >
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Visión Completa de la Salud:</span> Obtén un entendimiento más
                     profundo de tu salud con un perfil que integra toda tu historia médica.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Atención Personalizada:</span> Las recomendaciones basadas en IA se 
                    adaptan específicamente a tus necesidades, promoviendo una atención más enfocada y efectiva.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Prevención Proactiva:</span> Identifica posibles problemas de salud antes de
                     que se conviertan en condiciones serias.
                  </Text>
                </List.Item>
              </motion.div>
            </List>
          </motion.div>

          <motion.div variants={itemVariants} className={classes.contentBlock}>
            <Text className={classes.subtitle} size="lg" >
              Beneficios para Proveedores de Salud
            </Text>
            <List
              className={classes.list}
              icon={
                <ThemeIcon color="blue" size={24} radius="xl">
                  <IconArrowRotaryFirstRight size={16} strokeWidth={2} />
                </ThemeIcon>
              }
            >
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Acceso a Información Integral:</span> Facilita un acceso rápido y completo
                     a los historiales médicos de los pacientes, mejorando la eficiencia del diagnóstico y el tratamiento.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Soporte de Decisiones:</span> Las herramientas de análisis de IA ofrecen insights 
                    valiosos que ayudan en la toma de decisiones clínicas.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Cuidado Coordinado:</span> Mejora la colaboración entre diversos especialistas al proporcionar
                     un historial unificado que todos pueden consultar.
                  </Text>
                </List.Item>
              </motion.div>
            </List>
            <Button
              className={classes.button}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              size="lg"
              radius="xl"
              onClick={handlePlatformRedirectClick}
            >
              Quiero Data-Salud
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={classes.sectionContainer}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={classes.sectionHeader}>
          <motion.div variants={itemVariants}>
            <Title className={classes.title} order={2}>
              Únete a DataSalud Intergal en WellFit Clinic
            </Title>
          </motion.div>
        </div>
        <div className={classes.sectionContentDat}>
          <motion.div variants={itemVariants} className={classes.contentBlockUnete}>
            <Text className={classes.description}>
              En WellFit Clinic, estamos comprometidos a proporcionar una atención integral y avanzada para mejorar tu salud y bienestar. Al unirte a DataSalud Intergal, tendrás acceso a una revolucionaria forma de cuidado del paciente, donde la inteligencia artificial y el análisis de datos se combinan para ofrecerte una visión completa y personalizada de tu salud.
            </Text>
            <Text className={classes.description}>
              ¡No esperes más para tomar el control de tu salud! Únete a DataSalud Intergal en WellFit Clinic y comienza tu viaje hacia una vida más saludable y plena. Contáctanos hoy mismo para más información y para registrarte en nuestro servicio. Estamos aquí para ayudarte a alcanzar tu mejor versión.
            </Text>
            <Button
              className={classes.button}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              size="lg"
              radius="xl"
              onClick={handleWhatsAppRedirectClick}
            >
              Agenda Data-Salud
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <ModalDataSaludRedirection opened={modalOpened} setOpened={setModalOpened} isPlatformRedirect={isPlatformRedirect} />
    </div>
  );
};

export default DataSalud;
