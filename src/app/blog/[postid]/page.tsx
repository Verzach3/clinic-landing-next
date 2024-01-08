import { Container, Stack, Title, Text, Image, Center } from "@mantine/core";
import { MDXRemote } from "next-mdx-remote/rsc";
import React, { Suspense } from "react";
import { getBlogPost } from "@/util/getBlogPost";
import { NotFound } from "@/components/NotFound";

const components = {
  h1: (props: any) => <Title {...props} ta={"center"} mt={"xl"} />,
  h3: (props: any) => <Title {...props} order={2} ta={"center"} />,
  h6: (props: any) => <Title {...props} size="xs" ta={"center"} c={"gray"} />,
  p: (props: any) => (
    <Text {...props} size="xl" ta={"center"} mt={"xl"} mb={"xl"} />
  ),
  img: (props: any) => (
    <Image {...props} style={{ objectFit: "contain", maxHeight: "40rem" }} />
  ),
};

async function page({ params }: { params: { postid: string } }) {
  let post;
  try {
    post = await getBlogPost(params.postid);
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Stack>
          <MDXRemote source={post.content} components={components} />
        </Stack>
      </Suspense>
    </Container>
  );
}

export default page;
