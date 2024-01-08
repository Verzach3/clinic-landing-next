import { Container, Image, Stack, Text, Title } from "@mantine/core";
import { BlogPost } from "@/types/BlogPost";

function BlogView() {
  

  return (
    <Container>
      <Stack>
        <Title ta={"center"} mt={"xl"}>
          Entendiendo la Pérdida de Cabello: La Ciencia Detrás de la Caída del
          Cabello
        </Title>
        <Text size="xs" ta={"center"} c={"gray"}>
          Tony | Diciembre 27, 2023 | 5 min de lectura
        </Text>
        <Text size="xl" ta={"center"} mt={"xl"} mb={"xl"}>
          La pérdida de cabello es una preocupación común para muchos, pero ¿qué
          es lo que realmente causa que nuestro cabello se adelgace y caiga? La
          respuesta se encuentra en nuestra biología y el ciclo de vida complejo
          de los folículos capilares. Cada cabello pasa por tres fases críticas:
          la fase de crecimiento (anágena), la fase de regresión (catágena) y la
          fase de reposo (telógena). Durante estas fases, varios factores,
          incluyendo hormonas y flujo sanguíneo, juegan un papel crucial en
          determinar la salud y longevidad de nuestro cabello.
        </Text>

        <Title order={2} ta={"center"}>
          La Influencia Hormonal
        </Title>

        <Text size="xl" ta={"center"} mb={"xl"}>
          Las hormonas son los principales impulsores del crecimiento del
          cabello, actuando como aceleradores o frenos a lo largo de su ciclo de
          vida. Por ejemplo, la dihidrotestosterona (DHT), un derivado de la
          testosterona, puede acortar la fase anágena y extender las fases
          catágena y telógena, lo que lleva a la pérdida de cabello. Es por esto
          que los tratamientos que apuntan a la DHT pueden ser efectivos para
          preservar y regenerar el cabello.
        </Text>

        <Title order={2} ta={"center"}>
          Aumentando el Flujo Sanguíneo para el Crecimiento del Cabello
        </Title>
        <Text size="xl" ta={"center"} mb={"xl"}>
          El flujo sanguíneo también es crucial para la salud del cabello, ya
          que entrega nutrientes y oxígeno esenciales a los folículos capilares.
          Tratamientos como el Minoxidil, inicialmente un medicamento para la
          hipertensión, funcionan aumentando el flujo sanguíneo al cuero
          cabelludo. Esta extensión de la fase anágena puede ayudar a mantener
          el cabello existente y a ralentizar la pérdida del mismo.
        </Text>

        <Image
          src={
            "https://directus.caprover.thepanas.me/assets/fb4ede6d-e167-4731-969b-2857e2bd53fb"
          }
        />
        <Title order={2} ta={"center"}>
          Combinando Tratamientos para Resultados Mejorados
        </Title>
        <Text size="xl" ta={"center"} mb={"xl"}>
          Curiosamente, combinar tratamientos como la microagujación con
          Minoxidil puede ser más efectivo que usar cualquiera de los
          tratamientos por separado. La microagujación, que implica causar
          pequeñas punciones en el cuero cabelludo con agujas, puede reactivar
          las células madre inactivas en los folículos capilares, estimulando el
          crecimiento de nuevo cabello. Cuando se utiliza junto con Minoxidil,
          este método ha mostrado resultados prometedores en la recuperación de
          'zonas muertas' en el cuero cabelludo.
        </Text>
      </Stack>
    </Container>
  );
}

export default BlogView;
