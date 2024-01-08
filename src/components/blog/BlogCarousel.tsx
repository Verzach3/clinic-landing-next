'use client'
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
} from "@mantine/core";
import classes from "./BlogCarousel.module.css";
import { BlogPost } from "../../types/BlogPost";
import Link from "next/link";

interface CardProps {
  cover_image: string;
  title: string;
  category: string;
}

function Card({ cover_image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(https://crm.caprover.wellfitclinic.com/assets/${cover_image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

export function BlogCarousel({ items }: { items: BlogPost[]}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = items.map((item) => (
    <Link href={`/blog/${item.slug}`} style={{ textDecoration: "none"}} shallow key={item.title}>
    <Carousel.Slide key={item.title}>
      <Card category="test" {...item} />
    </Carousel.Slide>
    </Link>
  ));

  if (items.length === 0) {
    return null;
  }

  return (
    <Carousel
      slideSize={{ base: "100%", sm: "50%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
