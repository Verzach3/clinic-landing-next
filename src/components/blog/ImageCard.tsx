"use client";
import { Card, Text, Group, useMantineTheme } from "@mantine/core";
import classes from "./ImageCard.module.css";
import { BlogPost } from "@/types/BlogPost";
import { useRouter } from "next/navigation";

export function ImageCard({ post }: { post: BlogPost }) {
  const router = useRouter();
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      target="_blank"
      onClick={() => router.push(`/blog/${post.slug}`)}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            "url(https://crm.caprover.wellfitclinic.com/assets/" +
            post.cover_image +
            ")",
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {post.title}
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              Robert Gluesticker
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}
