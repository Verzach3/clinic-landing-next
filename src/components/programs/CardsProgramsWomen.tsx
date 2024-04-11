import { Card, Image, ActionIcon, Group, Text, Badge, useMantineTheme, rem , Button} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import classes from './CardsProgramsWomen.module.css';
const programsData = [
    {
      id: 1,
      title: 'Programa de Menopausia',
      image: 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      isMostPopular: true,
      description: 'Manejo efectivo de los síntomas de la menopausia y mejora de la calidad de vida.',
    },
    {
      id: 2,
      title: 'Programa de Fertilidad',
      image: 'https://images.unsplash.com/photo-1611076443832-c81b9ac6d0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      isMostPopular: false,
      description: 'Aumenta tus posibilidades de concebir a través de terapias naturales y tratamientos personalizados.',
    },
    {
      id: 3,
      title: 'Programa de Rejuvenecimiento',
      image: 'https://images.unsplash.com/photo-1598598144430-6cd44a691754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      isMostPopular: false,
      description: 'Revitaliza tu cuerpo y mente con terapias avanzadas diseñadas para rejuvenecer tu bienestar general.',
    },
    {
      id: 4,
      title: 'Programa de Belleza y Anti-Envejecimiento',
      image: 'https://images.unsplash.com/photo-1534258936332-50ef34622ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      isMostPopular: true,
      description: 'Descubre tratamientos innovadores y personalizados para realzar tu belleza y combatir los signos del envejecimiento.',
    },
    {
      id: 5,
      title: 'Programa de Salud Cardiovascular Femenina',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      isMostPopular: false,
      description: 'Enfocado en la prevención y tratamiento de enfermedades cardiovasculares en mujeres, promoviendo un corazón sano y una vida plena.',
    },
  ];
  
function CardsProgramsWomen() {
  const theme = useMantineTheme();

  return (
    <div className={classes.cardContainer}>
      {programsData.map((program) => (
        <Card key={program.id} withBorder padding="lg" radius="md" className={classes.card}>
          <Card.Section>
            <Image src={program.image} alt={program.title} height={200} />
          </Card.Section>
          <div className={classes.cardContent}>
            {program.isMostPopular && (
              <Badge w="fit-content" variant="light" className={classes.badge}>
                Más comprado
              </Badge>
            )}
            <Text fw={700} className={classes.title} mt="xs">
              {program.title}
            </Text>
            <Text fz="sm" c="dimmed" className={classes.description}>
              {program.description}
            </Text>
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} className={classes.button}>
              Adquirir programa
            </Button>
            <Card.Section className={classes.footer}>
              <Group justify="space-between">
                <Text fz="xs" c="dimmed">
                  733 people liked this
                </Text>
                <Group gap={0}>
                  <ActionIcon variant="subtle" color="gray">
                    <IconHeart style={{ width: rem(20), height: rem(20) }} color={theme.colors.red[6]} stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="gray">
                    <IconBookmark
                      style={{ width: rem(20), height: rem(20) }}
                      color={theme.colors.yellow[6]}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="subtle" color="gray">
                    <IconShare
                      style={{ width: rem(20), height: rem(20) }}
                      color={theme.colors.blue[6]}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Group>
              </Group>
            </Card.Section>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CardsProgramsWomen;