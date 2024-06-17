import { Title, Container, Text, UnstyledButton, Overlay, SimpleGrid } from '@mantine/core';
import classes from './Coments.module.css';
import { useState } from 'react';
import { RedirectionMessage } from "@/components/datasalud/RedirectionMessage";

type CategoryAction = 'platform' | 'contact' | 'services';

const categories = [
  {
    label: 'Plataforma Clinica',
    image: 'https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/wellfitclinic01.svg',
    action: 'platform',
  },
  {
    label: 'Soporte en linea',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    action: 'contact',
  },
  {
    label: 'Servicios',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    action: 'services',
  },
];

export function Coments() {
  const [modalOpened, setModalOpened] = useState(false);

  const handleCategoryClick = (action: CategoryAction) => {
    if (action === 'platform') {
      setModalOpened(true);
    } else if (action === 'services') {
      window.location.href = '/programs';
    } else if (action === 'contact') {
      const contactSection = document.querySelector('#contact-us');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleRedirect = () => {
    window.location.href = 'https://platform.wellfitclinic.com/login';
  };

  const items = categories.map((category) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      key={category.label}
      onClick={() => handleCategoryClick(category.action as CategoryAction)}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" ta="center" fw={700} className={classes.categoryLabel}>
        {category.label}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container className={classes.wrapper} size="lg">
      <div className={classes.titleContainer}>
        <Title order={1} size="h1" className={classes.title}>
          CONOCE NUESTRAS SOLUCIONES
        </Title>
      </div>
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
      <RedirectionMessage
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        onRedirect={handleRedirect}
      />
    </Container>
  );
}