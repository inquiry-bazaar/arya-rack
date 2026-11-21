import About from "@/components/About";
import Categories from "@/components/Categories";
import FAQ from "@/components/Faq";
import Form from "@/components/Form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowWork from "@/components/HowWork";
import Industries from "@/components/Industries";
import VideosSection from "@/components/VideosSection";
import { Heading2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
  <Hero/>
  <About/>
  <VideosSection/>
  <Categories/>
  <Industries/>
  <HowWork/>
  <FAQ/>
  <Form/>
  </>
  );
}
