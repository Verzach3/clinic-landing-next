"use client";
import {Card, Text, Group, useMantineTheme} from "@mantine/core";
import classes from "./ImageCard.module.css";
import {BlogPost} from "@/types/BlogPost";
import {useRouter} from "next/navigation";
import {Database} from "@/types/database.types";

export function ImageCard({post}: { post: Database["public"]["Tables"]["blog_posts"]["Row"] }) {
  const router = useRouter();
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      target="_blank"
      onClick={() => router.push(`/blog/${post.Slug}`)}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            "url(https://crm.caprover.wellfitclinic.com/assets/" +
            post["Cover Image"] +
            ")",
        }}
      />
      <div className={classes.overlay}/>

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {post["Blog Name"]}
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
