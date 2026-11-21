import About from "@/components/About";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import { Heading2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
  <Hero/>
  <About/>
  <Categories/>
  <Industries/>
  </>
  );
}
