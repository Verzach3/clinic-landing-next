"use client";
import { Overlay, Container, Title, Button, Text } from "@mantine/core";
import classes from "./page.module.css";
import Image from "next/image";
import { ContactUs } from "@/components/Home/ContactUs";
import { Features } from "@/components/Home/Features";
import Footer from "@/components/Footer";
import { Coments } from "@/components/Home/Coments";
import { useMediaQuery } from '@mantine/hooks';
import { Services } from "@/components/Home/Services";


export default function Home() {

  const isMobile = useMediaQuery('(max-width: 768px)');
  return (

    <div>
      <div className={classes.hero}>
        <Image
          alt="Mountains"
          src={`https://curmgtrnrpyjsizyhdzy.supabase.co/storage/v1/object/public/landing-bucket/Logo3.png.avif`}
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
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, .65) 80%)"
          opacity={1}
          zIndex={0}
        />
        <Container className={classes.container} size="md">
          <Title className={classes.title}>
            Descubre tu potencial con WellFit Clinics
          </Title>
          <Text className={classes.description} size="xl" mt="xl" >
            Revoluciona tu enfoque hacia la salud y el bienestar con nuestros
            programas de bienestar hechos a medida. En WellFit Clinics,
            combinamos la ciencia del fitness con atención personalizada para
            guiarte hacia tu mejor versión. Únete a nosotros y experimenta el
            poder de una salud óptima y personalizada.
          </Text>

          <div
            style={{
              width: "100%",
              justifyItems: "right",
            }}
          >
            <Button
              variant="gradient"
              size="lg"
              radius="xl"
              style={{
                justifySelf: "right",
              }}
              className={classes.control}
              onClick={() => {
                const contactUsSection = document.getElementById("contact-us");
                if (contactUsSection) {
                  contactUsSection.scrollIntoView({ behavior: "smooth" });
                }
              } }
            >
              Contactanos
            </Button>
          </div>
        </Container>
      </div>
     

   

 
   <Container>
        <Features />
      </Container>
      
      <Services/>
<Container className={classes.contactUsContainer} id="contact-us">
    <ContactUs />
</Container>

<Container>
    <Coments />
</Container>




      <Footer/>
    </div>
  );
}
