
import { ContactUs } from "@/components/Home/ContactUs";
import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc"
import classes from "./page.module.css";
import { getInfoPost } from "@/util/getInfoPost";
import { NotFound } from "@/components/NotFound";

const components = {
  h1: (props: any) => <Title {...props} className={classes.titleContac} />,
  h3: (props: any) => <Title {...props} className={classes.text} />,
  h4: (props: any) => <Title {...props} className={classes.subtitle} />,
  p: (props: any) => <Text {...props} className={classes.descriptionContac} size="md" mt="xl" />,
}

async function page({ params }: { params: { path: string }}) {
  const post = await getInfoPost(params.path)
  console.log(post);

  if (!post) {
    return <NotFound/>
  }

  return (
    <div>
      <div className={classes.hero} style={{
        backgroundImage: `url(/${post.image_path})`
      }}>
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.016) 0%, rgba(0, 0, 0, .65) 100%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
          <Title className={classes.title}>
            {post.big_title}
          </Title>
          <Text className={classes.description} size="xl" mt="xl">
            {post.title_subtext}
          </Text>

          <Button
            variant="gradient"
            size="lg"
            radius="xl"
            className={classes.control}
             
          >
            Adquirir informacion
          </Button>
        </Container>
      </div>

      <div className={classes.banner}>
        <Title className={classes.bannerTitle}>
          {post.banner_title}
        </Title>

        <Text className={classes.bannerDescription}>
          {post.banner_content}
        </Text>

        <Button
          variant="gradient"
          size="lg"
          radius="xl"
          className={classes.bannerButton}
        >
          Quiero Mejorar mi
        </Button>
      </div>

      <div className={classes.heroContac}>
        <div>
          <div className={classes.containerContac}>
          <MDXRemote source={post.questions_section} components={components}/>
            <Button
              variant="gradient"
              size="lg"
              radius="xl"
              className={classes.controlContac}
            >
              Adquirir informacion
            </Button>
          </div>
          <div></div>
        </div>
      </div>

      <Container className={classes.contactUsContainer} id="contact-us">
        <ContactUs />
      </Container>
    </div>
  );
}

export default page;
