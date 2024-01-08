"use client";
import { Card, Text, Group, useMantineTheme } from "@mantine/core";
import classes from "./ImageCard.module.css";
import { BlogPost } from "@/types/BlogPost";

export function ImageCard({ post }: { post: BlogPost }) {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      target="_blank"
      href={"/blog/" + post.slug}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            "url(https://crm.caprover.wellfitclinic.com/assets/" + post.cover_image + ")",
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
{/* 
            <Group gap="lg">
              <Center>
                <IconEye
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  7847
                </Text>
              </Center>
              <Center>
                <IconMessageCircle
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  5
                </Text>
              </Center>
            </Group> */}
          </Group>
        </div>
      </div>
    </Card>
  );
}
