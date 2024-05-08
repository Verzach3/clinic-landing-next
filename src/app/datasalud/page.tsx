import React from 'react';

import {HeroData} from "@/components/datasalud/HeroData";
import {HeroBeneficios} from "@/components/datasalud/HeroBeneficios";
import {FeatureData} from "@/components/datasalud/FeaturesData";
function Page() {
  return (
    <div>
      {/* Contenido de Data salud */}
      <HeroData />
      <FeatureData />
      <HeroBeneficios />
    </div>
  );
}

export default Page;