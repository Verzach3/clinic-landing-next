import { NotFound } from "@/components/NotFound";
import { BlogCarousel } from "@/components/blog/BlogCarousel";
import ImageCardGrid from "@/components/blog/ImageCardGrid";
import { getBlogPosts } from "@/util/getBlogPosts";
import { Center, Container } from "@mantine/core";
import Footer from "@/components/Footer"; 

export const dynamic = 'force-dynamic'

async function Blog() {
  const posts = await getBlogPosts()

  if (!posts || posts.length === 0) {
    return <NotFound/>
  }

  return (
    <>
      <Container>
        <Center>
          <h1>Ultimos Posts</h1>
        </Center>
        {posts.length ? (
          <>
            <div style={{ marginBottom: "2rem" }}>
              <BlogCarousel items={posts.filter((post) => post["In Carousel"])} />
            </div>
            <ImageCardGrid posts={posts}/>
            {/* <ArticlesCardsGrid items={posts as BlogPost[]} /> */}
          </>
        ) : (
          <h3>No hay post publicados</h3>
        )}
      </Container>
      <Footer /> {/**Rendering Footer **/}
    </>
  );
}
export default Blog;

