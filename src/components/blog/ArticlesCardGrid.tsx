'use client'
import { SimpleGrid, Container } from "@mantine/core";
import { ArticleCard } from "./ArticleCard";
import { BlogPost } from "@/types/BlogPost";
import { useMediaQuery } from '@mantine/hooks';
import React, { useEffect } from "react";

export function ArticlesCardsGrid({ items }: { items: BlogPost[] }) {
  const cards = items.map((article) => (
    <ArticleCard key={article.id} post={article} />
  ));
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    console.log(isMobile);
  
  }, [isMobile])
  
  
  return (
    <Container py="xl">

      <SimpleGrid cols={isMobile ? 1 : 2}>  
      {cards}
    </SimpleGrid>

    </Container>
  );
}