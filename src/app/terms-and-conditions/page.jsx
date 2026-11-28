import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Arya Insulation",
  description: "Read the terms that apply when using the Arya Insulation website.",
};

const sections = [
  {
    title: "Using this website",
    paragraphs: [
      "You may use this website to learn about Arya Insulation, our products, and our services, and to contact us with genuine inquiries. Do not misuse the website, interfere with its operation, or attempt to access systems or information without authorization.",
    ],
  },
  {
    title: "Product information and inquiries",
    paragraphs: [
      "Product descriptions, images, dimensions, availability, and other information are provided for general reference and may change. Images and illustrations may differ from the final product.",
      "Submitting an inquiry does not create an order or contract. Pricing, specifications, delivery, installation, and other terms will be confirmed separately in a written quotation or order confirmation.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "Unless otherwise indicated, the website content, branding, text, graphics, and product images are owned by or used with permission by Arya Insulation. You may not reproduce or commercially use this material without prior written permission, except where applicable law allows.",
    ],
  },
  {
    title: "Third-party services and links",
    paragraphs: [
      "This website may link to third-party websites or services for convenience. We do not control those services and are not responsible for their content, availability, or terms. Your use of them is subject to their own terms and policies.",
    ],
  },
  {
    title: "Disclaimer and liability",
    paragraphs: [
      "The website is provided for general information and is made available on an “as is” basis. To the extent permitted by law, Arya Insulation makes no guarantee that the website will always be available, error-free, or suitable for a particular purpose.",
      "Nothing in these terms limits any rights or liabilities that cannot legally be excluded. To the extent permitted by law, Arya Insulation is not liable for indirect or consequential loss arising from use of this website.",
    ],
  },
  {
    title: "Changes and contact",
    paragraphs: [
      "We may update these terms by posting a revised version on this page. Continued use of the website after an update means you accept the revised terms.",
      "For questions about these terms, email aryaindustry36@gmail.com.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] px-5 py-12 sm:px-8 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-2xl bg-white px-6 py-9 shadow-sm sm:px-10 sm:py-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26A12]">
          Arya Insulation
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0A2457] sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: November 28, 2026</p>
        <p className="mt-7 leading-7 text-slate-700">
          These terms apply to your use of the Arya Insulation website. By using this website, you agree to these terms.
        </p>

        <div className="mt-9 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-[#0A2457]">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-7 text-slate-700">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm font-semibold text-[#0B57E3]" aria-label="Legal pages">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/contact-us" className="hover:underline">Contact us</Link>
        </nav>
      </article>
    </main>
  );
}
