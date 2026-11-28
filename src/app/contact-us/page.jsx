import Contact from "./Contact";


export const metadata = {
  title: "About Arya Insulation | Supermarket Rack Manufacturer in India",

  description:
    "Learn about Arya Insulation, a supplier of supermarket display racks, departmental racks, fruits and vegetable racks, heavy-duty racks and retail shelving solutions across India.",

  keywords: [
    "About Arya Insulation",
    "Supermarket Rack Manufacturer in India",
    "Display Rack Supplier",
    "Departmental Racks",
    "Heavy Duty Racks",
    "Retail Display Rack Manufacturer",
  ],

  alternates: {
    canonical: "https://www.yourdomain.com/about-us/",
  },

  openGraph: {
    title: "Display Rack Quote in Delhi | Contact Arya Insulation",
    description:
"Call or WhatsApp +91 97112 82675 for a free display rack quote. Visit Arya Insulation Pvt. Ltd. near Coca-Cola Factory, Najafgarh, South West Delhi 110043."
  
  }
};

export default function page() {
  return <Contact/>;
}