
import { Container,Grid, GridCol, Stack, Title, Text, Center , SimpleGrid ,  Overlay , Button} from "@mantine/core";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCategoriesPost } from "@/util/getCategoriesPost";
import { NotFound } from "@/components/NotFound";
import { HeroImage } from "@/components/WomensAndMens/HeroImage";
import { log } from "console";
import classes from "./page.module.css";
import Image from "next/image";

const components = {

  h1: (props: any) => <Title {...props} ta={"center"} mt={"xl"} />,
  h3: (props: any) => <Title {...props} order={2} ta={"center"} />,

  code: (props: any) => <Stylecomponent {...props}  />,
  


  p: (props: any) => (
    <Text {...props} size="xl" ta={"left"} mt={"xl"} mb={"xl"} />
  ),
  img: (props: any) => (
    <Image {...props} style={{ objectFit: "contain", maxHeight: "40rem" }} />
  )
  


};

function Stylecomponent({ children }: any) {
  // Separar el contenido en líneas
  const codeLines = children.trim().split("\n");

  if (codeLines.length < 4) {
    // Asegúrate de que haya al menos cuatro líneas dentro del bloque `code`
    console.error("Se esperan al menos cuatro líneas dentro del bloque `code`");
    return null;
  }

  // Obtener el nombre del componente, título, ruta de la imagen y descripción
  const componentName = codeLines[0].trim();
  const sectionTitle = codeLines[1].trim();
  const imagePath = codeLines[2].trim();
  const description = codeLines.slice(3).join("\n");

  // Determinar el diseño según el nombre del componente
  let layout;

  switch (componentName) {
    case "CenterComponent":
      layout = (
        <Grid gutter={20} className="customGrid">
          <GridCol span={12}>
          <Image src={imagePath} alt="Component Image" width={500} height={300} style={{ objectFit: "contain", maxHeight: "40rem" }} />
          </GridCol>
          <GridCol span={12} className="customGridCol">
            <div className="subGrid">
              <Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{sectionTitle}</Title>
              <Text className="fullWidthText" style={{ marginTop: "10px", color: "#555", textWrap: "wrap", textAlign: "justify" }}>{description}</Text>
            </div>
          </GridCol>
        </Grid>
      );
      break;
    case "LeftComponent":
      layout = (
        <Grid gutter={20} className="customGrid">
          <GridCol span={6}>
          <Image src={imagePath} alt="Component Image" width={500} height={300} style={{ objectFit: "contain", maxHeight: "60rem" }} />
          </GridCol>
          <GridCol span={6} className="customGridCol">
            <div className="subGrid">
              <Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{sectionTitle}</Title>
              <Text className="fullWidthText" style={{ marginTop: "10px", color: "#555", textWrap: "wrap", textAlign: "justify" }}>{description}</Text>
            </div>
          </GridCol>
        </Grid>
      );
      break;
    case "RightComponent":
      layout = (
        <Grid gutter={20} className={classes.customGridCol}>
          <GridCol span={6} className={classes.customGridCol}>
            <div className="subGrid">
              <Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{sectionTitle}</Title>
              <Text className="fullWidthText" style={{ marginTop: "10px", color: "#555", textWrap: "wrap", textAlign: "justify" }}>{description}</Text>
            </div>
          </GridCol>
          <GridCol span={6}>
          <Image src={imagePath} alt="Component Image" width={500} height={300} style={{ objectFit: "contain", maxHeight: "40rem" }} />
          </GridCol>
        </Grid>
      );
      break;
    default:
      // Nombre de componente desconocido
      console.error("Nombre de componente desconocido en el bloque `code`");
      return null;
  }

  return layout;
}

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
