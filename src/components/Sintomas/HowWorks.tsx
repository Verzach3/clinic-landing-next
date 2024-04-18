
'use client'
import {
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
 
  } from '@mantine/core';
  
  import classes from './Howworks.module.css';
  import { RiFileList2Line, RiTeamLine  } from "react-icons/ri";
  import { FaChalkboardUser } from "react-icons/fa6";
  import { SiTestin } from "react-icons/si";
  import { MdOutlineHealthAndSafety } from "react-icons/md";
  import { FaHandHoldingMedical } from "react-icons/fa6";
  const mockdata = [
    {
      title: '  1. Responda el cuestionario',
      description:
        'Comprueba tus síntomas. Vea dónde puede necesitar un impulso. Envíe el formulario de contacto. Uno de nuestros Distribuidores Independientes de Productos con experiencia se pondrá en contacto.',
      icon: RiFileList2Line,

    },

    {
      title: '2. Valoracion Gratis',
      description:
        'Conéctese con profesionales experimentados para revisar los resultados de sus pruebas y discutir opciones que pueden ayudarlo a sentirse mejor.',
      icon: FaChalkboardUser  ,
    },
   

   
    {
        title: '3. Consulta Medica',
        description:
          'Realiza la consulta con nuestros Especialista para ayudarte a llevar la vida que deseas.',
        icon: FaHandHoldingMedical,
      },

      {
        title: '3. Pruebas científicas integrales',
        description:
          'Wellfit  y nuestro socio de laboratorio preferido ofrecen pruebas completas. Esta prueba permite personalizar los planes de bienestar según sus necesidades únicas.',
        icon: SiTestin ,
      },
  
      {
        title: '5. Equipo de conserjería dedicado',
        description:
          'Nuestros médicos y equipo de atención integral trabajan juntos para brindar la mejor atención y apoyo continuo. Están ahí para guiarlo a lo largo de su viaje de bienestar y ayudarlo a mantenerse encaminado.',
        icon: RiTeamLine,
      },
      {
        title: '6. Programa de seguimiento',
        description:
          'Una vez realizados los examenes puedes pertenecer a nuestro programa de atencion donde con nuestros profesionales te guiaremos a una mejor vida, mejoraremos tus rendimientos y tendremos trazabilidad de tu salud',
        icon: MdOutlineHealthAndSafety,
      },
  ];
  
 
  export function HowWorks() {

    const theme = useMantineTheme();
    
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));

    
    return (
      <Container size="lg" py="xl">

        <Title order={2} className={classes.title} ta="center" mt="sm">
        Mejora tu vida en Wellfit, bienestar a tu disposicion
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          En Wellfit tenemos los procesos establecidos para ayudarte a llevar la vida sana y saludable que deseas, 
          Atrevete y da el paso a una mejor vida. 
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }

  export default HowWorks;