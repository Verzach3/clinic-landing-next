import { Text, SimpleGrid, Container, Title } from '@mantine/core';
import classes from './FeatureData.module.css';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  title: string;
  description: string;
}

function Feature({ image, title, description, className, ...others }: FeatureProps) {
  return (
    <div className={`${classes.feature} ${className}`} {...others}>
      <div className={classes.content}>
        <div className={classes.overlay} />
        <img src={image} alt={title} className={classes.icon} />
        <Text fw={700} fz="lg" mb="xs" mt={15} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm" className={classes.description}>
          {description}
        </Text>
      </div>
    </div>
  );
}

export function FeatureData() {
  const items = [
    {
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/AnalisisExhaustivo.avif',
      title: '1. Recopilación y Análisis Exhaustivo de Datos',
      description: 'Recopilar toda la documentación médica disponible, incluyendo notas de visitas anteriores',
    },
    {
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/InteracionPaciente.avif',
      title: '3.Interacción con el Paciente y Generación de Conocimientos',
      description: 'Basado en el análisis preliminar, identificar las secciones o áreas de los datos médicos que requieren un análisis más profundo',
    },
    {
      image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/DataSalud/Compilacion.avif',
      title: '4. Compilación y Presentación de Resultados',
      description: 'Basado en el análisis preliminar, identificar las secciones o áreas de los datos médicos que requieren un análisis más profundo',
    },
  ];

  return (
    <Container mt={30} mb={30} size="lg">
      <div className={classes.sectionHeader}>
        <Text component="span" inherit variant="gradient" gradient={{ from: 'blue', to: 'green' }} className={classes.title}>
          Data salud
        </Text>{' '}
        <Text component="span" inherit className={classes.subtitle}>
          Como trabajamos
        </Text>
      </div>
      <Text ta="center" size="xl" mb={40}>
        Pasos para llevar tu Diagnostico y Data-Salud
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items.map((item) => (
          <Feature
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}