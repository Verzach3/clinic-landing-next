import { ContactUs } from "@/components/Home/ContactUs";
import { Overlay, Container, Title, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import classes from "./page.module.css";
import { getInfoPost } from "@/util/getInfoPost";
import { NotFound } from "@/components/NotFound";
import { HowWorks } from "@/components/Sintomas/HowWorks";
import { ClientsComments } from "@/components/Sintomas/ClientsComments";
import Footer from "@/components/Footer";
import ClientComponent from "@/components/Sintomas/ClientComponent";

const components = {
  h1: (props: any) => <Title {...props} className={classes.titleContac} />,
  h2: (props: any) => <Title {...props} className={classes.text} />,
  h3: (props: any) => <Title {...props} className={classes.text} />,
  h4: (props: any) => <Title {...props} className={classes.subtitle} />,
  p: (props: any) => (
    <Text {...props} className={classes.descriptionContac} size="md" mt="xl" />
  ),
};

async function page({ params }: { params: { path: string } }) {
  const post = await getInfoPost(params.path);
  if (!post) {
    return <NotFound />;
  }

  return (
    <div style={{ width: "100%" }}>
      <div className={classes.hero}>
        <Image
          alt="Mountains"
          src={`https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/${post.image_path}.avif`}
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
          unoptimized
        />
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.016) 0%, rgba(0, 0, 0, .65) 100%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
          <Title className={classes.title}>{post.big_title}</Title>
          <Text className={classes.description} size="xl" mt="xl">
            {post.title_subtext}
          </Text>

          <ClientComponent />
        </Container>
      </div>

      <div className={classes.banner}>
        <Title className={classes.bannerTitle}>{post.banner_title}</Title>

        <div className={classes.bannerDescription}>
          <MDXRemote source={post.banner_content!} components={components} />
          <div className={classes.buttonContainerRight}>
          <ClientComponent />
        </div>
        </div>

       
      </div>

      <div
        className={classes.heroContac}
        style={{
          backgroundImage: `url(https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/${post.image_path_2}.avif)`,
        }}
      >
        <div>
          <div className={classes.containerContac}>
            <MDXRemote source={post.questions_section!} components={components} />
            <div className={classes.buttonContainerRight}>
          <ClientComponent />
        </div>
          </div>
          <div></div>
        </div>
      </div>

      <Container className={classes.HowWorks} id="HowWorks">
        <HowWorks />
      </Container>

      <div style={{ width: "100%", backgroundColor: "#0c1f47 " }}>
        <ClientsComments />
      </div>

      <Container className={classes.contactUsContainer} id="contact-us">
        <ContactUs />
      </Container>
      <Footer />
    </div>
  );
}

export default page;
