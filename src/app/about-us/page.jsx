
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Users,
  Factory,
  CheckCircle2,
  Target,
  Lightbulb,
  PackageCheck,
} from "lucide-react";

const C = {
  navy: "#0A2457",
  navyDeep: "#06183E",
  blue: "#0B57E3",
  orange: "#F26A12",
  orangeLight: "#FF8A1F",
  orangeDark: "#E4560A",
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const features = [
  {
    icon: Factory,
    title: "Modern Infrastructure",
    description:
      "Our advanced infrastructure and modern machinery support efficient production and customized solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "We focus on high-quality raw materials, careful production processes and reliable products.",
  },
  {
    icon: Users,
    title: "Skilled Workforce",
    description:
      "Our experienced team works together to understand customer requirements and deliver dependable solutions.",
  },
];

const qualityPoints = [
  "Fruits and Vegetable Racks",
  "Departmental Racks",
  "Supermarket Display Racks",
  "Heavy-Duty Racks",
  "Contemporary Bookshelves",
  "Shopping Baskets",
];

export default function AboutUs() {
  const reduce = useReducedMotion();

  const animation = reduce
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
        variants: fadeUp,
      };

  return (
    <main className="overflow-hidden bg-white text-[#0A2457]">

      {/* HERO SECTION */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 lg:px-16 lg:pb-20 lg:pt-28">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-orange-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">

          {/* IMAGE COLLAGE */}
          <motion.div
            {...animation}
            className="relative mx-auto w-full max-w-[620px]"
          >
            <div className="absolute -left-5 -top-5 h-full w-[85%] rounded-[40px] bg-[#0A2457] sm:-left-7 sm:-top-7" />

            <div className="absolute -right-3 top-0 h-20 w-1/2 rounded-tr-[30px] bg-[#F26A12] sm:-right-5 sm:h-24" />

            <div className="relative z-10 h-[340px] overflow-hidden rounded-[30px] border-[5px] border-white shadow-2xl sm:h-[440px] lg:h-[490px]">
              <img
                src="/imgi_148_supermarket-rack-1.webp"
                alt="Modern supermarket display racks"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06183E]/35 to-transparent" />
            </div>

            {/* OVERLAPPING IMAGE */}
            <div className="absolute -bottom-12 right-0 z-20 h-[185px] w-[48%] overflow-hidden 
            rounded-[25px] border-[5px] border-white shadow-xl sm:-right-8 sm:h-[205px]">
              <img
                src="/hand-shake.webp"
                alt="Supermarket shelving and display racks"
                className="h-full w-full object-cover"
              />
            </div>

            {/* EXPERIENCE / BRAND BOX */}
            <div className="absolute -bottom-8 left-3 z-30 rounded-2xl bg-[#F26A12] px-5 py-4 text-white shadow-xl sm:-bottom-10 sm:left-8 sm:px-7 sm:py-5">
              <p className="text-2xl font-extrabold sm:text-3xl">
                ARYA
              </p>
              <p className="text-xs font-semibold tracking-[0.18em]">
                INDUSTRY
              </p>
            </div>

            <div className="absolute -right-5 top-12 hidden grid-cols-4 gap-2 sm:grid">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full bg-[#0B57E3]/50"
                />
              ))}
            </div>
          </motion.div>

          {/* INTRO CONTENT */}
          <motion.div {...animation} className="relative z-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#F26A12]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F26A12] ">
                About Arya Industry
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.13] tracking-tight text-[#0A2457] sm:text-5xl lg:text-[58px]">
              Building Better Spaces for a{" "}
              <span className="text-[#F26A12]">
                Smarter Tomorrow.
              </span>
            </h1>

            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
              Our commitment to quality extends beyond products, fostering
              a safe, inclusive, and dynamic work environment where innovation
              and collaboration thrive in India. At Arya Industry, we aim to
              combine functionality with style, ensuring customer satisfaction
              through reliable solutions and outstanding service across India.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact-us"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F26A12] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-[#E4560A]"
              >
                Get In Touch
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/products"
                className="inline-flex items-center gap-3 rounded-full border border-[#0A2457]/20 px-7 py-4 text-sm font-bold text-[#0A2457] transition hover:border-[#0B57E3] hover:bg-blue-50"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INFRASTRUCTURE HIGHLIGHT */}
      <section className="px-5 py-12 sm:px-8 lg:px-16 lg:py-10">
        <motion.div
          {...animation}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-br from-[#EAF0FF] to-[#F4F7FF] p-7 sm:p-10 lg:p-12"
        >
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/50" />

          <div className="relative grid items-center gap-8 md:grid-cols-[100px_1fr]">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F26A12] text-white shadow-lg shadow-orange-500/20">
              <Award size={42} strokeWidth={1.8} />
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#F26A12]">
                Manufacturing Excellence
              </p>

              <h2 className="max-w-4xl text-2xl font-extrabold leading-tight text-[#0A2457] sm:text-3xl lg:text-4xl">
                India&apos;s Top Supermarket Display Rack Manufacturers,
                Suppliers & Exporters
              </h2>

              <p className="mt-5 max-w-5xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Our advanced infrastructure, equipped with modern machinery,
                is divided into departments like production, quality control,
                and research. This segmentation ensures efficient operations
                and enables us to deliver a wide range of customized products
                within committed timelines. Managed by a skilled workforce,
                our manufacturing unit in India is dedicated to meeting
                diverse client requirements while ensuring high output and
                superior quality.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURE CARDS */}
      <section className="px-5 py-14 sm:px-8 lg:px-16 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <motion.div {...animation} className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F26A12]">
              What Makes Us Different
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0A2457] sm:text-4xl lg:text-5xl">
              Our Strengths
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
              We combine modern infrastructure, quality-focused processes
              and a skilled team to deliver dependable retail display solutions.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  {...animation}
                  transition={{ delay: index * 0.12, duration: 0.7 }}
                  className="group rounded-[25px] border border-slate-100 bg-white p-8 shadow-[0_10px_45px_rgba(10,36,87,0.07)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(10,36,87,0.12)]"
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2457] text-white transition group-hover:bg-[#F26A12]">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0A2457]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-7 h-1 w-12 rounded-full bg-[#F26A12] transition-all duration-300 group-hover:w-20" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY ASSURANCE */}
      <section className="relative overflow-hidden bg-[#06183E] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-28">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-[70px] border-white/[0.04]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#0B57E3]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

          <motion.div {...animation}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#F26A12]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                Quality Assurance
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              {" "}
              <span className="text-[#FF8A1F]">Quality Is at the Heart of Everything We Do.</span>
            </h2>

            <p className="mt-7 text-base leading-8 !text-white">
              We are a quality-centric company providing high-quality Fruits
              and Vegetable Racks, Departmental Racks, Supermarket Display
              Racks, Heavy-Duty Racks, Contemporary Bookshelves, Shopping
              Baskets and many more. Our products are made with high-quality
              raw materials and advanced technology, with a focus on
              international quality standards.
            </p>

            <p className="mt-4 text-base leading-8 !text-white">
              Each product is tested at every stage of production to maintain
              quality and sustainability standards. We are committed to
              delivering durable and reliable solutions for our clients
              across India.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {qualityPoints.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-[#FF8A1F]"
                  />
                  <span className="text-sm font-medium text-white/90">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...animation}
            className="relative"
          >
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[30px] border-2 border-[#F26A12] sm:-right-6 sm:-top-6" />

            <div className="relative h-[350px] overflow-hidden rounded-[30px] sm:h-[480px]">
              <img
                src="/green rack.webp"
                alt="Quality supermarket display shelving"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06183E]/65 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <div className="inline-flex items-center gap-3 rounded-xl bg-white/95 px-5 py-4 text-[#0A2457] shadow-xl backdrop-blur">
                  <ShieldCheck className="text-[#F26A12]" size={30} />
                  <div>
                    <p className="font-extrabold">Quality Focused</p>
                    <p className="text-xs text-slate-500">
                      From material to finished product
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <motion.div
            {...animation}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -bottom-5 -left-5 h-[75%] w-[75%] rounded-[30px] bg-[#F26A12]" />

            <div className="relative h-[350px] overflow-hidden rounded-[30px] shadow-2xl sm:h-[480px]">
              <img
                src="/medical.webp"
                alt="Arya Industry professional team"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -right-3 -top-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0A2457] text-white shadow-xl sm:-right-6 sm:h-24 sm:w-24">
              <Users size={42} />
            </div>
          </motion.div>

          <motion.div
            {...animation}
            className="order-1 lg:order-2"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#F26A12]" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#F26A12]">
                Our Team
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#0A2457] sm:text-4xl lg:text-5xl">
              Driven by People, Powered by{" "}
              <span className="text-[#F26A12]">Passion.</span>
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-600">
              Our professional and passionate team is the key to our success
              in India. Consisting of engineers, quality experts and sales
              and marketing professionals, our team works together to satisfy
              industry requirements while ensuring customer satisfaction.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We regularly conduct training sessions, seminars and workshops
              to stay updated with technological advancements and industry
              trends. This helps our workforce stay current with the latest
              innovations and support smooth manufacturing operations.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-blue-50 p-5">
                <Target className="mb-3 text-[#0B57E3]" size={28} />
                <h3 className="font-bold text-[#0A2457]">
                  Customer Focus
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Understanding and meeting client requirements.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <Lightbulb className="mb-3 text-[#F26A12]" size={28} />
                <h3 className="font-bold text-[#0A2457]">
                  Innovation
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Staying informed about evolving industry trends.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-16 lg:pb-10">
        <motion.div
          {...animation}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-r from-[#0A2457] to-[#0B57E3] px-7 py-12 text-center text-white sm:px-12 sm:py-16"
        >
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[45px] border-white/[0.07]" />
          <div className="absolute -bottom-36 -left-16 h-72 w-72 rounded-full border-[45px] border-white/[0.07]" />

          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F26A12]">
              <PackageCheck size={32} />
            </div>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl !text-white">
              Looking for Reliable Display Rack Solutions?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 !text-white sm:text-base">
              Connect with Arya Industry to discuss your requirements and
              explore display rack solutions for your business.
            </p>

            <a
              href="/contact-us"
              className="group mt-8 inline-flex items-center text-[18px] gap-3 rounded-full bg-[#F26A12]
               px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#E4560A]"
            >
              Contact Our Team
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
