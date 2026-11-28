export async function sendInquiry(inquiry) {
  const response = await fetch("/api/inquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...inquiry,
      platform: `${window.location.hostname}${window.location.pathname}`,
    }),
  });

  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error("The enquiry service returned an invalid response.");
  }

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || "Failed to send your enquiry.");
  }
}

export function openInquiryWhatsApp({ name, email, phone, product, message }) {
  const whatsappText = `Hi, I am ${name}.

Email: ${email || "N/A"}
Product: ${product || "N/A"}

Message: ${message || "N/A"}

Contact: ${phone}`;
  const whatsappUrl = `https://wa.me/918587901795?text=${encodeURIComponent(
    whatsappText
  )}`;

  window.open(whatsappUrl, "_blank");
}
