import React from 'react';

import {HeroData} from "@/components/datasalud/HeroData";
import {FeatureData} from "@/components/datasalud/FeaturesData";
function Page() {
  return (
    <div>
      {/* Contenido de Data salud */}
      <HeroData />
      <FeatureData />
    </div>
  );
}

export default Page;