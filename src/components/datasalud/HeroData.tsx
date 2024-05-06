import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroData.module.css';

export function HeroData() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Tu {' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'blue', to: 'green' }}
              >
                     Data salud 
              </Text>{' '}
         
            </Title>

            <Text className={classes.description} mt={30}>
            servicio de salud avanzado diseñado para compilar, analizar y utilizar historiales médicos utilizando la inteligencia artificial (IA)
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'blue', to: 'green' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Registrate
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroData;