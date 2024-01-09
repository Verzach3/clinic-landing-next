import { SimpleGrid } from "@mantine/core";
import React from "react";
import { ImageCard } from "./ImageCard";
import { BlogPost } from "@/types/BlogPost";

function ImageCardGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <SimpleGrid cols={3}>
      {posts.map((post) => (
          <ImageCard key={post.id} post={post} />
      ))}
    </SimpleGrid>
  );
}

export default ImageCardGrid;
