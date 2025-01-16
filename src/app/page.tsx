import { getHomePageData } from "@/data/loaders";

import { HeroSection } from "@/components/custom/hero-section";
// import { FeatureSection } from "@/components/custom/features-section";
import { DreamHomeSection } from "@/components/custom/dream-home";
import { ProcessSection } from "@/components/custom/process-section";

export default async function Home() {
  const strapiData = await getHomePageData();
  // console.log("strapiData", strapiData);
  const { blocks } = strapiData?.data || [];
  return <main>{blocks.map(blockRenderer)}</main>;
}

const blockComponents = {
  "layout.hero-section": HeroSection,
  // "layout.features-section": FeatureSection,
  "layout.dream-home": DreamHomeSection,
  "layout.process-section": ProcessSection,

};

function blockRenderer(block: any) {
  const Component =
    blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? <Component key={block.id} data={block} /> : null;
}
