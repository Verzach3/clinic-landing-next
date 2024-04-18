import { Card, Image, ActionIcon, Group, Text, Badge, useMantineTheme, rem, Button } from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons-react';
import classes from './CardsProgramsMens.module.css';

const programsData = [
  {
    id: 1,
    title: 'Programa de Testosterona',
    image: 'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isMostPopular: true,
    description: 'Aumenta tus niveles de testosterona de manera natural y mejora tu vitalidad.',
  },
  {
    id: 2,
    title: 'Programa de Crecimiento Muscular',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isMostPopular: false,
    description: 'Potencia tu entrenamiento y desarrolla una musculatura definida.',
  },
  {
    id: 3,
    title: 'Programa de Energía y Vitalidad',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isMostPopular: false,
    description: 'Recupera tu energía y vitalidad a través de terapias naturales.',
  },
  {
    id: 4,
    title: 'Programa de Pérdida de Peso',
    image: 'https://images.unsplash.com/photo-1534258936332-50ef34622ba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isMostPopular: true,
    description: 'Logra tus metas de peso de manera saludable y sostenible.',
  },
  {
    id: 5,
    title: 'Programa de Salud Cardiovascular',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    isMostPopular: false,
    description: 'Cuida tu corazón y reduce el riesgo de enfermedades cardiovasculares.',
  },
];

function CardsProgramsMens() {
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

export default CardsProgramsMens;