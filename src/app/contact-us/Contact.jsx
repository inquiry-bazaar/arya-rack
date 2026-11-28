
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Send,
  Clock,
  Headphones,
  CheckCircle2,
  Globe,
  ArrowRight,
  Building2,
  ShieldCheck,
  Factory,
  PackageCheck,
} from "lucide-react";
import Popup from "@/components/Popup";
import { openInquiryWhatsApp, sendInquiry } from "@/lib/inquiries";

const C = {
  navy: "#0A2457",
  navyDeep: "#06183E",
  blue: "#0B57E3",
  orange: "#F26A12",
  orangeLight: "#FF8A1F",
  orangeDark: "#E4560A",
};

const products = [
  "Supermarket Display Racks",
  "Grocery Display Racks",
  "Fruit & Vegetable Racks",
  "Departmental Store Racks",
  "Heavy Duty Racks",
  "Garment Display Racks",
  "Pharmacy Display Racks",
  "Other Products",
];

const GOOGLE_BUSINESS_URL = "https://maps.app.goo.gl/tZeM2MWPVeogfQP29";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Our Team",
    value: "+91-8587901795",

    href: "tel:+918587901795",
    color: "blue",
  },
 
  {
    icon: Mail,
    title: "Email Us",
    value: "aryaindustry36@gmail.com",
    detail: "We will reply shortly",
    href: "mailto:aryaindustry36@gmail.com",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "India",
    detail: "Ground Floor Plote AT Kh No-13. 18/1 And 8 G Near Cocacola Factory Najafgarh South West Delhi-110043",
    href: GOOGLE_BUSINESS_URL,
    color: "orange",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Contact() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    try {
      await sendInquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        place: "N/A",
        product: formData.product,
        message: formData.message,
      });
      setStatus("✅ Enquiry sent successfully!");
      openInquiryWhatsApp({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        product: formData.product,
        message: formData.message,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        product: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact enquiry submission failed:", error);
      setStatus("❌ Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#06183E] text-white">

        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-white/[0.07]" />
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full border border-white/[0.07]" />
        <div className="absolute -bottom-52 -left-32 h-[500px] w-[500px] rounded-full bg-[#0B57E3]/20 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-14 sm:gap-12 sm:px-8 sm:pb-24 sm:pt-28 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:pb-32">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 
            bg-white/[0.07] px-5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-[#F26A12]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                Let&apos;s Connect
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl 
            lg:text-[76px] !text-white">
              Let&apos;s Build
              
                Something
              
              <span className="block">Great Together.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 !text-white sm:text-lg">
              Looking for reliable supermarket display racks and retail
              shelving solutions? Connect with Arya Insulation. Our team is
              ready to understand your requirements and help you find the
              right solution.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                type="button"
                onClick={() => setInquiryOpen(true)}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F26A12] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#E4560A] sm:w-auto sm:px-7 sm:py-4"
              >
                Send An Inquiry
                <ArrowUpRight size={19} />
              </button>

              <a
                href="https://wa.me/918587901795"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/25 px-5 py-3.5 text-sm font-bold text-white transition hover:border-[#F26A12] hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4"
              >
                <MessageCircle size={19} />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/15 pt-6 sm:mt-12 sm:gap-5 sm:pt-8">
              {[
                ["01", "Expert Guidance"],
                ["02", "Quality Products"],
                ["03", "Customer Support"],
              ].map(([num, label]) => (
                <div key={num}>
                  <span className="text-sm font-black text-[#FF8A1F]">
                    {num}
                  </span>
                  <p className="mt-2 text-xs font-semibold leading-5 text-blue-100/80 sm:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -right-2 -top-2 h-full w-full rounded-[24px] bg-[#F26A12] sm:-right-4 sm:-top-4 sm:rounded-[28px]" />

            <div className="relative rounded-[22px] bg-white p-5 text-[#0A2457] shadow-2xl sm:rounded-[26px] sm:p-9">

              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F26A12]">
                    Start A Conversation
                  </span>
                  <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    Get In Touch.
                  </h2>
                 
                </div>

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0A2457] text-white sm:flex">
                  <Send size={25} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                   
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F26A12] focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div>
               
                    <input
                      type="tel"
                      name="phone"
                      required
                      minLength={10}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="w-full rounded-xl border border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F26A12] focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div>
                 
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F26A12] focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Interested Product *
                  </label>
                  <select
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F26A12] focus:bg-white focus:ring-4 focus:ring-orange-100"
                  >
                    <option value="">Choose a product</option>
                    {products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
           
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-[#F7F9FC] px-4 py-3.5 text-sm outline-none transition focus:border-[#F26A12] focus:bg-white focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#F26A12] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-[#E4560A]"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                  <ArrowRight size={19} className="transition group-hover:translate-x-1" />
                </button>

                {status && (
                  <p role="status" className="text-center text-sm font-semibold text-slate-600">
                    {status}
                  </p>
                )}

                <p className="text-center text-xs text-slate-400">
                  Your details are only used to respond to your inquiry.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative z-10 mx-auto -mt-8 w-full max-w-7xl px-4 sm:-mt-10 sm:px-8 lg:px-3">
        <div className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white
         shadow-[0_15px_55px_rgba(6,24,62,0.10)] sm:grid-cols-2 lg:grid-cols-3">

          {contactDetails.map((item, index) => {
            const Icon = item.icon;
            const isOrange = item.color === "orange";

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={isOrange && item.href.startsWith("http") ? "_blank" : undefined}
                rel={isOrange && item.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group flex min-w-0 items-center gap-4 p-5 transition hover:bg-[#F7F9FC] sm:p-7 ${
                  index !== contactDetails.length - 1 ? "lg:border-r lg:border-slate-100" : ""
                }`}
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white transition group-hover:-translate-y-1 ${
                    isOrange ? "bg-[#F26A12]" : "bg-[#0A2457]"
                  }`}
                >
                  <Icon size={24} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {item.title}
                  </p>
                  <p className="mt-1 break-words text-sm font-extrabold text-[#0A2457] group-hover:text-[#F26A12]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {item.detail}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

 

    
{/* LOCATION / MAP SECTION */}
<section className="bg-[#F5F6F3] px-4 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
  <div className="mx-auto max-w-[1400px]">

    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26A12]">
          Find Us
        </span>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">
          Let&apos;s Connect <span className="text-[#F26A12]">In Person.</span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-slate-500">
        Connect with Arya Insulation to discuss your retail display
        rack requirements and explore our solutions.
      </p>
    </div>

    <div className="grid overflow-hidden bg-white shadow-xl lg:grid-cols-[1fr_360px]">

      {/* GOOGLE MAP IFRAME */}
      <div className="relative h-[320px] sm:h-[480px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d224146.35148607552!2d76.995778!3d28.621167!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM3JzE2LjIiTiA3NsKwNTknNDQuOCJF!5e0!3m2!1sen!2sus!4v1795259569576!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Arya Insulation Location"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      {/* LOCATION INFORMATION */}
      <div className="flex flex-col justify-center bg-[#071D49] p-6 text-white sm:p-12">

        <div className="flex h-14 w-14 items-center justify-center bg-[#F26A12]">
          <Building2 size={27} />
        </div>

        <p className="mt-9 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
          Arya Insulation
        </p>

        <h3 className="mt-3 text-2xl font-extrabold !text-white sm:text-3xl">
          Your Retail Display Partner.
        </h3>

        <p className="mt-5 text-sm leading-8 !text-white">
          Get in touch with our team for product information,
          customized rack solutions and business inquiries.
        </p>

        <div className="my-8 h-px bg-white/15" />

        <a
          href="tel:+918587901795"
          className="flex items-center gap-3 text-sm font-semibold transition hover:text-orange-400 sm:gap-4"
        >
          <Phone size={20} className="text-[#F26A12]" />
          +91 8587901795
        </a>

        <a
          href="mailto:aryaindustry36@gmail.com"
          className="mt-6 flex items-center gap-4 break-all text-sm font-semibold transition hover:text-orange-400"
        >
          <Mail size={20} className="shrink-0 text-[#F26A12]" />
          aryaindustry36@gmail.com
        </a>

        <a
          href={GOOGLE_BUSINESS_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center gap-3 text-sm font-semibold transition hover:text-orange-400"
        >
          <MapPin size={20} className="shrink-0 text-[#F26A12]" />
          View location on Google Maps
        </a>

      </div>
    </div>
  </div>
</section>


    

      <Popup open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </main>
  );
}
