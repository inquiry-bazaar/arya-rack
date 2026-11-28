import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Arya Insulation",
  description: "Learn how Arya Insulation handles information submitted through this website.",
};

const sections = [
  {
    title: "Information you provide",
    paragraphs: [
      "When you contact us or submit an inquiry, you may provide details such as your name, phone number, email address, city, product interest, and project requirements.",
      "Please do not include sensitive personal information in an inquiry.",
    ],
  },
  {
    title: "How we use your information",
    paragraphs: [
      "We use the information you provide to respond to questions, discuss product and project requirements, prepare requested information or quotations, and follow up on your inquiry.",
      "We do not sell personal information submitted through this website.",
    ],
  },
  {
    title: "Sharing and retention",
    paragraphs: [
      "We may share relevant information with service providers who help us operate our business or respond to your inquiry, and where disclosure is required by law. We limit such sharing to what is reasonably needed for those purposes.",
      "We keep inquiry information for as long as needed to respond, maintain business records, and meet applicable legal requirements.",
    ],
  },
  {
    title: "Your choices and questions",
    paragraphs: [
      "You may contact us to ask about, correct, or request deletion of personal information you have provided. We may need to retain certain records where required by law or for legitimate business recordkeeping.",
      "For privacy questions or requests, email aryaindustry36@gmail.com.",
    ],
  },
  {
    title: "Updates to this policy",
    paragraphs: [
      "We may update this policy as our website or practices change. The latest version will be posted on this page with its updated date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fa] px-5 py-12 sm:px-8 sm:py-16">
      <article className="mx-auto max-w-4xl rounded-2xl bg-white px-6 py-9 shadow-sm sm:px-10 sm:py-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26A12]">
          Arya Insulation
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0A2457] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: November 28, 2026</p>
        <p className="mt-7 leading-7 text-slate-700">
          This policy explains how Arya Insulation handles information you choose to provide when using this website or contacting us through it.
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
          <Link href="/terms-and-conditions" className="hover:underline">Terms &amp; Conditions</Link>
          <Link href="/contact-us" className="hover:underline">Contact us</Link>
        </nav>
      </article>
    </main>
  );
}
