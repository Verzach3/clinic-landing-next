'use client'
import { Card, Group, Text, Avatar, Badge } from "@mantine/core";
import classes from "./ArticleCard.module.css";
import { BlogPost } from "../../types/BlogPost";
import Image from "next/image";
export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image
          src={`https://crm.caprover.wellfitclinic.com/assets/${post.cover_image}`}
          alt={`${post.title}`}
          height={180}
          unoptimized
        />
      </Card.Section>

      <Badge w="fit-content" variant="light">
        decorations
      </Badge>

      <Text fw={700} className={classes.title} mt="xs">
        {post.title}
      </Text>

      <Group mt="lg">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
          radius="sm"
        />
        <div>
          <Text fw={500}>Elsa Gardenowl</Text>
          <Text fz="xs" c="dimmed">
            posted 34 minutes ago
          </Text>
        </div>
      </Group>
    </Card>
  );
}
