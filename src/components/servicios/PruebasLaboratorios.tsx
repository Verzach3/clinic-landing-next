'use client';
import React, { useState } from 'react';
import { Container, Title, Text, Divider, Table, ScrollArea, TextInput, rem, List, ThemeIcon, Button } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import classes from './PruebasLaboratorios.module.css';
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import  ManageScroll  from "@/components/servicios/ManageScroll";

interface RowData {
  exam: string;
  category: string;
  purpose: string;
}

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

const data: RowData[] = [
  { 
    exam: "T.S.H. (TIROTROPINA) Ultrasensible", 
    category: "Función Tiroidea", 
    purpose: "Mide el nivel de la hormona estimulante de la tiroides (TSH) en la sangre."
  },
  { 
    exam: "T4 LIBRE (TIROXINA LIBRE) Ultrasensible", 
    category: "Función Tiroidea", 
    purpose: "Mide el nivel de tiroxina libre (T4) en la sangre."
  },
  { 
    exam: "T3 LIBRE (TRIYODOTIRONINA LIBRE) Ultrasensible", 
    category: "Función Tiroidea", 
    purpose: "Mide el nivel de triyodotironina libre (T3) en la sangre."
  },
  { 
    exam: "INSULINA (CADA MUESTRA)", 
    category: "Función Endocrina", 
    purpose: "Mide el nivel de insulina en cada muestra de sangre."
  },
  { 
    exam: "INSULINA LIBRE", 
    category: "Función Endocrina", 
    purpose: "Mide el nivel de insulina libre en la sangre."
  },
  {
    exam: "INSULINA PRE Y POST CON CARGA",
    category: "Función Endocrina",
    purpose: "Mide los niveles de insulina antes y después de una carga de glucosa. Evalua la respuesta del cuerpo al desafío de glucosa y detectar resistencia a la insulina o insulina alterada"
  },
  {
    exam: "INSULINA PRE Y POST PRANDIAL",
    category: "Función Endocrina",
    purpose: "Mide los niveles de insulina antes y después de una comida. Este examen ayuda a evaluar la respuesta de insulina del cuerpo a la ingesta de alimentos"
  },
  {
    exam: "CORTISOL AM",
    category: "Función Adrenal",
    purpose: "Mide el nivel de cortisol en la sangre por la mañana. El cortisol es una hormona producida por las glándulas suprarrenales que ayuda a regular la respuesta al estrés, el metabolismo y la función inmunológica."
  },
  {
    exam: "CORTISOL AM - PM (2 MUESTRAS)",
    category: "Función Adrenal",
    purpose: "Mide los niveles de cortisol por la mañana y por la tarde/noche (2 muestras). Este examen ayuda a evaluar la variación diurna de la secreción de cortisol y puede detectar anomalías en la producción de cortisol."
  },
  {
    exam: "CORTISOL EN ORINA 24 HORAS",
    category: "Función Endocrina",
    purpose: "Mide la cantidad de cortisol excretado en la orina durante un período de 24 horas. Ayuda a diagnosticar trastornos como el síndrome de Cushing o la insuficiencia suprarrenal."
  },
  {
    exam: "GLOBULINA TRANSPORTADORA DE LA HORMONA SEXUAL HUMANA",
    category: "Función Adrenal",
    purpose: "Mide el nivel de globulina transportadora de hormonas sexuales (SHBG) en la sangre. La SHBG es una proteína que se une y transporta hormonas sexuales, como la testosterona y el estradiol"
  },
  {
    exam: "TESTOSTERONA LIBRE",
    category: "Función Endocrina",
    purpose: "Mide el nivel de testosterona libre en la sangre"
  },
  {
    exam: "TESTOSTERONA TOTAL",
    category: "Función Endocrina",
    purpose: "Mide el nivel total de testosterona en la sangre, incluyendo tanto la testosterona libre como la unida a proteínas."
  },
  {
    exam: "PERFIL COMPLETO DE LÍPIDOS",
    category: "Perfil de Lípidos",
    purpose: "Un panel completo que incluye mediciones de colesterol total, colesterol de lipoproteínas de alta densidad (HDL), colesterol de lipoproteínas de baja densidad (LDL) y triglicéridos"
  },
  {
    exam: "HORMONA LUTEINIZANTE (LH)",
    category: "Función Reproductiva",
    purpose: "Mide el nivel de hormona luteinizante (LH) en la sangre. La LH es producida por la glándula pituitaria."
  },
  {
    exam: "HORMONA ESTIMULANTE DEL FOLÍCULO (FSH)",
    category: "Función Reproductiva",
    purpose: "Mide el nivel de hormona folículo-estimulante (FSH) en la sangre. La FSH es producida por la glándula pituitaria y estimula el crecimiento y desarrollo de los folículos en los ovarios (en mujeres) y la producción de espermatozoides en los testículos (en hombres)."
  },
  {
    exam: "ESTRADIOL (E2)",
    category: "Función Reproductiva",
    purpose: "Mide el nivel de estradiol (E2) en la sangre. El estradiol es una forma de estrógeno, una hormona sexual."
  },
  {
    exam: "ESTRADIOL PM",
    category: "Función Reproductiva",
    purpose: "Mide el nivel de estradiol en la sangre por la tarde/noche (post meridiem). Ayuda a evaluar la función ovárica"
  },
  {
    exam: "PROGESTERONA",
    category: "Función Reproductiva",
    purpose: "Mide el nivel de progesterona en la sangre. La progesterona es una hormona sexual femenina."
  },
  {
    exam: "HEMOGLOBINA GLICOSILADA)",
    category: "Manejo de la Diabetes",
    purpose: "Mide el porcentaje de hemoglobina glucosilada (HbA1c) en la sangre. La HbA1c refleja el nivel promedio de azúcar en la sangre."
  },
  {
    exam: "ESTRADIOL (E2)",
    category: "Función Reproductiva",
    purpose: "Mide el nivel de estradiol (E2) en la sangre. El estradiol es una forma de estrógeno, una hormona sexual."
  }
];



