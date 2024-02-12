import {Container, Stack, Title, Text, Overlay, Button} from "@mantine/core";
import React from "react";
import {MDXRemote} from "next-mdx-remote/rsc";
import {getCategoriesPost} from "@/util/getCategoriesPost";
import {NotFound} from "@/components/NotFound";
import Stylecomponent from "@/components/info/Stylecomponent";
import classes from "./page.module.css";
import Image from "next/image";


const components = {
  h1: (props: any) => <Title {...props} ta={"center"} mt={"xl"}/>,
  h3: (props: any) => <Title {...props} order={2}/>,
  code: (props: any) => <Stylecomponent {...props}  />,
  p: (props: any) => (
    <Text {...props} ta={"justify"}/>
  ),
  img: (props: any) => (
    <Image {...props} style={{objectFit: "contain", maxHeight: "40rem"}} unoptimized/>
  ),
  h2: (props: any) => <Title {...props} className={classes.h2}/>,
  h4: (props: any) => <Title {...props} className={classes.h4} order={4}/>
};
async function page({params}: { params: { postid: string } }) {
  const post = await getCategoriesPost(params.postid[0] ?? "");
  console.log(post);
  if (!post) {
    return <NotFound/>;
  }
  return (
    <Container>
      <div
        className={classes.hero}
      >
        <Image
          alt="Mountains"
          src={`https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/${post.img_path_hero}.avif`}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          priority
          unoptimized
        />
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.016) 0%, rgba(0, 0, 0, .65) 100%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.containerhero} size="md">
          <Title className={classes.title}>{post.article_name}</Title>
          <Text size="lg" className={classes.description}>
            {post.title_hero}
          </Text>

          <div className={classes.controls}>
            <Button className={classes.control} variant="white" size="lg">
              ¡Quiero este Plan!
            </Button>
          </div>
        </Container>
      </div>
      <Stack>
        <MDXRemote source={post.content ?? ""} components={components}/>
      </Stack>
    </Container>
  );
}

export default page;
