import React from 'react';
import classes from './page.module.css';

import { HeroImage } from "@/components/WomensAndMens/HeroImage";


function Page() {
  return (


    <div className={classes.pageContainer}>
      <HeroImage /> {/* Agrega tu componente HeroImage aquí */}
      
      <h1 className={classes.title}>Terapia de Reemplazo Hormonal Bioidéntica para el Desequilibrio Hormonal en Mujeres</h1>
      
      <h2>Una Solución Personalizada con Hormonas Bioidénticas para Mujeres</h2>
      <p>[Las mujeres que sufren síntomas de menopausia precoz, como sofocos, sudores nocturnos, pérdida de memoria, cambios de humor,
         aumento de peso y baja libido, están optando por la terapia de reemplazo hormonal bioidéntica (TRHB) como solución. Esta terapia,
          ofrecida por WellFit Clinic, está diseñada para poner fin al sufrimiento causado por la fatiga adrenal inducida por el estrés, 
          la menopausia, la perimenopausia y el síndrome premenstrual severo.]</p>
          
          <section className={classes.section}>
      <div className={classes.contentContainer}>
        <div className={classes.imageContainer}>
          <img src="/Drugs.png" alt="Descripción de la imagen" />
        </div>
        <div className={classes.textContent}>
          <h2>¿Qué son las hormonas bioidénticas?</h2>
          <p>Las hormonas bioidénticas son una réplica exacta de las hormonas que el cuerpo produce naturalmente; igualando las hormonas naturales del cuerpo molécula por molécula.</p>
        </div>
      </div>
    </section>


      <section className={classes.section}>
        <h2>Producción de hormonas bioidénticas</h2>
        <p>[Las hormonas bioidénticas para mujeres se fabrican en laboratorios a partir de compuestos encontrados en plantas (generalmente soja o ñame silvestre).
           A diferencia de los suplementos que contienen extracto de soja o ñame, las hormonas bioidénticas son procesadas por farmacéuticos especializados en compuestos,
           proporcionando medicamentos con una formulación personalizada para satisfacer las necesidades específicas de salud de cada paciente.]</p>
      </section>

      <section className={classes.section}>
        <h2>¿Por Qué No Hormonas Sintéticas?</h2>
        <p>[Las hormonas sintéticas, hechas de progesterona vegetal y estrógenos animales, no son idénticas a las hormonas que utiliza el cuerpo. 
          Estas actúan como toxinas ya que su composición química no puede metabolizarse adecuadamente, lo que a menudo resulta en efectos secundarios adversos.]</p>
      </section>

      <h2>Hormonas y Cáncer</h2>
      <p>[Muchas mujeres temen la conexión entre hormonas y cáncer. Es crucial entender que estos estudios vinculan las hormonas sintéticas con varios tipos de cáncer.
         No hay estudios que solo miren las hormonas bioidénticas y el cáncer debido a que son caros y las hormonas bioidénticas 
         se crean para igualar la química corporal individual..]</p>


         <section className={classes.section}>
      <div className={classes.contentContainer}>
        <div className={classes.imageContainer}>
          <img src="/Hormonesguie.png" alt="Descripción de la imagen" />
        </div>
        <div className={classes.textContent}>
        <h2>Estudios y Hormonas Sintéticas</h2>
        <p>[Los estudios han encontrado que el estrógeno sintético aumenta las posibilidades de desarrollar cánceres. 
          Estos riesgos se atenúan con la adición de progesterona sintética, pero sigue siendo una combinación de hormonas sintéticas riesgosas. Las hormonas bioidénticas, 
          a diferencia de las sintéticas,
           son idénticas al estrógeno natural de una mujer y han demostrado reducir el riesgo de cáncer de mama al corregir el desequilibrio hormonal de la menopausia.]</p>
        </div>
      </div>
    </section>

     

      <h1 className={classes.title}>Revive con Hormonas Bioidénticas: El Secreto de WellFit Clinic</h1>

      <p>[La química corporal contiene demasiados factores para ser tratada de manera general. Las hormonas funcionan juntas como una sinfonía; 
        un problema con una sola hormona afecta a todas las demás.
         Las hormonas bioidénticas para mujeres ofrecen armonía o alivio al tratar la sinfonía completa de hormonas femeninas.]</p>

         {/* Sección de Servicios de Terapia de Hormonas Bioidénticas */}
         <section className={classes.section}>
      <div className={classes.contentContainer1}>
        <div className={`${classes.textContent} ${classes.textContentLeft}`}>
          <h2>Servicios de Terapia de Hormonas Bioidénticas de WellFit Clinic</h2>
          <ul>
            <li>Revisión exhaustiva de síntomas, historial médico, familiar y personal.</li>
            <li>Análisis de laboratorio mediante saliva, orina y/o sangre.</li>
            <li>Equilibrio de hormonas naturales.</li>
            <li>Evaluaciones continuas.</li>
            <li>Farmacia compuesta de alta calidad.</li>
            <li>Suplementos de la más alta calidad.</li>
            <li>Programas de fitness.</li>
            <li>Planificación nutricional.</li>
            <li>Planes de reducción de estrés.</li>
          </ul>
        </div>
        <div className={`${classes.imageContainer} ${classes.imageContainerLeft}`}>
          <img src="/ProgramsHormones.png" alt="Descripción de la imagen" />
        </div>
      </div>
    </section>
      

      <section className={classes.section}>
        <h2>Importancia de la Consulta Médica</h2>
        <p>Es crucial buscar el consejo de un profesional médico para un diagnóstico adecuado y un plan de tratamiento personalizado. 
          Los síntomas de desequilibrio hormonal pueden ser indicativos de problemas de salud subyacentes que requieren atención.</p>
      </section>



    </div>
  );
}

export default Page;
