import About from "@/components/About";
import Categories from "@/components/Categories";
import CTA from "@/components/Cta";
import FAQ from "@/components/Faq";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWork from "@/components/HowWork";
import Industries from "@/components/Industries";
import Marquee from "@/components/Maequee";
import Products from "@/components/Products";
import VideosSection from "@/components/VideosSection";
import { Heading2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Supermarket Rack Manufacturer in Delhi | Arya Insulation",
  description:
    "Supermarket rack manufacturer in Delhi for kirana, grocery and departmental stores. Gondola and wall display racks, custom layouts and on-site installation.",

};

export default function Home() {
  return (
    <>
  <Hero/>
  <About/>
  <Categories/>
  <CTA/>
  <VideosSection/>
  <Products/>
  <Industries/>
  <Marquee/>
  <HowWork/>
  <FAQ/>
  <Form/>
  </>
  );
}
