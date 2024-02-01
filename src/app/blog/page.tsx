import { NotFound } from "@/components/NotFound";
import { BlogCarousel } from "@/components/blog/BlogCarousel";
import ImageCardGrid from "@/components/blog/ImageCardGrid";
import { BlogPost } from "@/types/BlogPost";
import { getBlogPosts } from "@/util/getBlogPosts";
import { Center, Container } from "@mantine/core";

export const dynamic = 'force-dynamic'

async function Blog() {
  const posts = await getBlogPosts()
  console.log(posts);
  if (!posts || posts.length === 0) {
    return <NotFound/> 
  }
  
  return (
    <Container>
      <Center>
        <h1>Ultimos Posts</h1>
      </Center>
      {posts.length? (
        <>
          <div style={{ marginBottom: "2rem" }}>
            <BlogCarousel
              items={posts.filter((post) => post.in_carousel) as unknown as BlogPost[]}
            />
          </div>
          <ImageCardGrid posts={posts}/>
          {/* <ArticlesCardsGrid items={posts as BlogPost[]} /> */}
        </>
      ) : (
        <h3>No hay post publicados</h3>
      )}
    </Container>
  );
}

export default Blog;
