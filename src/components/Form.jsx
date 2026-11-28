
"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  User,
  Phone,
  Mail,
  Store,
  MapPin,
  FileText,
  ChevronDown,
  ArrowRight,
  PencilRuler,
  Layers,
  Wrench,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { openInquiryWhatsApp, sendInquiry } from "@/lib/inquiries";

const BLUE = "#12469C";
const ORANGE = "#F67516";

const storeTypes = [
  "Pharmacy / Medical store",
  "Supermarket / Kirana",
  "General store",
  "Stationery / Gift shop",
  "Garments / Fashion",
  "Electronics / Mobile",
  "Warehouse / Godown",
  "Other",
];

const locations = [
  "Delhi",
  "New Delhi",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Gurugram",
  "Faridabad",
  "Other",
];

const features = [
  { icon: PencilRuler, label: "Smart Planning" },
  { icon: Layers, label: "Quality Manufacturing" },
  { icon: Wrench, label: "Hassle-Free Installation" },
];

const empty = {
  name: "",
  mobile: "",
  email: "",
  storeType: "",
  location: "",
  message: "",
};

const ease = [0.22, 1, 0.36, 1];

export default function Form({
  onSubmit,
  image = "/r2zc3tfbbmdoezexsefm.webp",
}) {
  const reduce = useReducedMotion();

  const [data, setData] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (key) => (e) => {
    setData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));

    if (errors[key] || errors.form) {
      setErrors((prev) => ({
        ...prev,
        [key]: undefined,
        form: undefined,
      }));
    }
  };

  const validate = () => {
    const e = {};

    if (!data.name.trim()) {
      e.name = "Please enter your name.";
    }

    const mobile = data.mobile.replace(/[\s-]/g, "");

    if (!/^(?:\+?91)?[6-9]\d{9}$/.test(mobile)) {
      e.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (
      data.email &&
      !/^\S+@\S+\.\S+$/.test(data.email)
    ) {
      e.email = "Enter a valid email address.";
    }

    if (!data.storeType) {
      e.storeType = "Please select your store type.";
    }

    if (!data.location) {
      e.location = "Please select your location.";
    }

    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) return;

    setStatus("sending");

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        await sendInquiry({
          name: data.name,
          phone: data.mobile,
          email: data.email,
          place: data.location,
          product: data.storeType,
          message: data.message,
        });
        openInquiryWhatsApp({
          name: data.name,
          phone: data.mobile,
          email: data.email,
          product: data.storeType,
          message: data.message,
        });
      }

      setStatus("done");
    } catch (error) {
      console.error("Homepage quote submission failed:", error);
      setStatus("idle");
      setErrors({
        form: "Something went wrong. Please try again.",
      });
    }
  };

  const fade = (delay = 0, y = 25) => ({
    initial: reduce ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: 0.7,
      ease,
      delay,
    },
  });

  const FieldError = ({ name }) =>
    errors[name] ? (
      <span className="mt-1.5 block pl-1 text-xs font-semibold text-red-500">
        {errors[name]}
      </span>
    ) : null;

  const inputClass =
    "h-[54px] w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-[14px] font-medium text-[#12469C] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#12469C] focus:bg-white focus:ring-4 focus:ring-[#12469C]/10";

  const iconClass =
    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#12469C]";

  return (
    <section
      id="get-a-quote"
      aria-labelledby="form-heading"
      className="relative isolate w-full overflow-hidden bg-[#F4F7FC] px-5 py-16 
      sm:px-8 sm:py-13 lg:px-10 lg:py-15"
    >
      {/* BACKGROUND DECORATION */}

      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-orange-200/30 blur-[110px]" />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">

        {/* LEFT CONTENT */}

        <div className="relative z-10">

          <motion.div {...fade(0, 15)}>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[1.8px] text-[#12469C] shadow-sm">
              <Sparkles size={15} className="text-[#F67516]" />
              Let's Get Started
            </div>
          </motion.div>

          <motion.h1
            id="form-heading"
            {...fade(0.1)}
            className="mt-7 max-w-[600px] text-[38px] font-extrabold leading-[1.13] tracking-[-1.5px] text-[#172B4D] sm:text-5xl xl:text-[60px]"
          >
            Let's Create a Store That{" "}
            <span className="relative inline-block text-[#12469C]">
              Stands Out.
              <svg
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-0 h-3 w-full"
              >
                <motion.path
                  d="M2 10 C 70 3, 170 6, 298 6"
                  fill="none"
                  stroke={ORANGE}
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="mt-8 max-w-[480px] text-[15px] leading-8 text-slate-500 sm:text-base"
          >
            Planning a new retail store or upgrading your
            existing space? Arya Insulation delivers complete
            retail racking solutions designed around your
            business needs.
          </motion.p>

          {/* FEATURES */}

          <ul className="mt-10 grid grid-cols-3 gap-2 sm:gap-4">
            {features.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                {...fade(0.3 + i * 0.12, 20)}
                className="flex flex-col items-start gap-3"
              >
                <motion.span
                  whileHover={
                    reduce ? undefined : { y: -5, rotate: -3 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-white text-[#12469C] shadow-sm sm:h-14 sm:w-14"
                >
                  <Icon size={25} strokeWidth={1.7} />
                </motion.span>

                <span className="max-w-[130px] text-[11px] font-bold leading-5 text-[#172B4D] sm:text-sm">
                  {label}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* IMAGE */}

          <motion.div
            {...fade(0.45, 25)}
            className="relative mt-10 hidden h-[230px] w-full max-w-[540px] overflow-hidden rounded-2xl bg-slate-200 shadow-xl shadow-blue-900/10 sm:block lg:h-[260px]"
          >
            {image && (
              <img
                src={image}
                alt="Retail store display racks"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#071D42]/65 via-transparent to-transparent" />

          </motion.div>

        </div>

        {/* RIGHT FORM */}

        <div className="relative z-10 min-w-0">

          {/* FORM DECORATION */}

          <div className="absolute -right-4 -top-5 hidden h-24 w-24 rounded-2xl border-[10px] border-orange-100/70 sm:block" />

          <motion.div
            {...fade(0.2, 35)}
            className="relative w-full rounded-2xl border border-white bg-white p-5 shadow-[0_25px_80px_-25px_rgba(18,52,122,0.22)] sm:rounded-3xl sm:p-8 lg:p-8 xl:p-10"
          >

            <AnimatePresence mode="wait" initial={false}>

              {status === "done" ? (

                /* SUCCESS MESSAGE */

                <motion.div
                  key="success"
                  role="status"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[440px] flex-col items-center justify-center gap-4 px-2 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 14,
                    }}
                  >
                    <CheckCircle2
                      size={68}
                      strokeWidth={1.6}
                      className="text-emerald-500"
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[#172B4D]">
                    Thank you, {data.name.split(" ")[0]}!
                  </h3>

                  <p className="max-w-sm text-sm leading-7 text-slate-500">
                    We have your request. Our team will call
                    you on {data.mobile} to discuss your retail
                    racking requirements and quotation.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setData(empty);
                      setErrors({});
                      setStatus("idle");
                    }}
                    className="mt-3 font-semibold text-[#12469C] underline underline-offset-4 transition-colors hover:text-[#F67516]"
                  >
                    Send another request
                  </button>
                </motion.div>

              ) : (

                /* FORM */

                <motion.form
                  key="form"
                  onSubmit={submit}
                  noValidate
                  exit={{ opacity: 0 }}
                  className="w-full"
                >

                  {/* FORM TITLE */}

                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#12469C]">
                      <Store size={25} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h2 className="text-[23px] font-extrabold tracking-tight text-[#172B4D] sm:text-[27px]">
                        Request a{" "}
                        <span className="text-[#F67516]">
                          Free Quote
                        </span>
                      </h2>

                      <p className="mt-1 text-xs text-slate-400">
                        Tell us about your retail space
                      </p>
                    </div>
                  </div>

                  <div className="mb-7 mt-5 h-[1px] w-full bg-slate-100" />

                  {/* NAME + MOBILE */}

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label className="relative block">
                        <User size={19} className={iconClass} />

                        <input
                          className={inputClass}
                          placeholder="Your Name *"
                          autoComplete="name"
                          value={data.name}
                          onChange={set("name")}
                          aria-label="Your name"
                          aria-invalid={!!errors.name}
                        />
                      </label>

                      <FieldError name="name" />
                    </div>

                    <div>
                      <label className="relative block">
                        <Phone size={19} className={iconClass} />

                        <input
                          className={inputClass}
                          type="tel"
                          inputMode="tel"
                          placeholder="Mobile Number *"
                          autoComplete="tel"
                          value={data.mobile}
                          onChange={set("mobile")}
                          aria-label="Mobile number"
                          aria-invalid={!!errors.mobile}
                        />
                      </label>

                      <FieldError name="mobile" />
                    </div>

                  </div>

                  {/* EMAIL */}

                  <div className="mb-4">
                    <label className="relative block">
                      <Mail size={19} className={iconClass} />

                      <input
                        className={inputClass}
                        type="email"
                        placeholder="Email Address"
                        autoComplete="email"
                        value={data.email}
                        onChange={set("email")}
                        aria-label="Email address"
                        aria-invalid={!!errors.email}
                      />
                    </label>

                    <FieldError name="email" />
                  </div>

                  {/* STORE TYPE + LOCATION */}

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label className="relative block">
                        <Store size={19} className={iconClass} />

                        <select
                          className={`${inputClass} cursor-pointer pr-10 ${
                            data.storeType ? "" : "text-slate-400"
                          }`}
                          value={data.storeType}
                          onChange={set("storeType")}
                          aria-label="Shop or store type"
                          aria-invalid={!!errors.storeType}
                        >
                          <option value="" disabled>
                            Shop / Store Type *
                          </option>

                          {storeTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={19}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#12469C]"
                        />
                      </label>

                      <FieldError name="storeType" />
                    </div>

                    <div>
                      <label className="relative block">
                        <MapPin size={19} className={iconClass} />

                        <select
                          className={`${inputClass} cursor-pointer pr-10 ${
                            data.location ? "" : "text-slate-400"
                          }`}
                          value={data.location}
                          onChange={set("location")}
                          aria-label="Your location"
                          aria-invalid={!!errors.location}
                        >
                          <option value="" disabled>
                            Select Location *
                          </option>

                          {locations.map((location) => (
                            <option key={location} value={location}>
                              {location}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={19}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#12469C]"
                        />
                      </label>

                      <FieldError name="location" />
                    </div>

                  </div>

                  {/* MESSAGE */}

                  <label className="relative block">
                    <FileText
                      size={19}
                      className="pointer-events-none absolute left-4 top-4 text-[#12469C]"
                    />

                    <textarea
                      className="min-h-[115px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-sm font-medium text-[#12469C] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#12469C] focus:bg-white focus:ring-4 focus:ring-[#12469C]/10"
                      placeholder="Tell us your requirement..."
                      value={data.message}
                      onChange={set("message")}
                      aria-label="Your requirement"
                    />
                  </label>

                  {/* FORM ERROR */}

                  {errors.form && (
                    <p
                      role="alert"
                      className="mt-3 text-sm font-semibold text-red-500"
                    >
                      {errors.form}
                    </p>
                  )}

                  {/* SUBMIT BUTTON */}

                  <div className="mt-6">
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={
                        reduce ? undefined : { y: -3, scale: 1.015 }
                      }
                      whileTap={
                        reduce ? undefined : { scale: 0.97 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="group flex h-[58px] w-full items-center justify-center gap-3 rounded-full bg-[#F67516] px-7 text-[16px] font-bold text-white shadow-lg shadow-orange-500/20 transition-colors duration-300 hover:bg-[#E6650D] disabled:cursor-wait disabled:opacity-60 sm:text-lg"
                    >
                      {status === "sending"
                        ? "Sending..."
                        : "Get a Quote Now"}

                      <motion.span
                        animate={
                          reduce ? undefined : { x: [0, 5, 0] }
                        }
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight size={22} />
                      </motion.span>
                    </motion.button>
                  </div>

                  <p className="mt-4 text-center text-[11px] leading-5 text-slate-400">
                    Share your details and our team will get
                    in touch with you shortly.
                  </p>

                </motion.form>
              )}

            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
