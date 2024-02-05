import {Container, Stack, Title, Text} from "@mantine/core";
import {MDXRemote} from "next-mdx-remote/rsc";
import React from "react";
import {getBlogPost} from "@/util/getBlogPost";
import {NotFound} from "@/components/NotFound";
import Footer from "@/components/Footer";
import Image from "next/image";

const components = {
  h1: (props: any) => <Title {...props} ta={"center"} mt={"xl"}/>,
  h3: (props: any) => <Title {...props} order={2} ta={"center"}/>,
  h6: (props: any) => <Title {...props} size="xs" ta={"center"} c={"gray"}/>,
  p: (props: any) => (
    <Text {...props} size="xl" ta={"center"} mt={"xl"} mb={"xl"}/>
  ),
  img: (props: any) => {
    console.log(props)
    return (< Image
      {...
        props
      }
      src={`url(${props.src}`}
      width={50}
      height={50}
      style={
        {
          objectFit: "contain", maxHeight:
            "40rem"
        }
      }
      unoptimized/>)
  },
};

async function page({params}: { params: { postid: string } }) {
  let post;
  try {
    post = await getBlogPost(params.postid);
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return <NotFound/>;
  }

  return (
    <>
      <Container>
        <Stack>
          <MDXRemote source={post.content ?? ""} components={components}/>
        </Stack>
      </Container>
      <Footer/>
    </>
  );
}

export default page;
