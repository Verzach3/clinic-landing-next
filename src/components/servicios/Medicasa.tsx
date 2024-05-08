'use client';
import React from 'react';
import { Title, Text, List, ThemeIcon, Image, Button } from '@mantine/core';
import { motion } from 'framer-motion';
import classes from './MediCasa.module.css';
import  ManageScroll  from "@/components/servicios/ManageScroll";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaHandHoldingMedical } from "react-icons/fa6";
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

const Medicasa = () => {
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
            <span className={classes.highlight}>MediCasa: </span> ¡Atención Médica Domiciliaria para tu Bienestar!
            </Title>
          </motion.div>
        </div>
        <div className={classes.sectionContent}>
          <motion.div variants={itemVariants} className={classes.contentBlock}>
            <Text className={classes.subtitle} size="lg">
              ¿Qué es MediCasa?
            </Text>
            <Text className={classes.description}>
            MediCasa Salud Integral es un programa avanzado de atención médica domiciliaria que proporciona servicios médicos, 
            terapéuticos y de apoyo en el hogar del paciente. Nuestro enfoque se basa en combinar <span className={classes.highlight}>
              atención personalizada </span>   con acceso directo a             <span className={classes.highlight}>profesionales de la salud</span>, 

            para garantizar que cada paciente reciba el cuidado necesario en el ambiente más cómodo posible:
            <span className={classes.highlight}> su propio hogar.</span> 
            </Text>
 
              <motion.div variants={itemVariants}>
                <Image
                  src="https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/Services/AtencionMedica.avif"
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
                <ThemeIcon color="blue" size={28} radius="xl">
                  <FaHandHoldingMedical size={19} strokeWidth={2} />
                </ThemeIcon>
              }
            >
              <motion.div variants={itemVariants}>
              
                  <Text className={classes.listItem}>
          
                  En WelfitClinics tenemos los mejores Médicos especializados quienes  visitan a los pacientes en sus 
                  hogares para evaluaciones y tratamientos regulares, abarcando:

              
                  </Text>
                  <br></br>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Consultas Médicas en el Hogar: </span> 
                    Nuestros enfermeros brindan cuidados especializados en el hogar,
                     incluyendo administración de medicamentos y educación para el autocuidado.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Gestión de Medicamentos: </span>
                    Aseguramos una gestión efectiva de la medicación, incluyendo la entrega y educación sobre su uso.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Seguimiento de Enfermedades Crónicas: </span> 
                    Coordinamos el manejo de condiciones crónicas para optimizar los resultados de salud y prevenir complicaciones.
                  </Text>
                </List.Item>
              </motion.div>
            </List>
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
            Beneficios de MediCasa Salud Integral
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
                <ThemeIcon color="blue" size={28} radius="xl">
                  <FaHouseMedicalFlag size={19} strokeWidth={2} />
                </ThemeIcon>
            
              }
            >
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Atención Personalizada: </span> 
                    Cuidado médico adaptado a las necesidades y prioridades individuales de cada paciente en su hogar.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Comodidad y Privacidad:</span> 
                    Recibir tratamiento en el hogar elimina la necesidad de traslados frecuentes a hospitales o clínicas.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Mejores Resultados de Salud:</span> 
                    La atención en el hogar puede mejorar la recuperación y los resultados de salud a largo plazo.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Mejores Resultados de Salud:</span> 
                    La atención en el hogar puede mejorar la recuperación y los resultados de salud a largo plazo.
                  </Text>
                </List.Item>
              </motion.div>
            </List>
          </motion.div>

          <motion.div variants={itemVariants} className={classes.contentBlock}>
            <Text className={classes.subtitle} size="lg" >
              Beneficios para Tu Salud
            </Text>
            <List
              className={classes.list}
              icon={
                <ThemeIcon color="blue" size={28} radius="xl">
                  <MdOutlineHealthAndSafety size={19} strokeWidth={0} />
                </ThemeIcon>
              }
            >
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Prevención y Manejo Temprano de Condiciones</span> El seguimiento continuo permite identificar y 
                    gestionar condiciones de salud desde etapas tempranas, 
                    reduciendo la posibilidad de complicaciones graves.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Optimización del Tratamientos: </span>  El seguimiento personalizado y la atención en el hogar permiten 
                    ajustes más precisos y oportunos en los tratamientos, 
                    lo que puede conducir a una mejora más rápida y efectiva del estado de salud.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Reducción de Reingresos Hospitalarios: </span> La atención continua y detallada en el hogar ayuda a 
                    prevenir reingresos hospitalarios, 
                    ofreciendo un cuidado más estable y consistente.
                  </Text>
                </List.Item>
              </motion.div>
              <motion.div variants={itemVariants}>
                <List.Item>
                  <Text className={classes.listItem}>
                    <span className={classes.highlight}>Mejora de la Calidad de Vida :</span> Al permitir que los pacientes permanezcan en su entorno familiar, 
                    se reduce el estrés y se promueve una recuperación más confortable y efectiva
                  </Text>
                </List.Item>
              </motion.div>
            </List>

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
            Únete a MediCasa Salud Integral
            </Title>
          </motion.div>
        </div>
        <div className={classes.sectionContentDat}>
          <motion.div variants={itemVariants} className={classes.contentBlockUnete}>
            <Text className={classes.description}>
              En WellFit Clinic y con MediCasa, nos comprometemos a mejorar tu salud y bienestar proporcionándote la mejor atención médica en la comodidad de tu hogar.
               Al inscribirte en MediCasa Salud Integral, te beneficiarás de un enfoque holístico y centrado en el paciente que transformará tu experiencia de cuidado de salud.
            </Text>
            <Text className={classes.description}>
            <span className={classes.highlight}>No esperes más para transformar tu cuidado médico</span>
       . Contáctanos hoy mismo para obtener más información y registrarte en nuestro servicio innovador. Estamos aquí para ayudarte a vivir una vida más saludable y plena.
            </Text>
            <Button
              className={classes.button}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              size="lg"
              radius="xl"
            >
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </motion.div>

      
    </div>
  );
};

export default Medicasa;