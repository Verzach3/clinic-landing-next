'use client'
import { SimpleGrid, Container } from "@mantine/core";
import { ArticleCard } from "./ArticleCard";
import { BlogPost } from "@/types/BlogPost";

export function ArticlesCardsGrid({ items }: { items: BlogPost[] }) {
  const cards = items.map((article) => (
    <ArticleCard key={article.id} post={article} />
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
