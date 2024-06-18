import React from 'react';

import {HeroData} from "@/components/datasalud/HeroData";
import {HeroBeneficios} from "@/components/datasalud/HeroBeneficios";
import {FeatureData} from "@/components/datasalud/FeaturesData";
import {DemoSection} from "@/components/datasalud/DemoSection";
import TestimonioDataSalud from "@/components/datasalud/TestimoniosDataSalud";

function Page() {
  return (
    <div>
      {/* Contenido de Data salud */}
      <HeroData />
      <FeatureData />
      <HeroBeneficios />
      <DemoSection />
      <TestimonioDataSalud />
    </div>
  );
}

export default Page;