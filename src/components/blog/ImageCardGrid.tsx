'use client'
import { SimpleGrid } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import React from "react";
import { ImageCard } from "./ImageCard";
import { Database } from "@/types/database.types";

function ImageCardGrid({ posts }: { posts: Database["public"]["Tables"]["blog_posts"]["Row"][] }) {
  // Detecta si el ancho de la pantalla es menor a 768px (40em aproximadamente) y ajusta el número de columnas según sea necesario
  //Con el metodo MantineUseMediaQuery se puede setear y cambiar el grid segun los tipos de devices.
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <SimpleGrid cols={isMobile ? 1 : 2}> {/* Ajusta las columnas según si es móvil o no */}
      {isMobile !== undefined && posts.map((post) => (
        <ImageCard key={post.id} post={post} />
      ))}
    </SimpleGrid>
  );
}

export default ImageCardGrid;

