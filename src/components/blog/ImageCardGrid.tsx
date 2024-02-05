import { SimpleGrid } from "@mantine/core";
import React from "react";
import { ImageCard } from "./ImageCard";
import { BlogPost } from "@/types/BlogPost";
import {Database} from "@/types/database.types";

function ImageCardGrid({ posts }: { posts: Database["public"]["Tables"]["blog_posts"]["Row"][] }) {
  return (
    <SimpleGrid cols={3}>
      {posts.map((post) => (
          <ImageCard key={post.id} post={post} />
      ))}
    </SimpleGrid>
  );
}

export default ImageCardGrid;
