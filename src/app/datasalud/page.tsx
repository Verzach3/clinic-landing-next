import React from 'react';

import {HeroData} from "@/components/datasalud/HeroData";
import {HeroBeneficios} from "@/components/datasalud/HeroBeneficios";
import {FeatureData} from "@/components/datasalud/FeaturesData";
import Footer from '@/components/Footer';
function Page() {
  return (
    <div>
      {/* Contenido de Data salud */}
      <HeroData />
      <FeatureData />
      <HeroBeneficios />
      <Footer />
   
    </div>
  );
}

export default Page;