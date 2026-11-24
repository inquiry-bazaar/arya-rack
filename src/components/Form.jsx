
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
  Maximize2,
  FileText,
  ChevronDown,
  ArrowRight,
  PencilRuler,
  Layers,
  Wrench,
  CheckCircle2,
} from "lucide-react";

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

const areas = [
  "Below 200 sq. ft.",
  "200 – 500 sq. ft.",
  "500 – 1,000 sq. ft.",
  "1,000 – 2,500 sq. ft.",
  "Above 2,500 sq. ft.",
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
  area: "",
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

    if (errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: undefined,
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
        console.log("Quote request:", data);
      }

      setStatus("done");
    } catch {
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
    "h-[54px] w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 pl-12 pr-4 text-[14px] font-medium text-[#12469C] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#12469C] focus:bg-white focus:ring-4 focus:ring-[#12469C]/10";

  const iconClass =
    "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#12469C]";

  return (
    <section
      id="get-a-quote"
      aria-labelledby="form-heading"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#F8FAFC] px-5 
      py-10 sm:px-8 lg:px-10 xl:px-12"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 xl:gap-16">

        {/* LEFT CONTENT */}

        <div className="relative z-10">

          <motion.div {...fade(0, 15)}>
            <div className="mb-6 flex items-center gap-4 text-[13px] font-bold uppercase tracking-[2px] text-[#12469C]">
              <span className="h-[2px] w-10 bg-[#F67516]" />
              Get a Quote
            </div>
          </motion.div>

          <motion.h1
            id="form-heading"
            {...fade(0.1)}
            className="text-[38px] font-bold leading-[1.12] tracking-[-1.5px] text-[#172B4D] sm:text-5xl xl:text-[58px]"
          >
            Let's Build Your Perfect{" "}
            <span className="relative inline-block text-[#12469C]">
              Retail Space
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
            className="mt-8 max-w-[450px] text-[15px] leading-8 text-slate-500 sm:text-base"
          >
            From planning to installation, Arya Insulation
            provides complete racking solutions tailored
            to your store.
          </motion.p>

          {/* FEATURES */}

          <ul className="mt-10 flex items-start gap-0">
            {features.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                {...fade(0.3 + i * 0.12, 20)}
                className={`flex max-w-[145px] flex-1 flex-col items-center gap-3 px-2 text-center text-[12px] font-semibold leading-5 text-[#172B4D] sm:px-4 sm:text-sm ${
                  i !== 0 ? "border-l border-slate-200" : ""
                }`}
              >
                <motion.span
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -4, rotate: -3 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-[#12469C] shadow-sm ring-1 ring-slate-100 sm:h-[66px] sm:w-[66px]"
                >
                  <Icon size={30} strokeWidth={1.7} />
                </motion.span>

                {label}
              </motion.li>
            ))}
          </ul>

        </div>

        {/* RIGHT IMAGE + FORM */}

        <div className="relative flex min-w-0 flex-col items-center">

          {/* IMAGE */}

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative h-[260px] w-full overflow-hidden rounded-xl bg-slate-200 sm:h-[330px] lg:absolute lg:-left-12 lg:top-1/2 lg:h-[75%] lg:w-[65%] lg:-translate-y-1/2 xl:-left-16"
          >
            {image && (
              <img
                src={image}
                alt="Blue and white retail racking in a store"
                className="h-full w-full object-cover"
              />
            )}
          </motion.div>

          {/* FORM CARD */}

          <motion.div
            {...fade(0.2, 35)}
            className="relative z-10 mt-[-35px] w-full max-w-[680px] rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_20px_60px_-25px_rgba(18,52,122,0.18)] sm:mt-[-45px] sm:p-8 lg:mt-0 lg:ml-auto lg:w-[76%] lg:p-7 xl:w-[72%] xl:p-9"
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
                    you on {data.mobile} with a layout and
                    quotation.
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

                  <div className="mb-2 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-3">
                    <Store
                      size={34}
                      strokeWidth={1.7}
                      className="text-[#12469C]"
                    />

                    <h2 className="text-[24px] font-bold tracking-tight text-[#172B4D] sm:text-[27px]">
                      Request a{" "}
                      <span className="text-[#F67516]">
                        Free Quote
                      </span>
                    </h2>
                  </div>

                  <motion.div
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-7 mt-3 h-1 w-20 rounded-full bg-[#12469C]"
                  />

                  {/* NAME + MOBILE */}

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <div>
                      <label className="relative block">
                        <User
                          size={20}
                          className={iconClass}
                        />

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
                        <Phone
                          size={20}
                          className={iconClass}
                        />

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
                      <Mail
                        size={20}
                        className={iconClass}
                      />

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

                  {/* STORE TYPE + AREA */}

                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <label className="relative block">
                      <Store
                        size={20}
                        className={iconClass}
                      />

                      <select
                        className={`${inputClass} cursor-pointer pr-10 ${
                          data.storeType ? "" : "text-slate-400"
                        }`}
                        required
                        value={data.storeType}
                        onChange={set("storeType")}
                        aria-label="Shop or store type"
                      >
                        <option value="" disabled>
                          Shop / Store Type
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

                    <label className="relative block">
                      <Maximize2
                        size={20}
                        className={iconClass}
                      />

                      <select
                        className={`${inputClass} cursor-pointer pr-10 ${
                          data.area ? "" : "text-slate-400"
                        }`}
                        required
                        value={data.area}
                        onChange={set("area")}
                        aria-label="Approximate area"
                      >
                        <option value="" disabled>
                          Approx. Area (sq. ft.)
                        </option>

                        {areas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={19}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#12469C]"
                      />
                    </label>

                  </div>

                  {/* MESSAGE */}

                  <label className="relative block">
                    <FileText
                      size={20}
                      className="pointer-events-none absolute left-4 top-4 text-[#12469C]"
                    />

                    <textarea
                      className="min-h-[115px] w-full resize-y rounded-lg border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-sm font-medium text-[#12469C] outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#12469C] focus:bg-white focus:ring-4 focus:ring-[#12469C]/10"
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

                  <div className="mt-7 flex justify-center">

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={
                        reduce
                          ? undefined
                          : { y: -3, scale: 1.02 }
                      }
                      whileTap={
                        reduce
                          ? undefined
                          : { scale: 0.97 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="group flex h-[58px] w-full items-center justify-center gap-3 rounded-full bg-[#F67516] px-7 text-[17px] font-bold text-white shadow-md shadow-orange-500/20 transition-colors duration-300 hover:bg-[#E6650D] disabled:cursor-wait disabled:opacity-60 sm:max-w-[340px] sm:text-lg"
                    >
                      {status === "sending"
                        ? "Sending..."
                        : "Get a Quote Now"}

                      <motion.span
                        animate={
                          reduce
                            ? undefined
                            : { x: [0, 5, 0] }
                        }
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight size={23} />
                      </motion.span>
                    </motion.button>

                  </div>

                </motion.form>
              )}

            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
