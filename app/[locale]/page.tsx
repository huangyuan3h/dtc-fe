"use client";
import { Header } from "@/components/header";

import { useTranslations } from "next-intl";
import { TopSlider } from "./components/top-slider";
import { Text2Speech } from "./components/tts/Text2Speech";
import Hero from "./components/hero-video";
import Footer from "@/components/footer";
import CalloutAI from "./components/callout-ai";
import { BeforeSlider } from "./components/before-slider";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("HomePage");

  return (
    <main>
      <Header />
      <Hero />
      <CalloutAI />
      <Text2Speech />
      <BeforeSlider />
      <TopSlider />
      <Footer />
    </main>
  );
}
