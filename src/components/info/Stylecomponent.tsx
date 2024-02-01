
'use client'
import React from "react";
import { useMediaQuery } from '@mantine/hooks'; // Importa useMediaQuery desde @mantine/hooks
import { Grid, GridCol, Title, Text, SimpleGrid} from "@mantine/core";
import Image from "next/image";
import classes from "../../app/info/[postid]/page.module.css"

function Stylecomponent({ children }: any) {

    const isMobile = useMediaQuery('(max-width: 768px)');
  
    const gridCols = isMobile ? 1 : 2;
  
  
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image src={imagePath} alt="Component Image" width={600} height={500} style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} />
          </div>
        </GridCol>
        <GridCol span={12} className="customGridCol">
          <div className="subGrid">
            <Title className={classes.h2} style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{sectionTitle}</Title>
            <Text className={classes.p} style={{ marginTop: "10px", color: "#555", textWrap: "wrap", textAlign: "justify" }}>{description}</Text>
          </div>
        </GridCol>
      </Grid>
    );
    break;
  
    case "LeftComponent":
      layout = (
        <SimpleGrid className="customGridCol" cols={gridCols}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image src={imagePath} alt="Component Image" width={450} height={300} style={{ objectFit: "contain", maxWidth: '100%', maxHeight: '100%' }} />
          </div>
          <div className="subGrid">
            <Title className={classes.h2} style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{sectionTitle}</Title>
            <Text className={classes.p} style={{ marginTop: "10px", color: "#555", textWrap: "wrap", textAlign: "justify" }}>{description}</Text>
          </div>
        </SimpleGrid>
      );
      break;
    
    case "RightComponent":
      layout = (
        <SimpleGrid className="customGridCol" cols={gridCols}>
          <div className="subGrid">
            <Title className={classes.h2} style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{sectionTitle}</Title>
            <Text className={classes.p} style={{ marginTop: "10px", color: "#555", textWrap: "wrap", textAlign: "justify" }}>{description}</Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Image src={imagePath} alt="Component Image" width={400} height={300} style={{ objectFit: "contain", maxWidth: '100%', maxHeight: '100%' }} />
          </div>
        </SimpleGrid>
      );
      break;
      default:
        // Nombre de componente desconocido
        console.error("Nombre de componente desconocido en el bloque `code`");
        return null;
    }
  
    return layout;
  }

  export default Stylecomponent;