const PruebasLaboratorios = () => {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const filterData = (data: RowData[], search: string) => {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
      Object.values(item).some((value) => value.toString().toLowerCase().includes(query))
    );
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(filterData(data, value));
  };

  return (
    <div className={classes.container}>
        <ManageScroll/>

      <motion.div
        className={classes.sectionContainer}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className={classes.sectionHeader}>
          <Title className={classes.title} order={1}>
            Algunos procedimientos diagnósticos
          </Title>
        </div>
        <div className={classes.sectionContent}>
          <Text size="lg" mb="md" >
            En WellFit Clinic, ofrecemos una amplia gama de exámenes para mantener control sobre el estado y bienestar de nuestros pacientes.
          </Text>
        </div>
        <Divider my="lg" />
        <motion.div className={classes.tableContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className={classes.searchContainer}>
            <TextInput
              placeholder="Buscar por cualquier campo"
              leftSection={<IconSearch size={16} style={{ width: rem(16), height: rem(16) }} />}
              rightSection={
                search.length > 0 && (
                  <IconX
                    onClick={() => setSearch('')}
                    size={16}
                    style={{ width: rem(16), height: rem(16), cursor: 'pointer' }}
                  />
                )
              }
              value={search}
              onChange={handleSearchChange}
              className={classes.searchInput}
            />
          </div>
          <ScrollArea
            h={500}
            w="100%"
            style={{ maxHeight: '500px' }}
            type="always"
            scrollbarSize={8}
          >
            <Table className={classes.table}>
              <thead className={classes.tableHeader}>
                <tr>
                  <th>Examen</th>
                  <th>Categoría</th>
                  <th>Para Qué Sirve</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item, index) => (
                  <tr key={index} className={classes.tableRow}>
                    <td>{item.exam}</td>
                    <td>{item.category}</td>
                    <td>{item.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ScrollArea>
        </motion.div>
      </motion.div>

      <motion.div
        className={classes.sectionContainer}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={classes.sectionHeader}>
          <Title className={classes.title} order={2}>
            Beneficios de Realizar Pruebas de Laboratorio
          </Title>
        </div>
        <div className={classes.sectionContent}>
          <motion.div variants={itemVariants} className={classes.benefitsContainer}>
            <div className={classes.benefitsItem}>
              <div className={classes.benefitsIcon}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <ThemeIcon color="blue" size={60} radius="xl">
                    <FaHouseMedicalFlag size={32} strokeWidth={2} />
                  </ThemeIcon>
                </motion.div>
              </div>
              <Text className={classes.subtitle} size="lg">
                Manténgase Saludable y Prevenga Problemas
              </Text>
              <Text className={classes.description}>
                Al realizar exámenes de laboratorio regulares, puede detectar problemas de salud en etapas tempranas y tomar medidas proactivas para mantener su bienestar. Estas pruebas pueden ayudar a identificar condiciones como problemas tiroideos, diabetes, alteraciones en los niveles de colesterol y más, permitiéndole a usted y a su médico actuar a tiempo.
              </Text>
            </div>
            <div className={classes.benefitsItem}>
              <div className={classes.benefitsIcon}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <ThemeIcon color="blue" size={60} radius="xl">
                    <MdOutlineHealthAndSafety size={32} strokeWidth={0} />
                  </ThemeIcon>
                </motion.div>
              </div>
              <Text className={classes.subtitle} size="lg">
                Optimice su Tratamiento y Recuperación
              </Text>
              <Text className={classes.description}>
                Los resultados de las pruebas de laboratorio proporcionan información valiosa que permite a los médicos ajustar con precisión los tratamientos y terapias. Esto puede acelerar y mejorar su proceso de recuperación, evitando complicaciones y asegurando un óptimo cuidado de su salud.
              </Text>
            </div>
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
          <Title className={classes.title} order={2}>
            Contáctanos para Programar tus Pruebas de Laboratorio
          </Title>
        </div>
        <div className={classes.sectionContentDat}>
          <motion.div variants={itemVariants} className={classes.contactBlock}>
            <Text className={classes.description}>
              En WellFit Clinic, estamos comprometidos a brindar un servicio integral y de alta calidad para cuidar de tu salud. Al programar tus pruebas de laboratorio, te garantizamos un proceso sencillo y eficiente, con resultados precisos que te ayudarán a mantener un control exhaustivo de tu bienestar.
            </Text>
            <Text className={classes.description}>
              ¡No esperes más para tomar el control de tu salud! Comunícate con nosotros y agenda tu cita para realizar tus exámenes de laboratorio. Nuestro equipo de expertos está listo para atenderte y brindarte el mejor cuidado médico posible. ¡Contáctanos ahora mismo!
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

export default PruebasLaboratorios;