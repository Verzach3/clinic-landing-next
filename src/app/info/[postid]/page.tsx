
import { Container,Grid, GridCol, Stack, Title, Text, Center , SimpleGrid ,  Overlay , Button} from "@mantine/core";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCategoriesPost } from "@/util/getCategoriesPost";
import { NotFound } from "@/components/NotFound";
import { HeroImage } from "@/components/info/HeroImage";
import  Stylecomponent from "@/components/info/Stylecomponent";
import classes from "./page.module.css";
import Image from "next/image";
import { useMediaQuery } from '@mantine/hooks'; // Importa useMediaQuery desde @mantine/hooks


const components = {

  h1: (props: any) => <Title {...props} ta={"center"} mt={"xl"} />,
  h3: (props: any) => <Title {...props} order={2}  />,
  code: (props: any) => <Stylecomponent {...props}  />,
  p: (props: any) => (
    <Text {...props} size="xl" ta={"justify"} mt={"xl"} mb={"xl"} />
  ),
  img: (props: any) => (
    <Image {...props} style={{ objectFit: "contain", maxHeight: "40rem" }} />
  ),
  h2: (props: any) => <Title {...props} className={classes.h2} />,
  h4: (props: any) => <Title {...props} className={classes.h4} order={4} />
  


};

async function page({ params }: { params: { postid: string } }) {
 
 
  const post = await getCategoriesPost(params.postid);
  console.log(post);

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
