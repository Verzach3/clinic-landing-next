import { Card, Image, Group, Text, Badge, useMantineTheme , Button} from '@mantine/core';
import classes from './CardsProgramsWomen.module.css';
import { motion } from 'framer-motion';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { WhatsappIcon, FacebookIcon,   XIcon } from "react-share";
import { useState } from "react";
import { RedirectionMessage } from "@/components/datasalud/RedirectionMessage";
import ModalProgramsWomens from '@/components/programs/ModalProgramsWomens'; 

const programsData = [
    {
      id: 1,
      title: 'Programa máestría Armonizada del Peso ',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/ProgramaMaximizador.avif',
      isMostPopular: true,
      description: 'Optimiza tu peso y metabolismo con un programa personalizado que integra dieta, ejercicio y regulación hormonal para mejorar tu forma física.',
    },
    {
      id: 2,
      title: 'Programa - Impulso Vital',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/ImpulsoVitak.avif',
      isMostPopular: false,
      description: 'Revitaliza tu energía y resistencia con nuestro programa para superar la fatiga y mejorar el rendimiento mediante la salud hormonal.',
    },
    
    {
      id: 3,
      title: 'Programa-Maximizador Muscular',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/MaximizadorMuscular.avif',
      isMostPopular: false,
      description: 'Potencia el crecimiento muscular, aumenta la fuerza y acelera la recuperación con nuestro programa hormonal para entusiastas del fitness y atletas',
    },
    {
      id: 4,
      title: 'Programa - Duerme Bien',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/DuermeBien.avif',
      isMostPopular: true,
      description: 'Mejora tu sueño para equilibrar hormonas y potenciar el rendimiento físico y mental, ideal para quienes sufren trastornos del sueño.',
    },
    {
      id: 5,
      title: 'Programa de Gestión del Estrés Holístico',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/ManejoEstres.avif',
      isMostPopular: false,
      description: 'Proporcionamos estrategias efectivas para manejar el estrés, optimizar el equilibrio hormonal y mejorar el bienestar general, dirigido a quienes enfrentan estrés diario',
    },
    {
      id: 6,
      title: 'Programa Nutricional ',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/ProgramaNutriciona.avif',
      isMostPopular: false,
      description: 'Mejora la salud y rendimiento masculino con estrategias nutricionales para equilibrar hormonas y optimizar testosterona mediante dietas y cambios de estilo de vida.',
    },
    {
      id: 7,
      title: 'Programa Ejercicios Personalizados',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/EjerciciosPersonalizados.avif',
      isMostPopular: false,
      description: 'Los programas de ejercicios personalizados están diseñados por expertos para adaptarse a tus necesidades específicas y maximizar resultados sin riesgos.',
    },
    {
      id: 8,
      title: 'Programa de Salud Articular y Movilidad',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/ArticularMovilidad.avif',
      isMostPopular: false,
      description: 'Ofrecemos evaluación y tratamiento para mejorar la salud articular y la movilidad, abordando dolor, rigidez y trastornos degenerativos.',
    },
    {
      id: 9,
      title: 'Programa"HidraVital Therapy',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/Hidravital.avif',
      isMostPopular: false,
      description: 'HidraVital Therapy mejora la hidratación y revitaliza el cuerpo con sueroterapia intravenosa y otras terapias, aumentando energía y bienestar general.',
    },

    {
      id: 10,
      title: 'Programa de Terapia con Péptidos',
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/PrgramsWomens/Peptidos.avif',
      isMostPopular: false,
      description: 'Utiliza BPC-157 y Timosina Beta-4 para aprovechar sus propiedades curativas, mejorar la salud física, acelerar la recuperación y potenciar el bienestar.',
    },



  ];
  
  
function CardsProgramsWomen() {
  const shareUrl = 'https://wellfitclinic.com/programs';
  const theme = useMantineTheme();
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const handleRedirect = () => {
    window.location.href = "https://platform.wellfitclinic.com/login";
  };

  const openModal = (programName: string) => {
    setSelectedProgram(programName);
    setModalOpened(true);
  };

  return (
    <div className={classes.cardContainer}>
      {programsData.map((program) => (
        <motion.div
          key={program.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={classes.cardWrapper}
        >
          <Card className={classes.card}>
            <div className={classes.imageWrapper}>
              <Image src={program.image} alt={program.title} height={200} className={classes.image} />
            </div>
            <div className={classes.cardContent}>
              {program.isMostPopular && (
                <Badge variant="light" className={classes.badge}>
                  Más comprado
                </Badge>
              )}
              <Text className={classes.title}>{program.title}</Text>
              <Text className={classes.description}>{program.description}</Text>
              <Button
                variant="gradient"
                gradient={{ from: 'pink', to: 'orange' }}
                className={classes.button}
                onClick={() => openModal(program.title)}
              >
                Adquirir programa
              </Button>
            </div>
            <div className={classes.footer}>
              <Group align="apart">
                <div className={classes.likeContainer}>
                  <Text size="sm" color="dimmed" suppressHydrationWarning />
                </div>
                <div className={classes.shareContainer}>
                  <FacebookShareButton url={shareUrl} title={program.title}>
                    <FacebookIcon size={25} round />
                  </FacebookShareButton>
                  <TwitterShareButton url={shareUrl} title={program.title}>
                    <XIcon size={25} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={shareUrl} title={program.title}>
                    <WhatsappIcon size={25} round />
                  </WhatsappShareButton>
                </div>
              </Group>
            </div>
          </Card>
        </motion.div>
      ))}

      {selectedProgram && (
        <ModalProgramsWomens
          opened={modalOpened}
          onClose={() => setModalOpened(false)}
          onRedirect={handleRedirect}
          programName={selectedProgram}
        />
      )}
    </div>
  );
}

export default CardsProgramsWomen;