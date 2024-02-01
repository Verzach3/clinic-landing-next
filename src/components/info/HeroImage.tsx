
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Heroimage.module.css';

export function HeroImage() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
        Tratamiento de Equilibrio Hormonal con Hormonas Bioidénticas para Mujeres
          {/* <Text component="span" inherit className={classes.highlight}>
            any stack
          </Text> */}
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Recupera tu bienestar con hormonas bioidénticas personalizadas en Wellfit Clinic.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
          ¡Quiero este Plan!
          </Button>
        
        </div>
      </div>
    </div>
  );
}