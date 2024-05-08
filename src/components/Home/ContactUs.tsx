import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core';
import { RiTwitterXLine } from "react-icons/ri";
import { IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactUs.module.css';

const social = [RiTwitterXLine , IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem"/>
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper} >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
        <div>
          <Title className={classes.title}>Contactanos</Title>
          <Text className={classes.description} mt="sm" mb={30} style={{ textAlign: 'left' }}>
         Deja tu correo electronico y nuestro equipo Wellfit se contactará contigo en menos de 24 horas. 
          </Text>

          <ContactIconsList />

          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            label="Email"
            placeholder="TuEmail@email.com"
            required
            mt="lg"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label="Nombre"
            placeholder="Tu nombre"
            mt="lg"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label="Motivo de consulta"
            placeholder="Descripcion del problema o consulta"
            minRows={7}
            mt="xl"
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group justify="flex-end" mt="md">
            <Button     gradient={{ from: 'blue', to: 'green' }} className={classes.control}>Enviar</Button>
          </Group>
        </div>
      </SimpleGrid>
      
    </div>
  );
}