
import { Container, Stack, Title, Text, Image, Center , SimpleGrid  } from "@mantine/core";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCategoriesPost } from "@/util/getCategoriesPost";
import { NotFound } from "@/components/NotFound";
import { HeroImage } from "@/components/WomensAndMens/HeroImage";
import { log } from "console";



const components = {
  h1: (props: any) => <Title {...props} ta={"center"} mt={"xl"} />,
  h3: (props: any) => <Title {...props} order={2} ta={"center"} />,
  h6: (props: any) => <Stylecomponent {...props}  />,


  p: (props: any) => (
    <Text {...props} size="xl" ta={"left"} mt={"xl"} mb={"xl"} />
  ),
  img: (props: any) => (
    <Image {...props} style={{ objectFit: "contain", maxHeight: "40rem" }} />
  )
};

function Stylecomponent (children:any){
  console.log(children);
  
  
  return null
}
async function page({ params }: { params: { postid: string } }) {
  let post;
  try {
    post = await getCategoriesPost(params.postid);
  } catch (error) {
    console.log(error);
  }

  if (!post) {
    return <NotFound />;



  }

  return (
    <Container>
    <HeroImage /> 
        <Stack>
          <MDXRemote source={post.content} components={components} />
        </Stack>
    </Container>
  );
}

export default page;
