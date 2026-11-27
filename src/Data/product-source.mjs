import {
  ShoppingBasket,
  Apple,
  Shirt,
  Footprints,
  BriefcaseMedical,
  Smartphone,
  Sparkles,
  Cookie,
  Hammer,
  BookOpen,
  LayoutGrid,
  Store,
} from "lucide-react";

export const CATEGORIES = [
  {
    title: "Supermarket & Grocery Display Racks",
    icon: ShoppingBasket,
    image: "/Cosmetic-Display-Racks.webp",
    href: "/supermarket-grocery-display-racks",
  },
  {
    title: "Fruit & Vegetable Display Racks",
    icon: Apple,
    image: "/supermarket.webp",
    href: "/fruit-vegetable-display-racks",
  },
  {
    title: "Garment & Clothing Display Racks",
    icon: Shirt,
    image: "/clothes.webp",
    href: "/garment-clothing-display-racks",
  },
  {
    title: "Footwear & Shoe Display Racks",
    icon: Footprints,
    image: "/shoe rack.webp",
    href: "/footwear-shoe-display-racks",
  },
  {
    title: "Pharmacy & Medical Store Racks",
    icon: BriefcaseMedical,
    image: "/medical.webp",
    href: "/pharmacy-medical-store-racks",
  },
  {
    title: "Mobile & Electronics Display Racks",
    icon: Smartphone,
    image: "/mobile-electronics-display-racks.webp",
    href: "/mobile-electronics-display-racks",
  },
  {
    title: "Cosmetic, Beauty & Accessories Display Racks",
    icon: Sparkles,
    image: "/cosmetic-beauty-accessories-display-racks.webp",
    href: "/cosmetic-beauty-accessories-display-racks",
  },
  {
    title: "Bakery, Snacks & Confectionery Display Racks",
    icon: Cookie,
    image: "/bakery-snacks-confectionery-display-racks.webp",
    href: "/bakery-snacks-confectionery-display-racks",
  },
  {
    title: "Hardware, Paint & Tool Display Racks",
    icon: Hammer,
    image: "/hardware-paint-tool-display-racks.webp",
    href: "/hardware-paint-tool-display-racks",
  },
  {
    title: "Stationery, Book & Toy Display Racks",
    icon: BookOpen,
    image: "/stationery-book-toy-display-racks.webp",
    href: "/stationery-book-toy-display-racks",
  },
  {
    title: "Wall Mounted & Slatwall Display Systems",
    icon: LayoutGrid,
    image: "/wall-mounted-slatwall-display-systems.webp",
    href: "/wall-mounted-slatwall-display-systems",
  },
  {
    title: "Promotional & Countertop Display Stands",
    icon: Store,
    image: "/promotional-countertop-display-stands.webp",
    href: "/promotional-countertop-display-stands",
  },
];

export const raw = [
  // ===================== Supermarket & Grocery Display Racks =====================
  {
    id: "double-sided-gondola-supermarket-rack",
    slug: "double-sided-gondola-supermarket-rack",
    title: "Double Sided Gondola Supermarket Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "product/Bright White Gondola Shelf Studio Shot.webp",
    gallery: ["products/double-sided-gondola-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding floor display rack by Arya Insulation Pvt Ltd, designed for central aisles, supermarkets and hypermarket product displays. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding floor display rack",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Central aisles, supermarkets and hypermarket product displays",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops double sided gondola supermarket rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for central aisles, supermarkets and hypermarket product displays. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Single-sided or multi-sided merchandising configuration, as applicable",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the double sided gondola supermarket rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Double Sided Gondola Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures double sided gondola supermarket rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "double-sided-gondola-supermarket-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Single Sided Wall Gondola Rack", slug: "single-sided-wall-gondola-rack", image: "/product/Single Sided Wall Gondola Rack.webp" },
      { title: "End Cap Gondola Display Rack", slug: "end-cap-gondola-display-rack", image: "/product/End Cap Gondola Display Rack.webp" },
      { title: "Corner Gondola Display Rack", slug: "corner-gondola-display-rack", image: "/product/Modern Green-Trimmed Supermarket Display - Copy.webp" },
      { title: "Perforated Back Panel Grocery Rack", slug: "perforated-back-panel-grocery-rack", image: "/product/Perforated Pegboard Wall Panel.webp" },
    ],
  },
  {
    id: "single-sided-wall-gondola-rack",
    slug: "single-sided-wall-gondola-rack",
    title: "Single Sided Wall Gondola Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "product/Single Sided Wall Gondola Rack.webp",
    gallery: ["products/single-sided-wall-gondola-rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for supermarket wall sections. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Supermarket wall sections",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops single sided wall gondola rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for supermarket wall sections. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the single sided wall gondola rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Single Sided Wall Gondola Rack | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures single sided wall gondola rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "single-sided-wall-gondola-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "End Cap Gondola Display Rack", slug: "end-cap-gondola-display-rack", image: "/product/End Cap Gondola Display Rack.webp" },
      { title: "Corner Gondola Display Rack", slug: "corner-gondola-display-rack", image: "/product/Modern Green-Trimmed Supermarket Display - Copy.webp" },
      { title: "Perforated Back Panel Grocery Rack", slug: "perforated-back-panel-grocery-rack", image: "/product/Perforated Pegboard Wall Panel.webp" },
      { title: "Wire Mesh Back Grocery Display Rack", slug: "wire-mesh-back-grocery-display-rack", image: "/product/Red and White Retail Gondola Shelf.webp" },
    ],
  },
  {
    id: "end-cap-gondola-display-rack",
    slug: "end-cap-gondola-display-rack",
    title: "End Cap Gondola Display Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/End Cap Gondola Display Rack.webp",
    gallery: ["/product/End Cap Gondola Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding floor display rack by Arya Insulation Pvt Ltd, designed for aisle ends & offer displays. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding floor display rack",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Aisle ends & offer displays",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops end cap gondola display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for aisle ends & offer displays. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Single-sided or multi-sided merchandising configuration, as applicable",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the end cap gondola display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "End Cap Gondola Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures end cap gondola display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "end-cap-gondola-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Corner Gondola Display Rack", slug: "corner-gondola-display-rack", image: "/product/Modern Green-Trimmed Supermarket Display - Copy.webp" },
      { title: "Perforated Back Panel Grocery Rack", slug: "perforated-back-panel-grocery-rack", image: "/product/Perforated Pegboard Wall Panel.webp" },
      { title: "Wire Mesh Back Grocery Display Rack", slug: "wire-mesh-back-grocery-display-rack", image: "/product/Red and White Retail Gondola Shelf.webp" },
      { title: "Heavy Duty Supermarket Storage Rack", slug: "heavy-duty-supermarket-storage-rack", image: "/product/Heavy Duty Supermarket Storage Rack.webp" },
    ],
  },
  {
    id: "corner-gondola-display-rack",
    slug: "corner-gondola-display-rack",
    title: "Corner Gondola Display Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Modern Green-Trimmed Supermarket Display - Copy.webp",
    gallery: ["/images/products/corner-gondola-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding floor display rack by Arya Insulation Pvt Ltd, designed for store corners and connecting aisle sections. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding floor display rack",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Store corners and connecting aisle sections",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops corner gondola display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for store corners and connecting aisle sections. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Single-sided or multi-sided merchandising configuration, as applicable",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the corner gondola display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Corner Gondola Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures corner gondola display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "corner-gondola-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Perforated Back Panel Grocery Rack", slug: "perforated-back-panel-grocery-rack", image: "/product/Perforated Pegboard Wall Panel.webp" },
      { title: "Wire Mesh Back Grocery Display Rack", slug: "wire-mesh-back-grocery-display-rack", image: "/product/Red and White Retail Gondola Shelf.webp" },
      { title: "Heavy Duty Supermarket Storage Rack", slug: "heavy-duty-supermarket-storage-rack", image: "/product/Heavy Duty Supermarket Storage Rack.webp" },
      { title: "Wooden Finish Supermarket Rack", slug: "wooden-finish-supermarket-rack", image: "/product/Wooden Finish Supermarket Rack.webp" },
    ],
  },
  {
    id: "perforated-back-panel-grocery-rack",
    slug: "perforated-back-panel-grocery-rack",
    title: "Perforated Back Panel Grocery Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Perforated Pegboard Wall Panel.webp",
    gallery: ["/product/Perforated Pegboard Wall Panel.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for grocery & fmcg stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Grocery & FMCG stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops perforated back panel grocery rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for grocery & fmcg stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the perforated back panel grocery rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Perforated Back Panel Grocery Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures perforated back panel grocery rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "perforated-back-panel-grocery-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wire Mesh Back Grocery Display Rack", slug: "wire-mesh-back-grocery-display-rack", image: "/product/Red and White Retail Gondola Shelf.webp" },
      { title: "Heavy Duty Supermarket Storage Rack", slug: "heavy-duty-supermarket-storage-rack", image: "/product/Heavy Duty Supermarket Storage Rack.webp" },
      { title: "Wooden Finish Supermarket Rack", slug: "wooden-finish-supermarket-rack", image: "/product/Wooden Finish Supermarket Rack.webp" },
      { title: "Gravity Bin Dry Fruit Display Rack", slug: "gravity-bin-dry-fruit-display-rack", image: "/product/Gravity Bin Dry Fruit Display Rack.webp" },
    ],
  },
  {
    id: "wire-mesh-back-grocery-display-rack",
    slug: "wire-mesh-back-grocery-display-rack",
    title: "Wire Mesh Back Grocery Display Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "product/Red and White Retail Gondola Shelf.webp",
    gallery: ["/images/products/wire-mesh-back-grocery-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for packaged food & fmcg. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Wire Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Packaged food & FMCG",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wire mesh back grocery display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for packaged food & fmcg. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wire mesh back grocery display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wire Mesh Back Grocery Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures wire mesh back grocery display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "wire-mesh-back-grocery-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Heavy Duty Supermarket Storage Rack", slug: "heavy-duty-supermarket-storage-rack", image: "/product/Heavy Duty Supermarket Storage Rack.webp" },
      { title: "Wooden Finish Supermarket Rack", slug: "wooden-finish-supermarket-rack", image: "/product/Wooden Finish Supermarket Rack.webp" },
      { title: "Gravity Bin Dry Fruit Display Rack", slug: "gravity-bin-dry-fruit-display-rack", image: "/product/Gravity Bin Dry Fruit Display Rack.webp" },
      { title: "Rice & Pulses Bin Display Rack", slug: "rice-and-pulses-bin-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
    ],
  },
  {
    id: "heavy-duty-supermarket-storage-rack",
    slug: "heavy-duty-supermarket-storage-rack",
    title: "Heavy Duty Supermarket Storage Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Heavy Duty Supermarket Storage Rack.webp",
    gallery: ["/images/products/heavy-duty-supermarket-storage-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for backstore inventory, cartons and bulk stock. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Backstore inventory, cartons and bulk stock",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops heavy duty supermarket storage rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for backstore inventory, cartons and bulk stock. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the heavy duty supermarket storage rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Heavy Duty Supermarket Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures heavy duty supermarket storage rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "heavy-duty-supermarket-storage-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wooden Finish Supermarket Rack", slug: "wooden-finish-supermarket-rack", image: "/product/Wooden Finish Supermarket Rack.webp" },
      { title: "Gravity Bin Dry Fruit Display Rack", slug: "gravity-bin-dry-fruit-display-rack", image: "/product/Gravity Bin Dry Fruit Display Rack.webp" },
      { title: "Rice & Pulses Bin Display Rack", slug: "rice-and-pulses-bin-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Double Sided Gondola Supermarket Rack", slug: "double-sided-gondola-supermarket-rack", image: "/product/Bright White Gondola Shelf Studio Shot.webp" },
    ],
  },
  {
    id: "wooden-finish-supermarket-rack",
    slug: "wooden-finish-supermarket-rack",
    title: "Wooden Finish Supermarket Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "product/Wooden Finish Supermarket Rack.webp",
    gallery: ["/images/products/wooden-finish-supermarket-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for premium & organic stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS with Wooden Laminate may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Premium & organic stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wooden finish supermarket rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS with Wooden Laminate are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for premium & organic stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wooden finish supermarket rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wooden Finish Supermarket Rack | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures wooden finish supermarket rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "wooden-finish-supermarket-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Gravity Bin Dry Fruit Display Rack", slug: "gravity-bin-dry-fruit-display-rack", image: "/product/Gravity Bin Dry Fruit Display Rack.webp" },
      { title: "Rice & Pulses Bin Display Rack", slug: "rice-and-pulses-bin-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Double Sided Gondola Supermarket Rack", slug: "double-sided-gondola-supermarket-rack", image: "/product/Bright White Gondola Shelf Studio Shot.webp" },
      { title: "Single Sided Wall Gondola Rack", slug: "single-sided-wall-gondola-rack", image: "/product/Single Sided Wall Gondola Rack.webp" },
    ],
  },
  {
    id: "gravity-bin-dry-fruit-display-rack",
    slug: "gravity-bin-dry-fruit-display-rack",
    title: "Gravity Bin Dry Fruit Display Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Gravity Bin Dry Fruit Display Rack.webp",
    gallery: ["/images/products/gravity-bin-dry-fruit-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for dry fruits & bulk foods. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; Acrylic + MS Frame may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Dry fruits & bulk foods",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops gravity bin dry fruit display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Acrylic + MS Frame are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for dry fruits & bulk foods. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the gravity bin dry fruit display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Gravity Bin Dry Fruit Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures gravity bin dry fruit display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "gravity-bin-dry-fruit-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Rice & Pulses Bin Display Rack", slug: "rice-and-pulses-bin-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Double Sided Gondola Supermarket Rack", slug: "double-sided-gondola-supermarket-rack", image: "/product/Bright White Gondola Shelf Studio Shot.webp" },
      { title: "Single Sided Wall Gondola Rack", slug: "single-sided-wall-gondola-rack", image: "/product/Single Sided Wall Gondola Rack.webp" },
      { title: "End Cap Gondola Display Rack", slug: "end-cap-gondola-display-rack", image: "/product/End Cap Gondola Display Rack.webp" },
    ],
  },
  {
    id: "rice-and-pulses-bin-display-rack",
    slug: "rice-and-pulses-bin-display-rack",
    title: "Rice & Pulses Bin Display Rack",
    category: "Supermarket & Grocery Display Racks",
    eyebrow: "SUPERMARKET & GROCERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "product/Rice & Pulses Bin Display Rack.webp",
    gallery: ["/images/products/rice-and-pulses-bin-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for loose grains & staples. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS + Acrylic/PVC Bins may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Loose grains & staples",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops rice & pulses bin display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS + Acrylic/PVC Bins are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for loose grains & staples. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the rice & pulses bin display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Rice & Pulses Bin Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures rice & pulses bin display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "rice-and-pulses-bin-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Double Sided Gondola Supermarket Rack", slug: "double-sided-gondola-supermarket-rack", image: "/product/Bright White Gondola Shelf Studio Shot.webp" },
      { title: "Single Sided Wall Gondola Rack", slug: "single-sided-wall-gondola-rack", image: "/product/Single Sided Wall Gondola Rack.webp" },
      { title: "End Cap Gondola Display Rack", slug: "end-cap-gondola-display-rack", image: "/product/End Cap Gondola Display Rack.webp" },
      { title: "Corner Gondola Display Rack", slug: "corner-gondola-display-rack", image: "/product/Modern Green-Trimmed Supermarket Display - Copy.webp" },
    ],
  },
  // ===================== Fruit & Vegetable Display Racks =====================
  {
    id: "fruit-and-vegetable-display-rack",
    slug: "fruit-and-vegetable-display-rack",
    title: "Fruit & Vegetable Display Rack",
    category: "Fruit & Vegetable Display Racks",
    eyebrow: "FRUIT & VEGETABLE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "product/Fruit & Vegetable Display Rack.webp",
    gallery: ["/images/products/fruit-and-vegetable-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding display table by Arya Insulation Pvt Ltd, designed for supermarket fresh section. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding display table",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Supermarket fresh section",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops fruit & vegetable display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for supermarket fresh section. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the fruit & vegetable display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Fruit & Vegetable Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures fruit & vegetable display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "fruit-and-vegetable-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Stepped Fruit Display Rack", slug: "stepped-fruit-display-rack", image: "/product/Stepped Fruit Display Rack.webp" },
      { title: "Vegetable Display Stand", slug: "vegetable-display-stand", image: "/product/Vegetable Display Stand.webp" },
      { title: "Stainless Steel Vegetable Display Rack", slug: "stainless-steel-vegetable-display-rack", image: "/product/Stainless Steel Vegetable Display Rack.webp" },
      { title: "Basket Type Fruit Display Rack", slug: "basket-type-fruit-display-rack", image: "/product/retail_rack_light_gray_square.webp" },
    ],
  },
  {
    id: "stepped-fruit-display-rack",
    slug: "stepped-fruit-display-rack",
    title: "Stepped Fruit Display Rack",
    category: "Fruit & Vegetable Display Racks",
    eyebrow: "FRUIT & VEGETABLE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Stepped Fruit Display Rack.webp",
    gallery: ["/images/products/stepped-fruit-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for fruit shops & supermarkets. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Fruit shops & supermarkets",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops stepped fruit display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for fruit shops & supermarkets. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the stepped fruit display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Stepped Fruit Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures stepped fruit display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "stepped-fruit-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Vegetable Display Stand", slug: "vegetable-display-stand", image: "/product/Vegetable Display Stand.webp" },
      { title: "Stainless Steel Vegetable Display Rack", slug: "stainless-steel-vegetable-display-rack", image: "/product/Stainless Steel Vegetable Display Rack.webp" },
      { title: "Basket Type Fruit Display Rack", slug: "basket-type-fruit-display-rack", image: "/product/retail_rack_light_gray_square.webp" },
      { title: "Island Fruit & Vegetable Display Table", slug: "island-fruit-and-vegetable-display-table", image: "/product/Fruit & Vegetable Display Rack.webp" },
    ],
  },
  {
    id: "vegetable-display-stand",
    slug: "vegetable-display-stand",
    title: "Vegetable Display Stand",
    category: "Fruit & Vegetable Display Racks",
    eyebrow: "FRUIT & VEGETABLE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Vegetable Display Stand.webp",
    gallery: ["/images/products/vegetable-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for organic & premium stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Wood / Pine Crates may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Organic & premium stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops vegetable display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Wood / Pine Crates are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for organic & premium stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the vegetable display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Vegetable Stand Manufacturer | Arya Insulation",
      description: "Get vegetable display stand from Arya Insulation Pvt Ltd. MS steel construction for organic & premium stores. Enquire about sizes and custom configurations.",
      slug: "vegetable-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Stainless Steel Vegetable Display Rack", slug: "stainless-steel-vegetable-display-rack", image: "/product/Stainless Steel Vegetable Display Rack.webp" },
      { title: "Basket Type Fruit Display Rack", slug: "basket-type-fruit-display-rack", image: "/product/retail_rack_light_gray_square.webp" },
      { title: "Island Fruit & Vegetable Display Table", slug: "island-fruit-and-vegetable-display-table", image: "/product/Fruit & Vegetable Display Rack.webp" },
      { title: "Wall Mounted Vegetable Display Rack", slug: "wall-mounted-vegetable-display-rack", image: "/product/Wall Mounted Vegetable Display Rack.webp" },
    ],
  },
  {
    id: "stainless-steel-vegetable-display-rack",
    slug: "stainless-steel-vegetable-display-rack",
    title: "Stainless Steel Vegetable Display Rack",
    category: "Fruit & Vegetable Display Racks",
    eyebrow: "FRUIT & VEGETABLE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Stainless Steel Vegetable Display Rack.webp",
    gallery: ["/images/products/stainless-steel-vegetable-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding display table by Arya Insulation Pvt Ltd, designed for wet & fresh produce areas. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding display table",
      "Material": "MS steel primary structure; Stainless Steel 304 may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Wet & fresh produce areas",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops stainless steel vegetable display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Stainless Steel 304 are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for wet & fresh produce areas. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the stainless steel vegetable display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Stainless Steel Vegetable Rack | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures stainless steel vegetable display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "stainless-steel-vegetable-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Basket Type Fruit Display Rack", slug: "basket-type-fruit-display-rack", image: "/product/retail_rack_light_gray_square.webp" },
      { title: "Island Fruit & Vegetable Display Table", slug: "island-fruit-and-vegetable-display-table", image: "/product/Fruit & Vegetable Display Rack.webp" },
      { title: "Wall Mounted Vegetable Display Rack", slug: "wall-mounted-vegetable-display-rack", image: "/product/Wall Mounted Vegetable Display Rack.webp" },
      { title: "Onion & Potato Storage Display Rack", slug: "onion-and-potato-storage-display-rack", image: "/product/retail_rack_light_gray_square.webp" },
    ],
  },
  {
    id: "basket-type-fruit-display-rack",
    slug: "basket-type-fruit-display-rack",
    title: "Basket Type Fruit Display Rack",
    category: "Fruit & Vegetable Display Racks",
    eyebrow: "FRUIT & VEGETABLE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/retail_rack_light_gray_square.webp",
    gallery: ["/product/retail_rack_light_gray_square.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for fruit shops & mini marts. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Wire + Plastic Baskets may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Fruit shops & mini marts",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops basket type fruit display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire + Plastic Baskets are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for fruit shops & mini marts. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the basket type fruit display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Basket Type Fruit Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures basket type fruit display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "basket-type-fruit-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Island Fruit & Vegetable Display Table", slug: "island-fruit-and-vegetable-display-table", image: "/product/Fruit & Vegetable Display Rack.webp" },
      { title: "Wall Mounted Vegetable Display Rack", slug: "wall-mounted-vegetable-display-rack", image: "/product/Wall Mounted Vegetable Display Rack.webp" },
      { title: "Onion & Potato Storage Display Rack", slug: "onion-and-potato-storage-display-rack", image: "/product/retail_rack_light_gray_square.webp" },
      { title: "Stackable Vegetable Rack", slug: "stackable-vegetable-rack", image: "/product/Stackable Vegetable Rack.webp" },
    ],
  },
  {
    id: "island-fruit-and-vegetable-display-table",
    slug: "island-fruit-and-vegetable-display-table",
    title: "Island Fruit & Vegetable Display Table",
    category: "Fruit & Vegetable Display Racks",
    eyebrow: "FRUIT & VEGETABLE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Fruit & Vegetable Display Rack.webp",
    gallery: ["/images/products/island-fruit-and-vegetable-display-table.webp"],

    // Hero short description
    desc: "MS steel freestanding display table by Arya Insulation Pvt Ltd, designed for store centre fresh zone. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding display table",
      "Material": "MS steel primary structure; MS / Wood may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Store centre fresh zone",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops island fruit & vegetable display table for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Wood are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for store centre fresh zone. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the island fruit & vegetable display table. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Island Fruit & Vegetable Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures island fruit & vegetable display table in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "island-fruit-and-vegetable-display-table",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wall Mounted Vegetable Display Rack", slug: "wall-mounted-vegetable-display-rack", image: "/product/Wall Mounted Vegetable Display Rack.webp" },
      { title: "Onion & Potato Storage Display Rack", slug: "onion-and-potato-storage-display-rack", image: "/product/retail_rack_light_gray_square.webp" },
      { title: "Stackable Vegetable Rack", slug: "stackable-vegetable-rack", image: "/product/Stackable Vegetable Rack.webp" },
      { title: "Fruit & Vegetable Display Rack", slug: "fruit-and-vegetable-display-rack", image: "/product/Fruit & Vegetable Display Rack.webp" },
    ],
  },
  {
    id: "wall-mounted-vegetable-display-rack",
    slug: "wall-mounted-vegetable-display-rack",
    title: "Wall Mounted Vegetable Display Rack",
    category: "Fruit & Vegetable Display Racks",
    eyebrow: "FRUIT & VEGETABLE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Wall Mounted Vegetable Display Rack.webp",
    gallery: ["/product/Wall Mounted Vegetable Display Rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for vegetable shops (wall side). Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Vegetable shops (wall side)",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wall mounted vegetable display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for vegetable shops (wall side). Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wall mounted vegetable display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wall Mounted Vegetable Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures wall mounted vegetable display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "wall-mounted-vegetable-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Onion & Potato Storage Display Rack", slug: "onion-and-potato-storage-display-rack", image: "/product/retail_rack_light_gray_square.webp" },
      { title: "Stackable Vegetable Rack", slug: "stackable-vegetable-rack", image: "/product/Stackable Vegetable Rack.webp" },
      { title: "Fruit & Vegetable Display Rack", slug: "fruit-and-vegetable-display-rack", image: "/product/Fruit & Vegetable Display Rack.webp" },
      { title: "Stepped Fruit Display Rack", slug: "stepped-fruit-display-rack", image: "/product/Stepped Fruit Display Rack.webp" },
    ],
  },
  {
    id: "onion-and-potato-storage-display-rack",
    slug: "onion-and-potato-storage-display-rack",
    title: "Onion & Potato Storage Display Rack",
    category: "Fruit & Vegetable Display Racks",
    eyebrow: "FRUIT & VEGETABLE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/retail_rack_light_gray_square.webp",
    gallery: ["/product/retail_rack_light_gray_square.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for vegetable shops & kirana. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Wire Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Vegetable shops & kirana",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops onion & potato storage display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for vegetable shops & kirana. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the onion & potato storage display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Onion & Potato Storage Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures onion & potato storage display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "onion-and-potato-storage-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Stackable Vegetable Rack", slug: "stackable-vegetable-rack", image: "/product/Stackable Vegetable Rack.webp" },
      { title: "Fruit & Vegetable Display Rack", slug: "fruit-and-vegetable-display-rack", image: "/product/Fruit & Vegetable Display Rack.webp" },
      { title: "Stepped Fruit Display Rack", slug: "stepped-fruit-display-rack", image: "/product/Stepped Fruit Display Rack.webp" },
      { title: "Vegetable Display Stand", slug: "vegetable-display-stand", image: "/product/Vegetable Display Stand.webp" },
    ],
  },
  {
    id: "stackable-vegetable-rack",
    slug: "stackable-vegetable-rack",
    title: "Stackable Vegetable Rack",
    category: "Fruit & Vegetable Display Racks",
    eyebrow: "FRUIT & VEGETABLE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Stackable Vegetable Rack.webp",
    gallery: ["/images/products/stackable-vegetable-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding display table by Arya Insulation Pvt Ltd, designed for mandi & vegetable vendors. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding display table",
      "Material": "MS steel primary structure; Plastic Crates + MS Stand may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Mandi & vegetable vendors",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops stackable vegetable rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Plastic Crates + MS Stand are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for mandi & vegetable vendors. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Trays, baskets or angled levels can be configured for produce",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the stackable vegetable rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Stackable Vegetable Rack Manufacturer | Arya Insulation",
      description: "Get stackable vegetable rack from Arya Insulation Pvt Ltd. MS steel construction for mandi & vegetable vendors. Enquire about sizes and custom configurations.",
      slug: "stackable-vegetable-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Fruit & Vegetable Display Rack", slug: "fruit-and-vegetable-display-rack", image: "/product/Fruit & Vegetable Display Rack.webp" },
      { title: "Stepped Fruit Display Rack", slug: "stepped-fruit-display-rack", image: "/product/Stepped Fruit Display Rack.webp" },
      { title: "Vegetable Display Stand", slug: "vegetable-display-stand", image: "/product/Vegetable Display Stand.webp" },
      { title: "Stainless Steel Vegetable Display Rack", slug: "stainless-steel-vegetable-display-rack", image: "/product/Stainless Steel Vegetable Display Rack.webp" },
    ],
  },
  // ===================== Garment & Clothing Display Racks =====================
  {
    id: "round-garment-display-rack",
    slug: "round-garment-display-rack",
    title: "Round Garment Display Rack",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Round Garment Display Rack.webp",
    gallery: ["/images/products/round-garment-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for apparel showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Chrome / SS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated or chrome finish, as selected",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Apparel showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops round garment display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Chrome / SS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for apparel showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the round garment display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Round Garment Rack Manufacturer | Arya Insulation",
      description: "Get round garment display rack from Arya Insulation Pvt Ltd. MS steel construction for apparel showrooms. Enquire about sizes and custom configurations.",
      slug: "round-garment-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Two Way Garment Display Rack", slug: "two-way-garment-display-rack", image: "/product/Two Way Garment Display Rack.webp" },
      { title: "Four Way Garment Display Rack", slug: "four-way-garment-display-rack", image: "/product/Four Way Garment Display Rack.webp" },
      { title: "Single Rail Clothes Display Rack", slug: "single-rail-clothes-display-rack", image: "/product/Single Rail Clothes Display Rack.webp" },
      { title: "Double Rail Garment Display Rack", slug: "double-rail-garment-display-rack", image: "/product/Double Rail Garment Display Rack.webp" },
    ],
  },
  {
    id: "two-way-garment-display-rack",
    slug: "two-way-garment-display-rack",
    title: "Two Way Garment Display Rack",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Two Way Garment Display Rack.webp",
    gallery: ["/images/products/two-way-garment-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for apparel showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Chrome / SS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated or chrome finish, as selected",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Apparel showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops two way garment display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Chrome / SS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for apparel showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the two way garment display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Two Way Garment Rack Manufacturer | Arya Insulation",
      description: "Get two way garment display rack from Arya Insulation Pvt Ltd. MS steel construction for apparel showrooms. Enquire about sizes and custom configurations.",
      slug: "two-way-garment-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Four Way Garment Display Rack", slug: "four-way-garment-display-rack", image: "/product/Four Way Garment Display Rack.webp" },
      { title: "Single Rail Clothes Display Rack", slug: "single-rail-clothes-display-rack", image: "/product/Single Rail Clothes Display Rack.webp" },
      { title: "Double Rail Garment Display Rack", slug: "double-rail-garment-display-rack", image: "/product/Double Rail Garment Display Rack.webp" },
      { title: "Wall Mounted Garment Display Rack", slug: "wall-mounted-garment-display-rack", image: "/product/Wall Mounted Garment Display Rack.webp" },
    ],
  },
  {
    id: "four-way-garment-display-rack",
    slug: "four-way-garment-display-rack",
    title: "Four Way Garment Display Rack",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "product/Four Way Garment Display Rack.webp",
    gallery: ["product/four-way-garment-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for apparel showrooms & malls. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Chrome / SS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated or chrome finish, as selected",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Apparel showrooms & malls",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops four way garment display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Chrome / SS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for apparel showrooms & malls. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the four way garment display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Four Way Garment Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures four way garment display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "four-way-garment-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Single Rail Clothes Display Rack", slug: "single-rail-clothes-display-rack", image: "/product/Single Rail Clothes Display Rack.webp" },
      { title: "Double Rail Garment Display Rack", slug: "double-rail-garment-display-rack", image: "/product/Double Rail Garment Display Rack.webp" },
      { title: "Wall Mounted Garment Display Rack", slug: "wall-mounted-garment-display-rack", image: "/product/Wall Mounted Garment Display Rack.webp" },
      { title: "Rolling Garment Rack", slug: "rolling-garment-rack", image: "/product/Rolling Garment Rack.webp" },
    ],
  },
  {
    id: "single-rail-clothes-display-rack",
    slug: "single-rail-clothes-display-rack",
    title: "Single Rail Clothes Display Rack",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Single Rail Clothes Display Rack.webp",
    gallery: ["/images/products/single-rail-clothes-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for boutiques. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / SS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Boutiques",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops single rail clothes display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / SS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for boutiques. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the single rail clothes display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Single Rail Clothes Rack Manufacturer | Arya Insulation",
      description: "Get single rail clothes display rack from Arya Insulation Pvt Ltd. MS steel construction for boutiques. Enquire about sizes and custom configurations.",
      slug: "single-rail-clothes-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Double Rail Garment Display Rack", slug: "double-rail-garment-display-rack", image: "/product/Double Rail Garment Display Rack.webp" },
      { title: "Wall Mounted Garment Display Rack", slug: "wall-mounted-garment-display-rack", image: "/product/Wall Mounted Garment Display Rack.webp" },
      { title: "Rolling Garment Rack", slug: "rolling-garment-rack", image: "/product/Rolling Garment Rack.webp" },
      { title: "Saree Display Rack", slug: "saree-display-rack", image: "/product/Saree Display Rack.webp" },
    ],
  },
  {
    id: "double-rail-garment-display-rack",
    slug: "double-rail-garment-display-rack",
    title: "Double Rail Garment Display Rack",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "product/Double Rail Garment Display Rack.webp",
    gallery: ["/images/products/double-rail-garment-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for boutiques & showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / SS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Boutiques & showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops double rail garment display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / SS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for boutiques & showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the double rail garment display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Double Rail Garment Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures double rail garment display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "double-rail-garment-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wall Mounted Garment Display Rack", slug: "wall-mounted-garment-display-rack", image: "/product/Wall Mounted Garment Display Rack.webp" },
      { title: "Rolling Garment Rack", slug: "rolling-garment-rack", image: "/product/Rolling Garment Rack.webp" },
      { title: "Saree Display Rack", slug: "saree-display-rack", image: "/product/Saree Display Rack.webp" },
      { title: "Innerwear Display Rack", slug: "innerwear-display-rack", image: "/product/Innerwear Display Rack.webp" },
    ],
  },
  {
    id: "wall-mounted-garment-display-rack",
    slug: "wall-mounted-garment-display-rack",
    title: "Wall Mounted Garment Display Rack",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Wall Mounted Garment Display Rack.webp",
    gallery: ["/images/products/wall-mounted-garment-display-rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for showroom walls. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS / Aluminium may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Showroom walls",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wall mounted garment display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Aluminium are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for showroom walls. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wall mounted garment display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wall Mounted Garment Rack Manufacturer | Arya Insulation",
      description: "Get wall mounted garment display rack from Arya Insulation Pvt Ltd. MS steel construction for showroom walls. Enquire about sizes and custom configurations.",
      slug: "wall-mounted-garment-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Rolling Garment Rack", slug: "rolling-garment-rack", image: "/product/Rolling Garment Rack.webp" },
      { title: "Saree Display Rack", slug: "saree-display-rack", image: "/product/Saree Display Rack.webp" },
      { title: "Innerwear Display Rack", slug: "innerwear-display-rack", image: "/product/Innerwear Display Rack.webp" },
      { title: "Nesting Table Garment Display", slug: "nesting-table-garment-display", image: "/product/Nesting Table Garment Display.webp" },
    ],
  },
  {
    id: "rolling-garment-rack",
    slug: "rolling-garment-rack",
    title: "Rolling Garment Rack",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Rolling Garment Rack.webp",
    gallery: ["/images/products/rolling-garment-rack.webp"],

    // Hero short description
    desc: "MS steel movable / rotating display unit by Arya Insulation Pvt Ltd, designed for exhibitions & stock movement. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Movable / rotating display unit",
      "Material": "MS steel primary structure; MS Chrome with Castors may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated or chrome finish, as selected",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Exhibitions & stock movement",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops rolling garment rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Chrome with Castors are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for exhibitions & stock movement. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the rolling garment rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Rolling Garment Rack Manufacturer | Arya Insulation",
      description: "Get rolling garment rack from Arya Insulation Pvt Ltd. MS steel construction for exhibitions & stock movement. Enquire about sizes and custom configurations.",
      slug: "rolling-garment-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Saree Display Rack", slug: "saree-display-rack", image: "/product/Saree Display Rack.webp" },
      { title: "Innerwear Display Rack", slug: "innerwear-display-rack", image: "/product/Innerwear Display Rack.webp" },
      { title: "Nesting Table Garment Display", slug: "nesting-table-garment-display", image: "/product/Nesting Table Garment Display.webp" },
      { title: "Round Garment Display Rack", slug: "round-garment-display-rack", image: "/product/Round Garment Display Rack.webp" },
    ],
  },
  {
    id: "saree-display-rack",
    slug: "saree-display-rack",
    title: "Saree Display Rack",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Saree Display Rack.webp",
    gallery: ["/images/products/saree-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for saree & ethnic wear shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; Wood / MS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Saree & ethnic wear shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops saree display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Wood / MS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for saree & ethnic wear shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the saree display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Saree Rack Manufacturer | Arya Insulation",
      description: "Get saree display rack from Arya Insulation Pvt Ltd. MS steel construction for saree & ethnic wear shops. Enquire about sizes and custom configurations.",
      slug: "saree-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Innerwear Display Rack", slug: "innerwear-display-rack", image: "/product/Innerwear Display Rack.webp" },
      { title: "Nesting Table Garment Display", slug: "nesting-table-garment-display", image: "/product/Nesting Table Garment Display.webp" },
      { title: "Round Garment Display Rack", slug: "round-garment-display-rack", image: "/product/Round Garment Display Rack.webp" },
      { title: "Two Way Garment Display Rack", slug: "two-way-garment-display-rack", image: "/product/Two Way Garment Display Rack.webp" },
    ],
  },
  {
    id: "innerwear-display-rack",
    slug: "innerwear-display-rack",
    title: "Innerwear Display Rack",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Innerwear Display Rack.webp",
    gallery: ["/product/Innerwear Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for lingerie & innerwear stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Wire / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Lingerie & innerwear stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops innerwear display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for lingerie & innerwear stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the innerwear display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Innerwear Rack Manufacturer | Arya Insulation",
      description: "Get innerwear display rack from Arya Insulation Pvt Ltd. MS steel construction for lingerie & innerwear stores. Enquire about sizes and custom configurations.",
      slug: "innerwear-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Nesting Table Garment Display", slug: "nesting-table-garment-display", image: "/product/Nesting Table Garment Display.webp" },
      { title: "Round Garment Display Rack", slug: "round-garment-display-rack", image: "/product/Round Garment Display Rack.webp" },
      { title: "Two Way Garment Display Rack", slug: "two-way-garment-display-rack", image: "/product/Two Way Garment Display Rack.webp" },
      { title: "Four Way Garment Display Rack", slug: "four-way-garment-display-rack", image: "/product/Four Way Garment Display Rack.webp" },
    ],
  },
  {
    id: "nesting-table-garment-display",
    slug: "nesting-table-garment-display",
    title: "Nesting Table Garment Display",
    category: "Garment & Clothing Display Racks",
    eyebrow: "GARMENT & CLOTHING DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Nesting Table Garment Display.webp",
    gallery: ["/images/product/Nesting Table Garment Display.webp"],

    // Hero short description
    desc: "MS steel freestanding display table by Arya Insulation Pvt Ltd, designed for premium apparel stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding display table",
      "Material": "MS steel primary structure; Wood / MDF may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Premium apparel stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops nesting table garment display for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Wood / MDF are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for premium apparel stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Rails, arms or hanging sections can be arranged for apparel",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the nesting table garment display. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Nesting Table Garment Manufacturer | Arya Insulation",
      description: "Get nesting table garment display from Arya Insulation Pvt Ltd. MS steel construction for premium apparel stores. Enquire about sizes and custom configurations.",
      slug: "nesting-table-garment-display",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Round Garment Display Rack", slug: "round-garment-display-rack", image: "/product/Round Garment Display Rack.webp" },
      { title: "Two Way Garment Display Rack", slug: "two-way-garment-display-rack", image: "/product/Two Way Garment Display Rack.webp" },
      { title: "Four Way Garment Display Rack", slug: "four-way-garment-display-rack", image: "/product/Four Way Garment Display Rack.webp" },
      { title: "Single Rail Clothes Display Rack", slug: "single-rail-clothes-display-rack", image: "/product/Single Rail Clothes Display Rack.webp" },
    ],
  },
  // ===================== Footwear & Shoe Display Racks =====================
  {
    id: "wall-mounted-shoe-display-rack",
    slug: "wall-mounted-shoe-display-rack",
    title: "Wall Mounted Shoe Display Rack",
    category: "Footwear & Shoe Display Racks",
    eyebrow: "FOOTWEAR & SHOE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Wall Mounted Shoe Display Rack.webp",
    gallery: ["/product/Wall Mounted Shoe Display Rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for footwear showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS / Glass / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Footwear showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wall mounted shoe display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Glass / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for footwear showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Display levels planned for footwear pairs, boxes or accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wall mounted shoe display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wall Mounted Shoe Rack Manufacturer | Arya Insulation",
      description: "Get wall mounted shoe display rack from Arya Insulation Pvt Ltd. MS steel construction for footwear showrooms. Enquire about sizes and custom configurations.",
      slug: "wall-mounted-shoe-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Floor Standing Shoe Display Rack", slug: "floor-standing-shoe-display-rack", image: "/product/Floor Standing Shoe Display Rack.webp" },
      { title: "Glass & Acrylic Shelf Shoe Display Rack", slug: "glass-and-acrylic-shelf-shoe-display-rack", image: "/product/Glass%20%26%20Acrylic%20Shelf%20Shoe%20Display%20Rack.webp" },
      { title: "Shoe Display Rack", slug: "shoe-display-rack", image: "/product/Shoe Display Rack.webp" },
      { title: "Sports Shoe Display Rack", slug: "sports-shoe-display-rack", image: "/product/Sports Shoe Display Rack.webp" },
    ],
  },
  {
    id: "floor-standing-shoe-display-rack",
    slug: "floor-standing-shoe-display-rack",
    title: "Floor Standing Shoe Display Rack",
    category: "Footwear & Shoe Display Racks",
    eyebrow: "FOOTWEAR & SHOE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Floor Standing Shoe Display Rack.webp",
    gallery: ["/product/Floor Standing Shoe Display Rack.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for footwear shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Footwear shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops floor standing shoe display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for footwear shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Display levels planned for footwear pairs, boxes or accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the floor standing shoe display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Floor Standing Shoe Rack Manufacturer | Arya Insulation",
      description: "Get floor standing shoe display rack from Arya Insulation Pvt Ltd. MS steel construction for footwear shops. Enquire about sizes and custom configurations.",
      slug: "floor-standing-shoe-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Glass & Acrylic Shelf Shoe Display Rack", slug: "glass-and-acrylic-shelf-shoe-display-rack", image: "/product/Glass%20%26%20Acrylic%20Shelf%20Shoe%20Display%20Rack.webp" },
      { title: "Shoe Display Rack", slug: "shoe-display-rack", image: "/product/Shoe Display Rack.webp" },
      { title: "Sports Shoe Display Rack", slug: "sports-shoe-display-rack", image: "/product/Sports Shoe Display Rack.webp" },
      { title: "Ladies & Kids Footwear Display Rack", slug: "ladies-and-kids-footwear-display-rack", image: "/product/Ladies & Kids Footwear Display Rack.webp" },
    ],
  },
  
  {
    id: "shoe-display-rack",
    slug: "shoe-display-rack",
    title: "Shoe Display Rack",
    category: "Footwear & Shoe Display Racks",
    eyebrow: "FOOTWEAR & SHOE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Shoe Display Rack.webp",
    gallery: ["/product/Shoe Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for boutique footwear stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; Wood / MDF may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Boutique footwear stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops shoe display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Wood / MDF are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for boutique footwear stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Display levels planned for footwear pairs, boxes or accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the shoe display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Shoe Rack Manufacturer | Arya Insulation",
      description: "Get shoe display rack from Arya Insulation Pvt Ltd. MS steel construction for boutique footwear stores. Enquire about sizes and custom configurations.",
      slug: "shoe-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Sports Shoe Display Rack", slug: "sports-shoe-display-rack", image: "/product/Sports Shoe Display Rack.webp" },
      { title: "Ladies & Kids Footwear Display Rack", slug: "ladies-and-kids-footwear-display-rack", image: "/product/Ladies & Kids Footwear Display Rack.webp" },
      { title: "Slipper & Chappal Display Rack", slug: "slipper-and-chappal-display-rack", image: "/product/Slipper & Chappal Display Rack.webp" },
      { title: "Socks Display Rack", slug: "socks-display-rack", image: "/product/Socks Display Rack.webp" },
    ],
  },
  {
    id: "sports-shoe-display-rack",
    slug: "sports-shoe-display-rack",
    title: "Sports Shoe Display Rack",
    category: "Footwear & Shoe Display Racks",
    eyebrow: "FOOTWEAR & SHOE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Sports Shoe Display Rack.webp",
    gallery: ["/product/Sports Shoe Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for sports stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Slatwall may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Sports stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops sports shoe display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Slatwall are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for sports stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Display levels planned for footwear pairs, boxes or accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the sports shoe display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Sports Shoe Rack Manufacturer | Arya Insulation",
      description: "Get sports shoe display rack from Arya Insulation Pvt Ltd. MS steel construction for sports stores. Enquire about sizes and custom configurations.",
      slug: "sports-shoe-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Ladies & Kids Footwear Display Rack", slug: "ladies-and-kids-footwear-display-rack", image: "/product/Ladies & Kids Footwear Display Rack.webp" },
      { title: "Slipper & Chappal Display Rack", slug: "slipper-and-chappal-display-rack", image: "/product/Slipper & Chappal Display Rack.webp" },
      { title: "Socks Display Rack", slug: "socks-display-rack", image: "/product/Socks Display Rack.webp" },
      { title: "Wall Mounted Shoe Display Rack", slug: "wall-mounted-shoe-display-rack", image: "/product/Wall Mounted Shoe Display Rack.webp" },
    ],
  },
  {
    id: "ladies-and-kids-footwear-display-rack",
    slug: "ladies-and-kids-footwear-display-rack",
    title: "Ladies & Kids Footwear Display Rack",
    category: "Footwear & Shoe Display Racks",
    eyebrow: "FOOTWEAR & SHOE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Ladies & Kids Footwear Display Rack.webp",
    gallery: ["/product/Ladies & Kids Footwear Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for ladies' sandals, heels, children's shoes and footwear sections. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Frame + Acrylic / MDF Shelves may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Ladies' sandals, heels, children's shoes and footwear sections",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops ladies & kids footwear display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Frame + Acrylic / MDF Shelves are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for ladies' sandals, heels, children's shoes and footwear sections. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Display levels planned for footwear pairs, boxes or accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the ladies & kids footwear display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Ladies & Kids Footwear Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures ladies & kids footwear display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "ladies-and-kids-footwear-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Slipper & Chappal Display Rack", slug: "slipper-and-chappal-display-rack", image: "/product/Slipper & Chappal Display Rack.webp" },
      { title: "Socks Display Rack", slug: "socks-display-rack", image: "/product/Socks Display Rack.webp" },
      { title: "Wall Mounted Shoe Display Rack", slug: "wall-mounted-shoe-display-rack", image: "/product/Wall Mounted Shoe Display Rack.webp" },
      { title: "Floor Standing Shoe Display Rack", slug: "floor-standing-shoe-display-rack", image: "/product/Floor Standing Shoe Display Rack.webp" },
    ],
  },
  {
    id: "slipper-and-chappal-display-rack",
    slug: "slipper-and-chappal-display-rack",
    title: "Slipper & Chappal Display Rack",
    category: "Footwear & Shoe Display Racks",
    eyebrow: "FOOTWEAR & SHOE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Slipper & Chappal Display Rack.webp",
    gallery: ["/product/Slipper & Chappal Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for footwear & general stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Wire Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Footwear & general stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops slipper & chappal display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for footwear & general stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Display levels planned for footwear pairs, boxes or accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the slipper & chappal display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Slipper & Chappal Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures slipper & chappal display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "slipper-and-chappal-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Socks Display Rack", slug: "socks-display-rack", image: "/product/Socks Display Rack.webp" },
      { title: "Wall Mounted Shoe Display Rack", slug: "wall-mounted-shoe-display-rack", image: "/product/Wall Mounted Shoe Display Rack.webp" },
      { title: "Floor Standing Shoe Display Rack", slug: "floor-standing-shoe-display-rack", image: "/product/Floor Standing Shoe Display Rack.webp" },
      { title: "Glass & Acrylic Shelf Shoe Display Rack", slug: "glass-and-acrylic-shelf-shoe-display-rack", image: "/product/Glass%20%26%20Acrylic%20Shelf%20Shoe%20Display%20Rack.webp" },
    ],
  },
  {
    id: "socks-display-rack",
    slug: "socks-display-rack",
    title: "Socks Display Rack",
    category: "Footwear & Shoe Display Racks",
    eyebrow: "FOOTWEAR & SHOE DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Socks Display Rack.webp",
    gallery: ["/product/Socks Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for footwear & apparel stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Wire / Slatwall Hooks may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Footwear & apparel stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops socks display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire / Slatwall Hooks are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for footwear & apparel stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Display levels planned for footwear pairs, boxes or accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the socks display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Socks Rack Manufacturer | Arya Insulation",
      description: "Get socks display rack from Arya Insulation Pvt Ltd. MS steel construction for footwear & apparel stores. Enquire about sizes and custom configurations.",
      slug: "socks-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wall Mounted Shoe Display Rack", slug: "wall-mounted-shoe-display-rack", image: "/product/Wall Mounted Shoe Display Rack.webp" },
      { title: "Floor Standing Shoe Display Rack", slug: "floor-standing-shoe-display-rack", image: "/product/Floor Standing Shoe Display Rack.webp" },
      { title: "Glass & Acrylic Shelf Shoe Display Rack", slug: "glass-and-acrylic-shelf-shoe-display-rack", image: "/product/Glass%20%26%20Acrylic%20Shelf%20Shoe%20Display%20Rack.webp" },
      { title: "Shoe Display Rack", slug: "shoe-display-rack", image: "/product/Shoe Display Rack.webp" },
    ],
  },
  // ===================== Pharmacy & Medical Store Racks =====================
  {
    id: "medical-store-wall-display-rack",
    slug: "medical-store-wall-display-rack",
    title: "Medical Store Wall Display Rack",
    category: "Pharmacy & Medical Store Racks",
    eyebrow: "PHARMACY & MEDICAL STORE RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Medical Store Wall Display Rack.webp",
    gallery: ["/product/Medical Store Wall Display Rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for chemist & pharmacy shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Chemist & pharmacy shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops medical store wall display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for chemist & pharmacy shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, bins or drawers can be arranged for healthcare products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the medical store wall display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Medical Store Wall Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures medical store wall display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "medical-store-wall-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Pharmacy Gondola Display Rack", slug: "pharmacy-gondola-display-rack", image: "/product/Pharmacy Gondola Display Rack.webp" },
      { title: "Medicine Drawer Storage Rack", slug: "medicine-drawer-storage-rack", image: "/product/Medicine Drawer Storage Rack.webp" },
      { title: "Medicine Strip Storage Bin Rack", slug: "medicine-strip-storage-bin-rack", image: "/product/Medicine Strip Storage Bin Rack.webp" },
      { title: "Pharmacy Counter Display Rack", slug: "pharmacy-counter-display-rack", image: "/product/Pharmacy Counter Display Rack.webp" },
    ],
  },
  {
    id: "pharmacy-gondola-display-rack",
    slug: "pharmacy-gondola-display-rack",
    title: "Pharmacy Gondola Display Rack",
    category: "Pharmacy & Medical Store Racks",
    eyebrow: "PHARMACY & MEDICAL STORE RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Pharmacy Gondola Display Rack.webp",
    gallery: ["/product/Pharmacy Gondola Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding floor display rack by Arya Insulation Pvt Ltd, designed for chain pharmacies. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding floor display rack",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Chain pharmacies",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops pharmacy gondola display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for chain pharmacies. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, bins or drawers can be arranged for healthcare products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the pharmacy gondola display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Pharmacy Gondola Rack Manufacturer | Arya Insulation",
      description: "Get pharmacy gondola display rack from Arya Insulation Pvt Ltd. MS steel construction for chain pharmacies. Enquire about sizes and custom configurations.",
      slug: "pharmacy-gondola-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Medicine Drawer Storage Rack", slug: "medicine-drawer-storage-rack", image: "/product/Medicine Drawer Storage Rack.webp" },
      { title: "Medicine Strip Storage Bin Rack", slug: "medicine-strip-storage-bin-rack", image: "/product/Medicine Strip Storage Bin Rack.webp" },
      { title: "Pharmacy Counter Display Rack", slug: "pharmacy-counter-display-rack", image: "/product/Pharmacy Counter Display Rack.webp" },
      { title: "Medicine Display Cabinet", slug: "medicine-display-cabinet", image: "/product/Medicine Display Cabinet.webp" },
    ],
  },
  {
    id: "medicine-drawer-storage-rack",
    slug: "medicine-drawer-storage-rack",
    title: "Medicine Drawer Storage Rack",
    category: "Pharmacy & Medical Store Racks",
    eyebrow: "PHARMACY & MEDICAL STORE RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Medicine Drawer Storage Rack.webp",
    gallery: ["/product/Medicine Drawer Storage Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for pharmacy back storage. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Plastic Drawers may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Pharmacy back storage",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops medicine drawer storage rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Plastic Drawers are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for pharmacy back storage. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, bins or drawers can be arranged for healthcare products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the medicine drawer storage rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Medicine Drawer Storage Rack Manufacturer | Arya Insulation",
      description: "Get medicine drawer storage rack from Arya Insulation Pvt Ltd. MS steel construction for pharmacy back storage. Enquire about sizes and custom configurations.",
      slug: "medicine-drawer-storage-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Medicine Strip Storage Bin Rack", slug: "medicine-strip-storage-bin-rack", image: "/product/Medicine Strip Storage Bin Rack.webp" },
      { title: "Pharmacy Counter Display Rack", slug: "pharmacy-counter-display-rack", image: "/product/Pharmacy Counter Display Rack.webp" },
      { title: "Medicine Display Cabinet", slug: "medicine-display-cabinet", image: "/product/Medicine Display Cabinet.webp" },
      { title: "Perforated Pharmacy Display Rack", slug: "perforated-pharmacy-display-rack", image: "/product/Perforated Pharmacy Display Rack.webp" },
    ],
  },
  {
    id: "medicine-strip-storage-bin-rack",
    slug: "medicine-strip-storage-bin-rack",
    title: "Medicine Strip Storage Bin Rack",
    category: "Pharmacy & Medical Store Racks",
    eyebrow: "PHARMACY & MEDICAL STORE RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Medicine Strip Storage Bin Rack.webp",
    gallery: ["/product/Medicine Strip Storage Bin Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for chemist shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS + Plastic Bins may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Chemist shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops medicine strip storage bin rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS + Plastic Bins are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for chemist shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, bins or drawers can be arranged for healthcare products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the medicine strip storage bin rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Medicine Strip Storage Bin Rack | Arya Insulation",
      description: "Get medicine strip storage bin rack from Arya Insulation Pvt Ltd. MS steel construction for chemist shops. Enquire about sizes and custom configurations.",
      slug: "medicine-strip-storage-bin-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Pharmacy Counter Display Rack", slug: "pharmacy-counter-display-rack", image: "/product/Pharmacy Counter Display Rack.webp" },
      { title: "Medicine Display Cabinet", slug: "medicine-display-cabinet", image: "/product/Medicine Display Cabinet.webp" },
      { title: "Perforated Pharmacy Display Rack", slug: "perforated-pharmacy-display-rack", image: "/product/Perforated Pharmacy Display Rack.webp" },
      { title: "Surgical Items Display Rack", slug: "surgical-items-display-rack", image: "/product/Surgical Items Display Rack.webp" },
    ],
  },
  {
    id: "pharmacy-counter-display-rack",
    slug: "pharmacy-counter-display-rack",
    title: "Pharmacy Counter Display Rack",
    category: "Pharmacy & Medical Store Racks",
    eyebrow: "PHARMACY & MEDICAL STORE RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Pharmacy Counter Display Rack.webp",
    gallery: ["/product/Pharmacy Counter Display Rack.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for pharmacy billing counter. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; MS / Wood may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Pharmacy billing counter",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops pharmacy counter display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Wood are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for pharmacy billing counter. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, bins or drawers can be arranged for healthcare products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the pharmacy counter display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Pharmacy Counter Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures pharmacy counter display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "pharmacy-counter-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Medicine Display Cabinet", slug: "medicine-display-cabinet", image: "/product/Medicine Display Cabinet.webp" },
      { title: "Perforated Pharmacy Display Rack", slug: "perforated-pharmacy-display-rack", image: "/product/Perforated Pharmacy Display Rack.webp" },
      { title: "Surgical Items Display Rack", slug: "surgical-items-display-rack", image: "/product/Surgical Items Display Rack.webp" },
      { title: "Countertop Healthcare Display Stand", slug: "countertop-healthcare-display-stand", image: "/product/Medical%20Store%20Wall%20Display%20Rack.webp" },
    ],
  },
  {
    id: "medicine-display-cabinet",
    slug: "medicine-display-cabinet",
    title: "Medicine Display Cabinet",
    category: "Pharmacy & Medical Store Racks",
    eyebrow: "PHARMACY & MEDICAL STORE RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Medicine Display Cabinet.webp",
    gallery: ["/product/Medicine Display Cabinet.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for chemist shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; Aluminium + Glass may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Chemist shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops medicine display cabinet for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Aluminium + Glass are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for chemist shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, bins or drawers can be arranged for healthcare products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the medicine display cabinet. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Medicine Cabinet Manufacturer | Arya Insulation",
      description: "Get medicine display cabinet from Arya Insulation Pvt Ltd. MS steel construction for chemist shops. Enquire about sizes and custom configurations.",
      slug: "medicine-display-cabinet",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Perforated Pharmacy Display Rack", slug: "perforated-pharmacy-display-rack", image: "/product/Perforated Pharmacy Display Rack.webp" },
      { title: "Surgical Items Display Rack", slug: "surgical-items-display-rack", image: "/product/Surgical Items Display Rack.webp" },
      { title: "Countertop Healthcare Display Stand", slug: "countertop-healthcare-display-stand", image: "/product/Medical%20Store%20Wall%20Display%20Rack.webp" },
      { title: "Medical Store Wall Display Rack", slug: "medical-store-wall-display-rack", image: "/product/Medical Store Wall Display Rack.webp" },
    ],
  },
  {
    id: "perforated-pharmacy-display-rack",
    slug: "perforated-pharmacy-display-rack",
    title: "Perforated Pharmacy Display Rack",
    category: "Pharmacy & Medical Store Racks",
    eyebrow: "PHARMACY & MEDICAL STORE RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Perforated Pharmacy Display Rack.webp",
    gallery: ["/product/Perforated Pharmacy Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for pharmacy hanging products. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Pharmacy hanging products",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops perforated pharmacy display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for pharmacy hanging products. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, bins or drawers can be arranged for healthcare products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the perforated pharmacy display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Perforated Pharmacy Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures perforated pharmacy display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "perforated-pharmacy-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Surgical Items Display Rack", slug: "surgical-items-display-rack", image: "/product/Surgical Items Display Rack.webp" },
      { title: "Countertop Healthcare Display Stand", slug: "countertop-healthcare-display-stand", image: "/product/Medical%20Store%20Wall%20Display%20Rack.webp" },
      { title: "Medical Store Wall Display Rack", slug: "medical-store-wall-display-rack", image: "/product/Medical Store Wall Display Rack.webp" },
      { title: "Pharmacy Gondola Display Rack", slug: "pharmacy-gondola-display-rack", image: "/product/Pharmacy Gondola Display Rack.webp" },
    ],
  },
  {
    id: "surgical-items-display-rack",
    slug: "surgical-items-display-rack",
    title: "Surgical Items Display Rack",
    category: "Pharmacy & Medical Store Racks",
    eyebrow: "PHARMACY & MEDICAL STORE RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Surgical Items Display Rack.webp",
    gallery: ["/product/Surgical Items Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for surgical & medical supply stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / SS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Surgical & medical supply stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops surgical items display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / SS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for surgical & medical supply stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the surgical items display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Surgical Items Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures surgical items display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "surgical-items-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Countertop Healthcare Display Stand", slug: "countertop-healthcare-display-stand", image: "/product/Medical%20Store%20Wall%20Display%20Rack.webp" },
      { title: "Medical Store Wall Display Rack", slug: "medical-store-wall-display-rack", image: "/product/Medical Store Wall Display Rack.webp" },
      { title: "Pharmacy Gondola Display Rack", slug: "pharmacy-gondola-display-rack", image: "/product/Pharmacy Gondola Display Rack.webp" },
      { title: "Medicine Drawer Storage Rack", slug: "medicine-drawer-storage-rack", image: "/product/Medicine Drawer Storage Rack.webp" },
    ],
  },
  {
    id: "countertop-healthcare-display-stand",
    slug: "countertop-healthcare-display-stand",
    title: "Countertop Healthcare Display Stand",
    category: "Pharmacy & Medical Store Racks",
    eyebrow: "PHARMACY & MEDICAL STORE RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Medical%20Store%20Wall%20Display%20Rack.webp",
    gallery: ["/images/products/countertop-healthcare-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for pharmacy counters. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Acrylic / MS Wire may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Pharmacy counters",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops countertop healthcare display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Acrylic / MS Wire are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for pharmacy counters. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the countertop healthcare display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Countertop Healthcare Stand Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures countertop healthcare display stand in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "countertop-healthcare-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Medical Store Wall Display Rack", slug: "medical-store-wall-display-rack", image: "/product/Medical Store Wall Display Rack.webp" },
      { title: "Pharmacy Gondola Display Rack", slug: "pharmacy-gondola-display-rack", image: "/product/Pharmacy Gondola Display Rack.webp" },
      { title: "Medicine Drawer Storage Rack", slug: "medicine-drawer-storage-rack", image: "/product/Medicine Drawer Storage Rack.webp" },
      { title: "Medicine Strip Storage Bin Rack", slug: "medicine-strip-storage-bin-rack", image: "/product/Medicine Strip Storage Bin Rack.webp" },
    ],
  },
  // ===================== Mobile & Electronics Display Racks =====================
  {
    id: "mobile-accessories-display-rack",
    slug: "mobile-accessories-display-rack",
    title: "Mobile Accessories Display Rack",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "product/Rice & Pulses Bin Display Rack.webp",
    gallery: ["/images/products/mobile-accessories-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for mobile shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / MDF may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Mobile shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops mobile accessories display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / MDF are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for mobile shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, holders or hooks can be configured for electronic accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the mobile accessories display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Mobile Accessories Rack Manufacturer | Arya Insulation",
      description: "Get mobile accessories display rack from Arya Insulation Pvt Ltd. MS steel construction for mobile shops. Enquire about sizes and custom configurations.",
      slug: "mobile-accessories-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Slatwall Mobile Accessories Rack", slug: "slatwall-mobile-accessories-rack", image: "/product/Slatwall Mobile Accessories Rack.webp" },
      { title: "Revolving Mobile Accessories Stand", slug: "revolving-mobile-accessories-stand", image: "/product/Revolving Mobile Accessories Stand.webp" },
      { title: "Earphone & Headphone Display Stand", slug: "earphone-and-headphone-display-stand", image: "/product/Earphone & Headphone Display Stand.webp" },
      { title: "Smartwatch Display Stand", slug: "smartwatch-display-stand", image: "/electronics.webp" },
    ],
  },
  {
    id: "slatwall-mobile-accessories-rack",
    slug: "slatwall-mobile-accessories-rack",
    title: "Slatwall Mobile Accessories Rack",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Slatwall Mobile Accessories Rack.webp",
    gallery: ["/images/products/slatwall-mobile-accessories-rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for mobile accessory shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MDF Slatwall + Hooks may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Mobile accessory shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops slatwall mobile accessories rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MDF Slatwall + Hooks are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for mobile accessory shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, holders or hooks can be configured for electronic accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the slatwall mobile accessories rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Slatwall Mobile Accessories Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures slatwall mobile accessories rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "slatwall-mobile-accessories-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Revolving Mobile Accessories Stand", slug: "revolving-mobile-accessories-stand", image: "/product/Revolving Mobile Accessories Stand.webp" },
      { title: "Earphone & Headphone Display Stand", slug: "earphone-and-headphone-display-stand", image: "/product/Earphone & Headphone Display Stand.webp" },
      { title: "Smartwatch Display Stand", slug: "smartwatch-display-stand", image: "/electronics.webp" },
      { title: "Mobile Phone Display Counter", slug: "mobile-phone-display-counter", image: "/product/Mobile Phone Display Counter (1).webp" },
    ],
  },
  {
    id: "revolving-mobile-accessories-stand",
    slug: "revolving-mobile-accessories-stand",
    title: "Revolving Mobile Accessories Stand",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Revolving Mobile Accessories Stand.webp",
    gallery: ["/images/products/revolving-mobile-accessories-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for mobile shop counters. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Mobile shop counters",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops revolving mobile accessories stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for mobile shop counters. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, holders or hooks can be configured for electronic accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the revolving mobile accessories stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Revolving Mobile Accessories Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures revolving mobile accessories stand in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "revolving-mobile-accessories-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Earphone & Headphone Display Stand", slug: "earphone-and-headphone-display-stand", image: "/product/Earphone & Headphone Display Stand.webp" },
      { title: "Smartwatch Display Stand", slug: "smartwatch-display-stand", image: "/electronics.webp" },
      { title: "Mobile Phone Display Counter", slug: "mobile-phone-display-counter", image: "/product/Mobile Phone Display Counter (1).webp" },
      { title: "Tablet & Laptop Display Table", slug: "tablet-and-laptop-display-table", image: "/product/Tablet & Laptop Display Table.webp" },
    ],
  },
  {
    id: "earphone-and-headphone-display-stand",
    slug: "earphone-and-headphone-display-stand",
    title: "Earphone & Headphone Display Stand",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Earphone & Headphone Display Stand.webp",
    gallery: ["/images/products/earphone-and-headphone-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for electronics stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Acrylic / MS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Electronics stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops earphone & headphone display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Acrylic / MS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for electronics stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, holders or hooks can be configured for electronic accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the earphone & headphone display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Earphone & Headphone Stand Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures earphone & headphone display stand in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "earphone-and-headphone-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Smartwatch Display Stand", slug: "smartwatch-display-stand", image: "/electronics.webp" },
      { title: "Mobile Phone Display Counter", slug: "mobile-phone-display-counter", image: "/product/Mobile Phone Display Counter (1).webp" },
      { title: "Tablet & Laptop Display Table", slug: "tablet-and-laptop-display-table", image: "/product/Tablet & Laptop Display Table.webp" },
      { title: "Electronics Gondola Display Rack", slug: "electronics-gondola-display-rack", image: "/product/Empty Cream Gondola Shelving in Supermarket.webp" },
    ],
  },
  {
    id: "smartwatch-display-stand",
    slug: "smartwatch-display-stand",
    title: "Smartwatch Display Stand",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/electronics.webp",
    gallery: ["/images/products/smartwatch-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for electronics & watch stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Electronics & watch stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops smartwatch display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for electronics & watch stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, holders or hooks can be configured for electronic accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the smartwatch display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Smartwatch Stand Manufacturer | Arya Insulation",
      description: "Get smartwatch display stand from Arya Insulation Pvt Ltd. MS steel construction for electronics & watch stores. Enquire about sizes and custom configurations.",
      slug: "smartwatch-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Mobile Phone Display Counter", slug: "mobile-phone-display-counter", image: "/product/Mobile Phone Display Counter (1).webp" },
      { title: "Tablet & Laptop Display Table", slug: "tablet-and-laptop-display-table", image: "/product/Tablet & Laptop Display Table.webp" },
      { title: "Electronics Gondola Display Rack", slug: "electronics-gondola-display-rack", image: "/product/Empty Cream Gondola Shelving in Supermarket.webp" },
      { title: "TV Display Wall Rack", slug: "tv-display-wall-rack", image: "/product/TV Display Wall Rack.webp" },
    ],
  },
  {
    id: "mobile-phone-display-counter",
    slug: "mobile-phone-display-counter",
    title: "Mobile Phone Display Counter",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Mobile Phone Display Counter (1).webp",
    gallery: ["/images/products/mobile-phone-display-counter.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for mobile showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Wood / MDF + Glass may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Mobile showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops mobile phone display counter for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Wood / MDF + Glass are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for mobile showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, holders or hooks can be configured for electronic accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the mobile phone display counter. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Mobile Phone Counter Manufacturer | Arya Insulation",
      description: "Get mobile phone display counter from Arya Insulation Pvt Ltd. MS steel construction for mobile showrooms. Enquire about sizes and custom configurations.",
      slug: "mobile-phone-display-counter",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Tablet & Laptop Display Table", slug: "tablet-and-laptop-display-table", image: "/product/Tablet & Laptop Display Table.webp" },
      { title: "Electronics Gondola Display Rack", slug: "electronics-gondola-display-rack", image: "/product/Empty Cream Gondola Shelving in Supermarket.webp" },
      { title: "TV Display Wall Rack", slug: "tv-display-wall-rack", image: "/product/TV Display Wall Rack.webp" },
      { title: "Home Appliance Display Rack", slug: "home-appliance-display-rack", image: "/product/Home Appliance Display Rack.webp" },
    ],
  },
  {
    id: "tablet-and-laptop-display-table",
    slug: "tablet-and-laptop-display-table",
    title: "Tablet & Laptop Display Table",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Tablet & Laptop Display Table.webp",
    gallery: ["/images/products/tablet-and-laptop-display-table.webp"],

    // Hero short description
    desc: "MS steel freestanding display table by Arya Insulation Pvt Ltd, designed for electronics showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding display table",
      "Material": "MS steel primary structure; MDF / Wood may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Electronics showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops tablet & laptop display table for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MDF / Wood are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for electronics showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the tablet & laptop display table. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Tablet & Laptop Table Manufacturer | Arya Insulation",
      description: "Get tablet & laptop display table from Arya Insulation Pvt Ltd. MS steel construction for electronics showrooms. Enquire about sizes and custom configurations.",
      slug: "tablet-and-laptop-display-table",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Electronics Gondola Display Rack", slug: "electronics-gondola-display-rack", image: "/product/Empty Cream Gondola Shelving in Supermarket.webp" },
      { title: "TV Display Wall Rack", slug: "tv-display-wall-rack", image: "/product/TV Display Wall Rack.webp" },
      { title: "Home Appliance Display Rack", slug: "home-appliance-display-rack", image: "/product/Home Appliance Display Rack.webp" },
      { title: "Mobile Accessories Display Rack", slug: "mobile-accessories-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
    ],
  },
  {
    id: "electronics-gondola-display-rack",
    slug: "electronics-gondola-display-rack",
    title: "Electronics Gondola Display Rack",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Empty Cream Gondola Shelving in Supermarket.webp",
    gallery: ["/images/products/electronics-gondola-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding floor display rack by Arya Insulation Pvt Ltd, designed for electronics hypermarkets. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding floor display rack",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Electronics hypermarkets",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops electronics gondola display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for electronics hypermarkets. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, holders or hooks can be configured for electronic accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the electronics gondola display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Electronics Gondola Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures electronics gondola display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "electronics-gondola-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "TV Display Wall Rack", slug: "tv-display-wall-rack", image: "/product/TV Display Wall Rack.webp" },
      { title: "Home Appliance Display Rack", slug: "home-appliance-display-rack", image: "/product/Home Appliance Display Rack.webp" },
      { title: "Mobile Accessories Display Rack", slug: "mobile-accessories-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Slatwall Mobile Accessories Rack", slug: "slatwall-mobile-accessories-rack", image: "/product/Slatwall Mobile Accessories Rack.webp" },
    ],
  },
  {
    id: "tv-display-wall-rack",
    slug: "tv-display-wall-rack",
    title: "TV Display Wall Rack",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/TV Display Wall Rack.webp",
    gallery: ["/product/TV Display Wall Rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for electronics showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS / MDF may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Electronics showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops tv display wall rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / MDF are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for electronics showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the tv display wall rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "TV Wall Rack Manufacturer | Arya Insulation",
      description: "Get tv display wall rack from Arya Insulation Pvt Ltd. MS steel construction for electronics showrooms. Enquire about sizes and custom configurations.",
      slug: "tv-display-wall-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Home Appliance Display Rack", slug: "home-appliance-display-rack", image: "/product/Home Appliance Display Rack.webp" },
      { title: "Mobile Accessories Display Rack", slug: "mobile-accessories-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Slatwall Mobile Accessories Rack", slug: "slatwall-mobile-accessories-rack", image: "/product/Slatwall Mobile Accessories Rack.webp" },
      { title: "Revolving Mobile Accessories Stand", slug: "revolving-mobile-accessories-stand", image: "/product/Revolving Mobile Accessories Stand.webp" },
    ],
  },
  {
    id: "home-appliance-display-rack",
    slug: "home-appliance-display-rack",
    title: "Home Appliance Display Rack",
    category: "Mobile & Electronics Display Racks",
    eyebrow: "MOBILE & ELECTRONICS DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Home Appliance Display Rack.webp",
    gallery: ["/product/Home Appliance Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for appliance stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Appliance stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops home appliance display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for appliance stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the home appliance display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Home Appliance Rack Manufacturer | Arya Insulation",
      description: "Get home appliance display rack from Arya Insulation Pvt Ltd. MS steel construction for appliance stores. Enquire about sizes and custom configurations.",
      slug: "home-appliance-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Mobile Accessories Display Rack", slug: "mobile-accessories-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Slatwall Mobile Accessories Rack", slug: "slatwall-mobile-accessories-rack", image: "/product/Slatwall Mobile Accessories Rack.webp" },
      { title: "Revolving Mobile Accessories Stand", slug: "revolving-mobile-accessories-stand", image: "/product/Revolving Mobile Accessories Stand.webp" },
      { title: "Earphone & Headphone Display Stand", slug: "earphone-and-headphone-display-stand", image: "/product/Earphone & Headphone Display Stand.webp" },
    ],
  },
  // ===================== Cosmetic, Beauty & Accessories Display Racks =====================
  {
    id: "cosmetic-display-rack",
    slug: "cosmetic-display-rack",
    title: "Cosmetic Display Rack",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Cosmetic Display Rack.webp",
    gallery: ["/images/products/cosmetic-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for cosmetic shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / MDF may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Cosmetic shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops cosmetic display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / MDF are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for cosmetic shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Compact display sections for cosmetics and small accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the cosmetic display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Cosmetic Rack Manufacturer | Arya Insulation",
      description: "Get cosmetic display rack from Arya Insulation Pvt Ltd. MS steel construction for cosmetic shops. Enquire about sizes and custom configurations.",
      slug: "cosmetic-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wall Mounted Cosmetic Display Rack", slug: "wall-mounted-cosmetic-display-rack", image: "/product/Wall Mounted Cosmetic Display Rack.webp" },
      { title: "Cosmetic Display Stand", slug: "cosmetic-display-stand", image: "/product/Cosmetic Display Stand (1).webp" },
      { title: "Countertop Cosmetic Display Stand", slug: "countertop-cosmetic-display-stand", image: "/product/Cosmetic Display Rack.webp" },
      { title: "Makeup Counter Display Unit", slug: "makeup-counter-display-unit", image: "/product/Makeup Counter Display Unit.webp" },
    ],
  },
  {
    id: "wall-mounted-cosmetic-display-rack",
    slug: "wall-mounted-cosmetic-display-rack",
    title: "Wall Mounted Cosmetic Display Rack",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Wall Mounted Cosmetic Display Rack.webp",
    gallery: ["/images/products/wall-mounted-cosmetic-display-rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for beauty stores & malls. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MDF / Aluminium + LED may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Beauty stores & malls",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wall mounted cosmetic display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MDF / Aluminium + LED are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for beauty stores & malls. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Compact display sections for cosmetics and small accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wall mounted cosmetic display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wall Mounted Cosmetic Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures wall mounted cosmetic display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "wall-mounted-cosmetic-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Cosmetic Display Stand", slug: "cosmetic-display-stand", image: "/product/Cosmetic Display Stand (1).webp" },
      { title: "Countertop Cosmetic Display Stand", slug: "countertop-cosmetic-display-stand", image: "/product/Cosmetic Display Rack.webp" },
      { title: "Makeup Counter Display Unit", slug: "makeup-counter-display-unit", image: "/product/Makeup Counter Display Unit.webp" },
      { title: "Perfume Display Rack", slug: "perfume-display-rack", image: "/product/Perfume Display Rack.webp" },
    ],
  },
  {
    id: "cosmetic-display-stand",
    slug: "cosmetic-display-stand",
    title: "Cosmetic Display Stand",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Cosmetic Display Stand (1).webp",
    gallery: ["/images/products/cosmetic-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for cosmetic shop counters. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; MS / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Cosmetic shop counters",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops cosmetic display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for cosmetic shop counters. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Compact display sections for cosmetics and small accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the cosmetic display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Cosmetic Stand Manufacturer | Arya Insulation",
      description: "Get cosmetic display stand from Arya Insulation Pvt Ltd. MS steel construction for cosmetic shop counters. Enquire about sizes and custom configurations.",
      slug: "cosmetic-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Countertop Cosmetic Display Stand", slug: "countertop-cosmetic-display-stand", image: "/product/Cosmetic Display Rack.webp" },
      { title: "Makeup Counter Display Unit", slug: "makeup-counter-display-unit", image: "/product/Makeup Counter Display Unit.webp" },
      { title: "Perfume Display Rack", slug: "perfume-display-rack", image: "/product/Perfume Display Rack.webp" },
      { title: "Skin Care Products Display Rack", slug: "skin-care-products-display-rack", image: "/product/Skin Care Products Display Rack.webp" },
    ],
  },
  {
    id: "countertop-cosmetic-display-stand",
    slug: "countertop-cosmetic-display-stand",
    title: "Countertop Cosmetic Display Stand",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Cosmetic Display Rack.webp",
    gallery: ["/images/products/countertop-cosmetic-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for billing counters. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Billing counters",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops countertop cosmetic display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for billing counters. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Compact display sections for cosmetics and small accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the countertop cosmetic display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Countertop Cosmetic Stand Manufacturer | Arya Insulation",
      description: "Get countertop cosmetic display stand from Arya Insulation Pvt Ltd. MS steel construction for billing counters. Enquire about sizes and custom configurations.",
      slug: "countertop-cosmetic-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Makeup Counter Display Unit", slug: "makeup-counter-display-unit", image: "/product/Makeup Counter Display Unit.webp" },
      { title: "Perfume Display Rack", slug: "perfume-display-rack", image: "/product/Perfume Display Rack.webp" },
      { title: "Skin Care Products Display Rack", slug: "skin-care-products-display-rack", image: "/product/Skin Care Products Display Rack.webp" },
      { title: "Salon & Hair Care Products Display Rack", slug: "salon-and-hair-care-products-display-rack", image: "/product/Salon & Hair Care Products Display Rack.webp" },
    ],
  },
  {
    id: "makeup-counter-display-unit",
    slug: "makeup-counter-display-unit",
    title: "Makeup Counter Display Unit",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Makeup Counter Display Unit.webp",
    gallery: ["/product/Makeup Counter Display Unit.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for beauty stores & malls. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; MDF / Wood + Glass may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Beauty stores & malls",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops makeup counter display unit for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MDF / Wood + Glass are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for beauty stores & malls. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Compact display sections for cosmetics and small accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the makeup counter display unit. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Makeup Counter Unit Manufacturer | Arya Insulation",
      description: "Get makeup counter display unit from Arya Insulation Pvt Ltd. MS steel construction for beauty stores & malls. Enquire about sizes and custom configurations.",
      slug: "makeup-counter-display-unit",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Perfume Display Rack", slug: "perfume-display-rack", image: "/product/Perfume Display Rack.webp" },
      { title: "Skin Care Products Display Rack", slug: "skin-care-products-display-rack", image: "/product/Skin Care Products Display Rack.webp" },
      { title: "Salon & Hair Care Products Display Rack", slug: "salon-and-hair-care-products-display-rack", image: "/product/Salon & Hair Care Products Display Rack.webp" },
      { title: "Imitation Jewellery Display Rack", slug: "imitation-jewellery-display-rack", image: "/product/Imitation Jewellery Display Rack.webp" },
    ],
  },
  {
    id: "perfume-display-rack",
    slug: "perfume-display-rack",
    title: "Perfume Display Rack",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Perfume Display Rack.webp",
    gallery: ["/images/products/perfume-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for perfume & gift stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; Glass / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Perfume & gift stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops perfume display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Glass / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for perfume & gift stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Compact display sections for cosmetics and small accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the perfume display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Perfume Rack Manufacturer | Arya Insulation",
      description: "Get perfume display rack from Arya Insulation Pvt Ltd. MS steel construction for perfume & gift stores. Enquire about sizes and custom configurations.",
      slug: "perfume-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Skin Care Products Display Rack", slug: "skin-care-products-display-rack", image: "/product/Skin Care Products Display Rack.webp" },
      { title: "Salon & Hair Care Products Display Rack", slug: "salon-and-hair-care-products-display-rack", image: "/product/Salon & Hair Care Products Display Rack.webp" },
      { title: "Imitation Jewellery Display Rack", slug: "imitation-jewellery-display-rack", image: "/product/Imitation Jewellery Display Rack.webp" },
      { title: "Sunglasses & Optical Display Stand", slug: "sunglasses-and-optical-display-stand", image: "/product/Sunglasses & Optical Display Stand.webp" },
    ],
  },
  {
    id: "skin-care-products-display-rack",
    slug: "skin-care-products-display-rack",
    title: "Skin Care Products Display Rack",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Skin Care Products Display Rack.webp",
    gallery: ["/images/products/skin-care-products-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for beauty & pharmacy stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Beauty & pharmacy stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops skin care products display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for beauty & pharmacy stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the skin care products display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Skin Care Products Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures skin care products display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "skin-care-products-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Salon & Hair Care Products Display Rack", slug: "salon-and-hair-care-products-display-rack", image: "/product/Salon & Hair Care Products Display Rack.webp" },
      { title: "Imitation Jewellery Display Rack", slug: "imitation-jewellery-display-rack", image: "/product/Imitation Jewellery Display Rack.webp" },
      { title: "Sunglasses & Optical Display Stand", slug: "sunglasses-and-optical-display-stand", image: "/product/Sunglasses & Optical Display Stand.webp" },
      { title: "Cosmetic Display Rack", slug: "cosmetic-display-rack", image: "/product/Cosmetic Display Rack.webp" },
    ],
  },
  {
    id: "salon-and-hair-care-products-display-rack",
    slug: "salon-and-hair-care-products-display-rack",
    title: "Salon & Hair Care Products Display Rack",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Salon & Hair Care Products Display Rack.webp",
    gallery: ["/product/Salon & Hair Care Products Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for salons & spas. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / MDF may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Salons & spas",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops salon & hair care products display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / MDF are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for salons & spas. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the salon & hair care products display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Salon & Hair Care Products Rack | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures salon & hair care products display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "salon-and-hair-care-products-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Imitation Jewellery Display Rack", slug: "imitation-jewellery-display-rack", image: "/product/Imitation Jewellery Display Rack.webp" },
      { title: "Sunglasses & Optical Display Stand", slug: "sunglasses-and-optical-display-stand", image: "/product/Sunglasses & Optical Display Stand.webp" },
      { title: "Cosmetic Display Rack", slug: "cosmetic-display-rack", image: "/product/Cosmetic Display Rack.webp" },
      { title: "Wall Mounted Cosmetic Display Rack", slug: "wall-mounted-cosmetic-display-rack", image: "/product/Wall Mounted Cosmetic Display Rack.webp" },
    ],
  },
  {
    id: "imitation-jewellery-display-rack",
    slug: "imitation-jewellery-display-rack",
    title: "Imitation Jewellery Display Rack",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Imitation Jewellery Display Rack.webp",
    gallery: ["/images/products/imitation-jewellery-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for fancy & artificial jewellery stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Fancy & artificial jewellery stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops imitation jewellery display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for fancy & artificial jewellery stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Compact display sections for cosmetics and small accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the imitation jewellery display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Imitation Jewellery Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures imitation jewellery display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "imitation-jewellery-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Sunglasses & Optical Display Stand", slug: "sunglasses-and-optical-display-stand", image: "/product/Sunglasses & Optical Display Stand.webp" },
      { title: "Cosmetic Display Rack", slug: "cosmetic-display-rack", image: "/product/Cosmetic Display Rack.webp" },
      { title: "Wall Mounted Cosmetic Display Rack", slug: "wall-mounted-cosmetic-display-rack", image: "/product/Wall Mounted Cosmetic Display Rack.webp" },
      { title: "Cosmetic Display Stand", slug: "cosmetic-display-stand", image: "/product/Cosmetic Display Stand (1).webp" },
    ],
  },
  {
    id: "sunglasses-and-optical-display-stand",
    slug: "sunglasses-and-optical-display-stand",
    title: "Sunglasses & Optical Display Stand",
    category: "Cosmetic, Beauty & Accessories Display Racks",
    eyebrow: "COSMETIC, BEAUTY & ACCESSORIES DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Sunglasses & Optical Display Stand.webp",
    gallery: ["/product/Sunglasses & Optical Display Stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for optical shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Acrylic / MS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Optical shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops sunglasses & optical display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Acrylic / MS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for optical shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the sunglasses & optical display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Sunglasses & Optical Stand Manufacturer | Arya Insulation",
      description: "Get sunglasses & optical display stand from Arya Insulation Pvt Ltd. MS steel construction for optical shops. Enquire about sizes and custom configurations.",
      slug: "sunglasses-and-optical-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Cosmetic Display Rack", slug: "cosmetic-display-rack", image: "/product/Cosmetic Display Rack.webp" },
      { title: "Wall Mounted Cosmetic Display Rack", slug: "wall-mounted-cosmetic-display-rack", image: "/product/Wall Mounted Cosmetic Display Rack.webp" },
      { title: "Cosmetic Display Stand", slug: "cosmetic-display-stand", image: "/product/Cosmetic Display Stand (1).webp" },
      { title: "Countertop Cosmetic Display Stand", slug: "countertop-cosmetic-display-stand", image: "/product/Cosmetic Display Rack.webp" },
    ],
  },
  // ===================== Bakery, Snacks & Confectionery Display Racks =====================
  {
    id: "bakery-bread-display-rack",
    slug: "bakery-bread-display-rack",
    title: "Bakery Bread Display Rack",
    category: "Bakery, Snacks & Confectionery Display Racks",
    eyebrow: "BAKERY, SNACKS & CONFECTIONERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Perforated Pegboard Wall Panel.webp",
    gallery: ["/product/Perforated Pegboard Wall Panel.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for bakeries. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Wood may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Bakeries",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops bakery bread display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Wood are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for bakeries. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the bakery bread display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Bakery Bread Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures bakery bread display rack with an MS steel structure for bakeries. Ask us about sizes, finishes and custom display layouts.",
      slug: "bakery-bread-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Cake Display Rack", slug: "cake-display-rack", image: "/product/Cosmetic Display Stand (1).webp" },
      { title: "Cup Cake Display Stand", slug: "cup-cake-display-stand", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Countertop Bread Basket Stand", slug: "countertop-bread-basket-stand", image: "/product/Medical Store Wall Display Rack.webp" },
      { title: "Rusk & Toast Display Rack", slug: "rusk-and-toast-display-rack", image: "/product/Rusk & Toast Display Rack.webp" },
    ],
  },
  {
    id: "cake-display-rack",
    slug: "cake-display-rack",
    title: "Cake Display Rack",
    category: "Bakery, Snacks & Confectionery Display Racks",
    eyebrow: "BAKERY, SNACKS & CONFECTIONERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Cosmetic Display Stand (1).webp",
    gallery: ["/images/products/cake-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for bakeries & cake shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; SS / Glass may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Bakeries & cake shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops cake display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. SS / Glass are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for bakeries & cake shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the cake display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Cake Rack Manufacturer | Arya Insulation",
      description: "Get cake display rack from Arya Insulation Pvt Ltd. MS steel construction for bakeries & cake shops. Enquire about sizes and custom configurations.",
      slug: "cake-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Cup Cake Display Stand", slug: "cup-cake-display-stand", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Countertop Bread Basket Stand", slug: "countertop-bread-basket-stand", image: "/product/Medical Store Wall Display Rack.webp" },
      { title: "Rusk & Toast Display Rack", slug: "rusk-and-toast-display-rack", image: "/product/Rusk & Toast Display Rack.webp" },
      { title: "Biscuit & Cookie Display Rack", slug: "biscuit-and-cookie-display-rack", image: "/product/Revolving Mobile Accessories Stand.webp" },
    ],
  },
  {
    id: "cup-cake-display-stand",
    slug: "cup-cake-display-stand",
    title: "Cup Cake Display Stand",
    category: "Bakery, Snacks & Confectionery Display Racks",
    eyebrow: "BAKERY, SNACKS & CONFECTIONERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Rice & Pulses Bin Display Rack.webp",
    gallery: ["/images/products/cup-cake-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for bakeries & cafes. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Bakeries & cafes",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops cup cake display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for bakeries & cafes. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the cup cake display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Cup Cake Stand Manufacturer | Arya Insulation",
      description: "Get cup cake display stand from Arya Insulation Pvt Ltd. MS steel construction for bakeries & cafes. Enquire about sizes and custom configurations.",
      slug: "cup-cake-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Countertop Bread Basket Stand", slug: "countertop-bread-basket-stand", image: "/product/Medical Store Wall Display Rack.webp" },
      { title: "Rusk & Toast Display Rack", slug: "rusk-and-toast-display-rack", image: "/product/Rusk & Toast Display Rack.webp" },
      { title: "Biscuit & Cookie Display Rack", slug: "biscuit-and-cookie-display-rack", image: "/product/Revolving Mobile Accessories Stand.webp" },
      { title: "Namkeen & Snacks Display Rack", slug: "namkeen-and-snacks-display-rack", image: "/product/Namkeen & Snacks Display Rack.webp" },
    ],
  },
  {
    id: "countertop-bread-basket-stand",
    slug: "countertop-bread-basket-stand",
    title: "Countertop Bread Basket Stand",
    category: "Bakery, Snacks & Confectionery Display Racks",
    eyebrow: "BAKERY, SNACKS & CONFECTIONERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Medical Store Wall Display Rack.webp",
    gallery: ["/images/products/countertop-bread-basket-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for bakery counters. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; MS Wire / Cane may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Bakery counters",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops countertop bread basket stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire / Cane are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for bakery counters. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the countertop bread basket stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Countertop Bread Basket Stand Manufacturer | Arya Insulation",
      description: "Get countertop bread basket stand from Arya Insulation Pvt Ltd. MS steel construction for bakery counters. Enquire about sizes and custom configurations.",
      slug: "countertop-bread-basket-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Rusk & Toast Display Rack", slug: "rusk-and-toast-display-rack", image: "/product/Rusk & Toast Display Rack.webp" },
      { title: "Biscuit & Cookie Display Rack", slug: "biscuit-and-cookie-display-rack", image: "/product/Revolving Mobile Accessories Stand.webp" },
      { title: "Namkeen & Snacks Display Rack", slug: "namkeen-and-snacks-display-rack", image: "/product/Namkeen & Snacks Display Rack.webp" },
      { title: "Chips Display Rack", slug: "chips-display-rack", image: "/product/Namkeen & Snacks Display Rack.webp" },
    ],
  },
  {
    id: "rusk-and-toast-display-rack",
    slug: "rusk-and-toast-display-rack",
    title: "Rusk & Toast Display Rack",
    category: "Bakery, Snacks & Confectionery Display Racks",
    eyebrow: "BAKERY, SNACKS & CONFECTIONERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Rusk & Toast Display Rack.webp",
    gallery: ["/product/Rusk & Toast Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for bakeries & kirana. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Bakeries & kirana",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops rusk & toast display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for bakeries & kirana. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the rusk & toast display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Rusk & Toast Rack Manufacturer | Arya Insulation",
      description: "Get rusk & toast display rack from Arya Insulation Pvt Ltd. MS steel construction for bakeries & kirana. Enquire about sizes and custom configurations.",
      slug: "rusk-and-toast-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Biscuit & Cookie Display Rack", slug: "biscuit-and-cookie-display-rack", image: "/product/Revolving Mobile Accessories Stand.webp" },
      { title: "Namkeen & Snacks Display Rack", slug: "namkeen-and-snacks-display-rack", image: "/product/Namkeen & Snacks Display Rack.webp" },
      { title: "Chips Display Rack", slug: "chips-display-rack", image: "/product/Namkeen & Snacks Display Rack.webp" },
      { title: "Chocolate & Candy Confectionery Display Stand", slug: "chocolate-and-candy-confectionery-display-stand", image: "/product/Chocolate & Candy Confectionery Display Stand.webp" },
    ],
  },
  {
    id: "biscuit-and-cookie-display-rack",
    slug: "biscuit-and-cookie-display-rack",
    title: "Biscuit & Cookie Display Rack",
    category: "Bakery, Snacks & Confectionery Display Racks",
    eyebrow: "BAKERY, SNACKS & CONFECTIONERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Revolving Mobile Accessories Stand.webp",
    gallery: ["/product/Biscuit & Cookie Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for bakeries & general stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Bakeries & general stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops biscuit & cookie display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for bakeries & general stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the biscuit & cookie display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Biscuit & Cookie Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures biscuit & cookie display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "biscuit-and-cookie-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Namkeen & Snacks Display Rack", slug: "namkeen-and-snacks-display-rack", image: "/product/Namkeen & Snacks Display Rack.webp" },
      { title: "Chips Display Rack", slug: "chips-display-rack", image: "/product/Namkeen & Snacks Display Rack.webp" },
      { title: "Chocolate & Candy Confectionery Display Stand", slug: "chocolate-and-candy-confectionery-display-stand", image: "/product/Chocolate & Candy Confectionery Display Stand.webp" },
      { title: "Bakery Bread Display Rack", slug: "bakery-bread-display-rack", image: "/product/Perforated Pegboard Wall Panel.webp" },
    ],
  },
  {
    id: "namkeen-and-snacks-display-rack",
    slug: "namkeen-and-snacks-display-rack",
    title: "Namkeen & Snacks Display Rack",
    category: "Bakery, Snacks & Confectionery Display Racks",
    eyebrow: "BAKERY, SNACKS & CONFECTIONERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Namkeen & Snacks Display Rack.webp",
    gallery: ["/product/Namkeen & Snacks Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for sweet & namkeen shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Sweet & namkeen shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops namkeen & snacks display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for sweet & namkeen shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the namkeen & snacks display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Namkeen & Snacks Rack Manufacturer | Arya Insulation",
      description: "Get namkeen & snacks display rack from Arya Insulation Pvt Ltd. MS steel construction for sweet & namkeen shops. Enquire about sizes and custom configurations.",
      slug: "namkeen-and-snacks-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Chips Display Rack", slug: "chips-display-rack", image: "/product/Namkeen & Snacks Display Rack.webp" },
      { title: "Chocolate & Candy Confectionery Display Stand", slug: "chocolate-and-candy-confectionery-display-stand", image: "/product/Chocolate & Candy Confectionery Display Stand.webp" },
      { title: "Bakery Bread Display Rack", slug: "bakery-bread-display-rack", image: "/product/Perforated Pegboard Wall Panel.webp" },
      { title: "Cake Display Rack", slug: "cake-display-rack", image: "/product/Cosmetic Display Stand (1).webp" },
    ],
  },
  {
    id: "chips-display-rack",
    slug: "chips-display-rack",
    title: "Chips Display Rack",
    category: "Bakery, Snacks & Confectionery Display Racks",
    eyebrow: "BAKERY, SNACKS & CONFECTIONERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Namkeen & Snacks Display Rack.webp",
    gallery: ["/product/chips-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for general & kirana stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Wire Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "General & kirana stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops chips display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for general & kirana stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the chips display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Chips Rack Manufacturer | Arya Insulation",
      description: "Get chips display rack from Arya Insulation Pvt Ltd. MS steel construction for general & kirana stores. Enquire about sizes and custom configurations.",
      slug: "chips-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Chocolate & Candy Confectionery Display Stand", slug: "chocolate-and-candy-confectionery-display-stand", image: "/product/Chocolate & Candy Confectionery Display Stand.webp" },
      { title: "Bakery Bread Display Rack", slug: "bakery-bread-display-rack", image: "/product/Perforated Pegboard Wall Panel.webp" },
      { title: "Cake Display Rack", slug: "cake-display-rack", image: "/product/Cosmetic Display Stand (1).webp" },
      { title: "Cup Cake Display Stand", slug: "cup-cake-display-stand", image: "/product/Rice & Pulses Bin Display Rack.webp" },
    ],
  },
  {
    id: "chocolate-and-candy-confectionery-display-stand",
    slug: "chocolate-and-candy-confectionery-display-stand",
    title: "Chocolate & Candy Confectionery Display Stand",
    category: "Bakery, Snacks & Confectionery Display Racks",
    eyebrow: "BAKERY, SNACKS & CONFECTIONERY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Chocolate & Candy Confectionery Display Stand.webp",
    gallery: ["/product/Chocolate & Candy Confectionery Display Stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for chocolates, candies, toffees and confectionery products. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; MS / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Chocolates, candies, toffees and confectionery products",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops chocolate & candy confectionery display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for chocolates, candies, toffees and confectionery products. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the chocolate & candy confectionery display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Chocolate & Candy Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures chocolate & candy confectionery display stand in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "chocolate-and-candy-confectionery-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Bakery Bread Display Rack", slug: "bakery-bread-display-rack", image: "/product/Perforated Pegboard Wall Panel.webp" },
      { title: "Cake Display Rack", slug: "cake-display-rack", image: "/product/Cosmetic Display Stand (1).webp" },
      { title: "Cup Cake Display Stand", slug: "cup-cake-display-stand", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Countertop Bread Basket Stand", slug: "countertop-bread-basket-stand", image: "/product/Medical Store Wall Display Rack.webp" },
    ],
  },
  // ===================== Hardware, Paint & Tool Display Racks =====================
  {
    id: "hardware-store-display-rack",
    slug: "hardware-store-display-rack",
    title: "Hardware Store Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Hardware Store Display Rack.png",
    gallery: ["/product/Hardware Store Display Rack.png"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for hardware shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Hardware shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops hardware store display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for hardware shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, pegboard fittings or bins can be selected for hardware products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the hardware store display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Hardware Store Rack Manufacturer | Arya Insulation",
      description: "Get hardware store display rack from Arya Insulation Pvt Ltd. MS steel construction for hardware shops. Enquire about sizes and custom configurations.",
      slug: "hardware-store-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Tool Display Pegboard Rack", slug: "tool-display-pegboard-rack", image: "/product/Wooden Finish Supermarket Rack.webp" },
      { title: "Fastener Bin Display Rack", slug: "fastener-bin-display-rack", image: "/product/Fastener Bin Display Rack.webp" },
      { title: "Paint Can Display Rack", slug: "paint-can-display-rack", image: "/product/Paint Can Display Rack.webp" },
      { title: "Electrical Items Display Rack", slug: "electrical-items-display-rack", image: "/product/Electrical Items Display Rack.webp" },
    ],
  },
  {
    id: "tool-display-pegboard-rack",
    slug: "tool-display-pegboard-rack",
    title: "Tool Display Pegboard Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Wooden Finish Supermarket Rack.webp",
    gallery: ["/product/Wooden Finish Supermarket Rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for tool & hardware stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS Perforated Panel may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Tool & hardware stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops tool display pegboard rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Perforated Panel are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for tool & hardware stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, pegboard fittings or bins can be selected for hardware products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the tool display pegboard rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Tool Pegboard Rack Manufacturer | Arya Insulation",
      description: "Get tool display pegboard rack from Arya Insulation Pvt Ltd. MS steel construction for tool & hardware stores. Enquire about sizes and custom configurations.",
      slug: "tool-display-pegboard-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Fastener Bin Display Rack", slug: "fastener-bin-display-rack", image: "/product/Fastener Bin Display Rack.webp" },
      { title: "Paint Can Display Rack", slug: "paint-can-display-rack", image: "/product/Paint Can Display Rack.webp" },
      { title: "Electrical Items Display Rack", slug: "electrical-items-display-rack", image: "/product/Electrical Items Display Rack.webp" },
      { title: "Pipe & Fittings Display Rack", slug: "pipe-and-fittings-display-rack", image: "/product/Pipe & Fittings Display Rack.png" },
    ],
  },
  {
    id: "fastener-bin-display-rack",
    slug: "fastener-bin-display-rack",
    title: "Fastener Bin Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Fastener Bin Display Rack.webp",
    gallery: ["/product/Fastener Bin Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for nut-bolt & screw stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS + Plastic Bins may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Nut-bolt & screw stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops fastener bin display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS + Plastic Bins are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for nut-bolt & screw stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, pegboard fittings or bins can be selected for hardware products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the fastener bin display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Fastener Bin Rack Manufacturer | Arya Insulation",
      description: "Get fastener bin display rack from Arya Insulation Pvt Ltd. MS steel construction for nut-bolt & screw stores. Enquire about sizes and custom configurations.",
      slug: "fastener-bin-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Paint Can Display Rack", slug: "paint-can-display-rack", image: "/product/Paint Can Display Rack.webp" },
      { title: "Electrical Items Display Rack", slug: "electrical-items-display-rack", image: "/product/Electrical Items Display Rack.webp" },
      { title: "Pipe & Fittings Display Rack", slug: "pipe-and-fittings-display-rack", image: "/product/Pipe & Fittings Display Rack.png" },
      { title: "Sanitaryware Display Rack", slug: "sanitaryware-display-rack", image: "/product/Sanitaryware Display Rack.webp" },
    ],
  },
  {
    id: "paint-can-display-rack",
    slug: "paint-can-display-rack",
    title: "Paint Can Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Paint Can Display Rack.webp",
    gallery: ["/product/Paint Can Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for paint & colour shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Paint & colour shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops paint can display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for paint & colour shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, pegboard fittings or bins can be selected for hardware products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the paint can display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Paint Can Rack Manufacturer | Arya Insulation",
      description: "Get paint can display rack from Arya Insulation Pvt Ltd. MS steel construction for paint & colour shops. Enquire about sizes and custom configurations.",
      slug: "paint-can-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Electrical Items Display Rack", slug: "electrical-items-display-rack", image: "/product/Electrical Items Display Rack.webp" },
      { title: "Pipe & Fittings Display Rack", slug: "pipe-and-fittings-display-rack", image: "/product/Pipe & Fittings Display Rack.png" },
      { title: "Sanitaryware Display Rack", slug: "sanitaryware-display-rack", image: "/product/Sanitaryware Display Rack.webp" },
      { title: "Bathroom Fittings Display Panel", slug: "bathroom-fittings-display-panel", image: "/product/Bathroom Fittings Display Panel.png" },
    ],
  },
  {
    id: "electrical-items-display-rack",
    slug: "electrical-items-display-rack",
    title: "Electrical Items Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Electrical Items Display Rack.webp",
    gallery: ["/product/Electrical Items Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for electrical shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Perforated Panel may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Electrical shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops electrical items display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Perforated Panel are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for electrical shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the electrical items display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Electrical Items Rack Manufacturer | Arya Insulation",
      description: "Get electrical items display rack from Arya Insulation Pvt Ltd. MS steel construction for electrical shops. Enquire about sizes and custom configurations.",
      slug: "electrical-items-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Pipe & Fittings Display Rack", slug: "pipe-and-fittings-display-rack", image: "/product/Pipe & Fittings Display Rack.png" },
      { title: "Sanitaryware Display Rack", slug: "sanitaryware-display-rack", image: "/product/Sanitaryware Display Rack.webp" },
      { title: "Bathroom Fittings Display Panel", slug: "bathroom-fittings-display-panel", image: "/product/Bathroom Fittings Display Panel.png" },
      { title: "Tiles Display Rack", slug: "tiles-display-rack", image: "/product/Tiles Display Rack.webp" },
    ],
  },
  {
    id: "pipe-and-fittings-display-rack",
    slug: "pipe-and-fittings-display-rack",
    title: "Pipe & Fittings Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Pipe & Fittings Display Rack.png",
    gallery: ["/product/Pipe & Fittings Display Rack.png"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for plumbing & sanitary stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Heavy Duty may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Plumbing & sanitary stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops pipe & fittings display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Heavy Duty are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for plumbing & sanitary stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the pipe & fittings display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Pipe & Fittings Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures pipe & fittings display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "pipe-and-fittings-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Sanitaryware Display Rack", slug: "sanitaryware-display-rack", image: "/product/Sanitaryware Display Rack.webp" },
      { title: "Bathroom Fittings Display Panel", slug: "bathroom-fittings-display-panel", image: "/product/Bathroom Fittings Display Panel.png" },
      { title: "Tiles Display Rack", slug: "tiles-display-rack", image: "/product/Tiles Display Rack.webp" },
      { title: "Plywood & Laminate Display Rack", slug: "plywood-and-laminate-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
    ],
  },
  {
    id: "sanitaryware-display-rack",
    slug: "sanitaryware-display-rack",
    title: "Sanitaryware Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Sanitaryware Display Rack.webp",
    gallery: ["/images/products/sanitaryware-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for sanitaryware showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Wood may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Sanitaryware showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops sanitaryware display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Wood are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for sanitaryware showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the sanitaryware display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Sanitaryware Rack Manufacturer | Arya Insulation",
      description: "Get sanitaryware display rack from Arya Insulation Pvt Ltd. MS steel construction for sanitaryware showrooms. Enquire about sizes and custom configurations.",
      slug: "sanitaryware-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Bathroom Fittings Display Panel", slug: "bathroom-fittings-display-panel", image: "/product/Bathroom Fittings Display Panel.png" },
      { title: "Tiles Display Rack", slug: "tiles-display-rack", image: "/product/Tiles Display Rack.webp" },
      { title: "Plywood & Laminate Display Rack", slug: "plywood-and-laminate-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Door Handle & Lock Display Board", slug: "door-handle-and-lock-display-board", image: "/product/Door Handle & Lock Display Board.webp" },
    ],
  },
  {
    id: "bathroom-fittings-display-panel",
    slug: "bathroom-fittings-display-panel",
    title: "Bathroom Fittings Display Panel",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Bathroom Fittings Display Panel.png",
    gallery: ["/product/Bathroom Fittings Display Panel.png"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for bath fittings showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS / MDF / Tile Panel may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Bath fittings showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops bathroom fittings display panel for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / MDF / Tile Panel are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for bath fittings showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the bathroom fittings display panel. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Bathroom Fittings Panel Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures bathroom fittings display panel in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "bathroom-fittings-display-panel",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Tiles Display Rack", slug: "tiles-display-rack", image: "/product/Tiles Display Rack.webp" },
      { title: "Plywood & Laminate Display Rack", slug: "plywood-and-laminate-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Door Handle & Lock Display Board", slug: "door-handle-and-lock-display-board", image: "/product/Door Handle & Lock Display Board.webp" },
      { title: "Automobile Spare Parts Display Rack", slug: "automobile-spare-parts-display-rack", image: "/product/Automobile Spare Parts Display Rack.webp" },
    ],
  },
  {
    id: "tiles-display-rack",
    slug: "tiles-display-rack",
    title: "Tiles Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Tiles Display Rack.webp",
    gallery: ["/product/Tiles Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for tiles & ceramic showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Tiles & ceramic showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops tiles display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for tiles & ceramic showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the tiles display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Tiles Rack Manufacturer | Arya Insulation",
      description: "Get tiles display rack from Arya Insulation Pvt Ltd. MS steel construction for tiles & ceramic showrooms. Enquire about sizes and custom configurations.",
      slug: "tiles-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Plywood & Laminate Display Rack", slug: "plywood-and-laminate-display-rack", image: "/product/Rice & Pulses Bin Display Rack.webp" },
      { title: "Door Handle & Lock Display Board", slug: "door-handle-and-lock-display-board", image: "/product/Door Handle & Lock Display Board.webp" },
      { title: "Automobile Spare Parts Display Rack", slug: "automobile-spare-parts-display-rack", image: "/product/Automobile Spare Parts Display Rack.webp" },
      { title: "Lubricant Oil Display Rack", slug: "lubricant-oil-display-rack", image: "/product/Lubricant Oil Display Rack.webp" },
    ],
  },
  {
    id: "plywood-and-laminate-display-rack",
    slug: "plywood-and-laminate-display-rack",
    title: "Plywood & Laminate Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Rice & Pulses Bin Display Rack.webp",
    gallery: ["/product/Rice & Pulses Bin Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for plywood & laminate stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Plywood & laminate stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops plywood & laminate display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for plywood & laminate stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the plywood & laminate display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Plywood & Laminate Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures plywood & laminate display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "plywood-and-laminate-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Door Handle & Lock Display Board", slug: "door-handle-and-lock-display-board", image: "/product/Door Handle & Lock Display Board.webp" },
      { title: "Automobile Spare Parts Display Rack", slug: "automobile-spare-parts-display-rack", image: "/product/Automobile Spare Parts Display Rack.webp" },
      { title: "Lubricant Oil Display Rack", slug: "lubricant-oil-display-rack", image: "/product/Lubricant Oil Display Rack.webp" },
      { title: "Tyre Display Rack", slug: "tyre-display-rack", image: "/product/Tyre Display Rack.webp" },
    ],
  },
  {
    id: "door-handle-and-lock-display-board",
    slug: "door-handle-and-lock-display-board",
    title: "Door Handle & Lock Display Board",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Door Handle & Lock Display Board.webp",
    gallery: ["/product/Door Handle & Lock Display Board.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for hardware & architectural stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MDF / MS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Hardware & architectural stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops door handle & lock display board for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MDF / MS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for hardware & architectural stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the door handle & lock display board. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Door Handle & Lock Board Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures door handle & lock display board in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "door-handle-and-lock-display-board",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Automobile Spare Parts Display Rack", slug: "automobile-spare-parts-display-rack", image: "/product/Automobile Spare Parts Display Rack.webp" },
      { title: "Lubricant Oil Display Rack", slug: "lubricant-oil-display-rack", image: "/product/Lubricant Oil Display Rack.webp" },
      { title: "Tyre Display Rack", slug: "tyre-display-rack", image: "/product/Tyre Display Rack.webp" },
      { title: "Hardware Store Display Rack", slug: "hardware-store-display-rack", image: "/product/Hardware Store Display Rack.png" },
    ],
  },
  {
    id: "automobile-spare-parts-display-rack",
    slug: "automobile-spare-parts-display-rack",
    title: "Automobile Spare Parts Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Automobile Spare Parts Display Rack.webp",
    gallery: ["/product/Automobile Spare Parts Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for auto parts shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Auto parts shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops automobile spare parts display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for auto parts shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, holders or hooks can be configured for electronic accessories",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the automobile spare parts display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Automobile Spare Parts Rack Manufacturer | Arya Insulation",
      description: "Get automobile spare parts display rack from Arya Insulation Pvt Ltd. MS steel construction for auto parts shops. Enquire about sizes and custom configurations.",
      slug: "automobile-spare-parts-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Lubricant Oil Display Rack", slug: "lubricant-oil-display-rack", image: "/product/Lubricant Oil Display Rack.webp" },
      { title: "Tyre Display Rack", slug: "tyre-display-rack", image: "/product/Tyre Display Rack.webp" },
      { title: "Hardware Store Display Rack", slug: "hardware-store-display-rack", image: "/product/Hardware Store Display Rack.png" },
      { title: "Tool Display Pegboard Rack", slug: "tool-display-pegboard-rack", image: "/product/Wooden Finish Supermarket Rack.webp" },
    ],
  },
  {
    id: "lubricant-oil-display-rack",
    slug: "lubricant-oil-display-rack",
    title: "Lubricant Oil Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Lubricant Oil Display Rack.webp",
    gallery: ["/images/products/lubricant-oil-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for auto & lubricant shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Auto & lubricant shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops lubricant oil display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for auto & lubricant shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the lubricant oil display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Lubricant Oil Rack Manufacturer | Arya Insulation",
      description: "Get lubricant oil display rack from Arya Insulation Pvt Ltd. MS steel construction for auto & lubricant shops. Enquire about sizes and custom configurations.",
      slug: "lubricant-oil-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Tyre Display Rack", slug: "tyre-display-rack", image: "/product/Tyre Display Rack.webp" },
      { title: "Hardware Store Display Rack", slug: "hardware-store-display-rack", image: "/product/Hardware Store Display Rack.png" },
      { title: "Tool Display Pegboard Rack", slug: "tool-display-pegboard-rack", image: "/product/Wooden Finish Supermarket Rack.webp" },
      { title: "Fastener Bin Display Rack", slug: "fastener-bin-display-rack", image: "/product/Fastener Bin Display Rack.webp" },
    ],
  },
  {
    id: "tyre-display-rack",
    slug: "tyre-display-rack",
    title: "Tyre Display Rack",
    category: "Hardware, Paint & Tool Display Racks",
    eyebrow: "HARDWARE, PAINT & TOOL DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Tyre Display Rack.webp",
    gallery: ["/product/Tyre Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for tyre shops & service centres. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Heavy Duty may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Tyre shops & service centres",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops tyre display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Heavy Duty are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for tyre shops & service centres. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Shelves, pegboard fittings or bins can be selected for hardware products",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the tyre display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Tyre Rack Manufacturer | Arya Insulation",
      description: "Get tyre display rack from Arya Insulation Pvt Ltd. MS steel construction for tyre shops & service centres. Enquire about sizes and custom configurations.",
      slug: "tyre-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Hardware Store Display Rack", slug: "hardware-store-display-rack", image: "/product/Hardware Store Display Rack.png" },
      { title: "Tool Display Pegboard Rack", slug: "tool-display-pegboard-rack", image: "/product/Wooden Finish Supermarket Rack.webp" },
      { title: "Fastener Bin Display Rack", slug: "fastener-bin-display-rack", image: "/product/Fastener Bin Display Rack.webp" },
      { title: "Paint Can Display Rack", slug: "paint-can-display-rack", image: "/product/Paint Can Display Rack.webp" },
    ],
  },
  // ===================== Stationery, Book & Toy Display Racks =====================
  {
    id: "stationery-display-rack",
    slug: "stationery-display-rack",
    title: "Stationery Display Rack",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Stationery Display Rack.webp",
    gallery: ["/product/Stationery Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for stationery shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / MDF may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Stationery shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops stationery display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / MDF are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for stationery shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the stationery display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Stationery Rack Manufacturer | Arya Insulation",
      description: "Get stationery display rack from Arya Insulation Pvt Ltd. MS steel construction for stationery shops. Enquire about sizes and custom configurations.",
      slug: "stationery-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Pen Display Stand", slug: "pen-display-stand", image: "/product/Pen Display Stand.webp" },
      { title: "Notebook Display Rack", slug: "notebook-display-rack", image: "/product/Library Book Rack.webp" },
      { title: "Art & Craft Supplies Display Rack", slug: "art-and-craft-supplies-display-rack", image: "/product/Art & Craft Supplies Display Rack.webp" },
      { title: "School Bag Display Rack", slug: "school-bag-display-rack", image: "/product/Toy Display Rack.webp" },
    ],
  },
  {
    id: "pen-display-stand",
    slug: "pen-display-stand",
    title: "Pen Display Stand",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Pen Display Stand.webp",
    gallery: ["/product/Pen Display Stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for stationery counters. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Acrylic / MS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Stationery counters",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops pen display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Acrylic / MS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for stationery counters. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the pen display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Pen Stand Manufacturer | Arya Insulation",
      description: "Get pen display stand from Arya Insulation Pvt Ltd. MS steel construction for stationery counters. Enquire about sizes and custom configurations.",
      slug: "pen-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Notebook Display Rack", slug: "notebook-display-rack", image: "/product/Library Book Rack.webp" },
      { title: "Art & Craft Supplies Display Rack", slug: "art-and-craft-supplies-display-rack", image: "/product/Art & Craft Supplies Display Rack.webp" },
      { title: "School Bag Display Rack", slug: "school-bag-display-rack", image: "/product/Toy Display Rack.webp" },
      { title: "Book Display Rack", slug: "book-display-rack", image: "/product/Stationery Display Rack.webp" },
    ],
  },
  {
    id: "notebook-display-rack",
    slug: "notebook-display-rack",
    title: "Notebook Display Rack",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Library Book Rack.webp",
    gallery: ["/product/Library Book Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for stationery & book shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Stationery & book shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops notebook display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for stationery & book shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the notebook display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Notebook Rack Manufacturer | Arya Insulation",
      description: "Get notebook display rack from Arya Insulation Pvt Ltd. MS steel construction for stationery & book shops. Enquire about sizes and custom configurations.",
      slug: "notebook-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Art & Craft Supplies Display Rack", slug: "art-and-craft-supplies-display-rack", image: "/product/Art & Craft Supplies Display Rack.webp" },
      { title: "School Bag Display Rack", slug: "school-bag-display-rack", image: "/product/Toy Display Rack.webp" },
      { title: "Book Display Rack", slug: "book-display-rack", image: "/product/Stationery Display Rack.webp" },
      { title: "Book Display Stand", slug: "book-display-stand", image: "/product/book-display-stand.webp" },
    ],
  },
  {
    id: "art-and-craft-supplies-display-rack",
    slug: "art-and-craft-supplies-display-rack",
    title: "Art & Craft Supplies Display Rack",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Art & Craft Supplies Display Rack.webp",
    gallery: ["/product/Art & Craft Supplies Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for stationery & hobby stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Pegboard may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Stationery & hobby stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops art & craft supplies display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Pegboard are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for stationery & hobby stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the art & craft supplies display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Art & Craft Supplies Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures art & craft supplies display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "art-and-craft-supplies-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "School Bag Display Rack", slug: "school-bag-display-rack", image: "/product/Toy Display Rack.webp" },
      { title: "Book Display Rack", slug: "book-display-rack", image: "/product/Stationery Display Rack.webp" },
      { title: "Book Display Stand", slug: "book-display-stand", image: "/product/Book Display Stand.webp" },
      { title: "Library Book Rack", slug: "library-book-rack", image: "/product/Library Book Rack.webp" },
    ],
  },
  {
    id: "school-bag-display-rack",
    slug: "school-bag-display-rack",
    title: "School Bag Display Rack",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Toy Display Rack.webp",
    gallery: ["/images/products/school-bag-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for bag & stationery shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Slatwall may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Bag & stationery shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops school bag display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Slatwall are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for bag & stationery shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the school bag display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "School Bag Rack Manufacturer | Arya Insulation",
      description: "Get school bag display rack from Arya Insulation Pvt Ltd. MS steel construction for bag & stationery shops. Enquire about sizes and custom configurations.",
      slug: "school-bag-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Book Display Rack", slug: "book-display-rack", image: "/product/Stationery Display Rack.webp" },
      { title: "Book Display Stand", slug: "book-display-stand", image: "/product/book-display-stand.webp" },
      { title: "Library Book Rack", slug: "library-book-rack", image: "/product/Library Book Rack.webp" },
      { title: "Magazine & Newspaper Display Stand", slug: "magazine-and-newspaper-display-stand", image: "/product/Heavy Duty Supermarket Storage Rack.webp" },
    ],
  },
  {
    id: "book-display-rack",
    slug: "book-display-rack",
    title: "Book Display Rack",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Stationery Display Rack.webp",
    gallery: ["/product/Stationery Display Rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for bookstores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; Wood / MS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Bookstores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops book display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Wood / MS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for bookstores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the book display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Book Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures book display rack with an MS steel structure for bookstores. Ask us about sizes, finishes and custom display layouts.",
      slug: "book-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Book Display Stand", slug: "book-display-stand", image: "/product/book-display-stand.webp" },
      { title: "Library Book Rack", slug: "library-book-rack", image: "/product/Library Book Rack.webp" },
      { title: "Magazine & Newspaper Display Stand", slug: "magazine-and-newspaper-display-stand", image: "/product/Heavy Duty Supermarket Storage Rack.webp" },
      { title: "Gift Items Display Rack", slug: "gift-items-display-rack", image: "/product/Cosmetic%20Display%20Stand%20(1).webp" },
    ],
  },

  {
    id: "library-book-rack",
    slug: "library-book-rack",
    title: "Library Book Rack",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Library Book Rack.webp",
    gallery: ["/images/products/library-book-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for libraries & schools. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / Wood may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Libraries & schools",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops library book rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Wood are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for libraries & schools. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the library book rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Library Book Rack Manufacturer | Arya Insulation",
      description: "Get library book rack from Arya Insulation Pvt Ltd. MS steel construction for libraries & schools. Enquire about sizes and custom configurations.",
      slug: "library-book-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Magazine & Newspaper Display Stand", slug: "magazine-and-newspaper-display-stand", image: "/product/Heavy Duty Supermarket Storage Rack.webp" },
      { title: "Gift Items Display Rack", slug: "gift-items-display-rack", image: "/product/Cosmetic%20Display%20Stand%20(1).webp" },
      { title: "Toy Display Rack", slug: "toy-display-rack", image: "/product/Toy Display Rack.webp" },
      { title: "Stationery Display Rack", slug: "stationery-display-rack", image: "/product/Stationery Display Rack.webp" },
    ],
  },
  {
    id: "magazine-and-newspaper-display-stand",
    slug: "magazine-and-newspaper-display-stand",
    title: "Magazine & Newspaper Display Stand",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Heavy Duty Supermarket Storage Rack.webp",
    gallery: ["/images/products/magazine-and-newspaper-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for newsstands & waiting areas. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; MS Wire / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Newsstands & waiting areas",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops magazine & newspaper display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for newsstands & waiting areas. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the magazine & newspaper display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Magazine & Newspaper Stand Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures magazine & newspaper display stand in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "magazine-and-newspaper-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Gift Items Display Rack", slug: "gift-items-display-rack", image: "/product/Cosmetic%20Display%20Stand%20(1).webp" },
      { title: "Toy Display Rack", slug: "toy-display-rack", image: "/product/Toy Display Rack.webp" },
      { title: "Stationery Display Rack", slug: "stationery-display-rack", image: "/product/Stationery Display Rack.webp" },
      { title: "Pen Display Stand", slug: "pen-display-stand", image: "/product/Pen Display Stand.webp" },
    ],
  },
  {
    id: "gift-items-display-rack",
    slug: "gift-items-display-rack",
    title: "Gift Items Display Rack",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Cosmetic%20Display%20Stand%20(1).webp",
    gallery: ["/images/products/gift-items-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for gift shops. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / MDF / Glass may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Gift shops",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops gift items display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / MDF / Glass are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for gift shops. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the gift items display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Gift Items Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures gift items display rack with an MS steel structure for gift shops. Ask us about sizes, finishes and custom display layouts.",
      slug: "gift-items-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Toy Display Rack", slug: "toy-display-rack", image: "/product/Toy Display Rack.webp" },
      { title: "Stationery Display Rack", slug: "stationery-display-rack", image: "/product/Stationery Display Rack.webp" },
      { title: "Pen Display Stand", slug: "pen-display-stand", image: "/product/Pen Display Stand.webp" },
      { title: "Notebook Display Rack", slug: "notebook-display-rack", image: "/product/Library Book Rack.webp" },
    ],
  },
  {
    id: "toy-display-rack",
    slug: "toy-display-rack",
    title: "Toy Display Rack",
    category: "Stationery, Book & Toy Display Racks",
    eyebrow: "STATIONERY, BOOK & TOY DISPLAY RACKS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Toy Display Rack.webp",
    gallery: ["/images/products/toy-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for toy stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS / MDF may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Toy stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops toy display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / MDF are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for toy stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the toy display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Toy Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures toy display rack with an MS steel structure for toy stores. Ask us about sizes, finishes and custom display layouts.",
      slug: "toy-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Stationery Display Rack", slug: "stationery-display-rack", image: "/product/Stationery Display Rack.webp" },
      { title: "Pen Display Stand", slug: "pen-display-stand", image: "/product/Pen Display Stand.webp" },
      { title: "Notebook Display Rack", slug: "notebook-display-rack", image: "/product/Library Book Rack.webp" },
      { title: "Art & Craft Supplies Display Rack", slug: "art-and-craft-supplies-display-rack", image: "/product/Art & Craft Supplies Display Rack.webp" },
    ],
  },
  // ===================== Wall Mounted & Slatwall Display Systems =====================
  {
    id: "slatwall-display-panel",
    slug: "slatwall-display-panel",
    title: "Slatwall Display Panel",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Slatwall Display Panel.webp",
    gallery: ["/images/products/slatwall-display-panel.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for any retail store wall. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MDF Slatwall may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Any retail store wall",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops slatwall display panel for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MDF Slatwall are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for any retail store wall. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the slatwall display panel. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Slatwall Panel Manufacturer | Arya Insulation",
      description: "Get slatwall display panel from Arya Insulation Pvt Ltd. MS steel construction for any retail store wall. Enquire about sizes and custom configurations.",
      slug: "slatwall-display-panel",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Slatwall Hooks & Accessories", slug: "slatwall-hooks-and-accessories", image: "/product/Slatwall Mobile Accessories Rack.webp" },
      { title: "Perforated Pegboard Wall Panel", slug: "perforated-pegboard-wall-panel", image: "/product/Perforated Pegboard Wall Panel.webp" },
      { title: "Grid Wall Display Panel", slug: "grid-wall-display-panel", image: "/product/Grid Wall Display Panel.webp" },
      { title: "Wall Channel Shelving System", slug: "wall-channel-shelving-system", image: "/product/Perfume Display Rack.webp" },
    ],
  },
  {
    id: "slatwall-hooks-and-accessories",
    slug: "slatwall-hooks-and-accessories",
    title: "Slatwall Hooks & Accessories",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Slatwall Mobile Accessories Rack.webp",
    gallery: ["/images/products/slatwall-hooks-and-accessories.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for slatwall panel add-ons. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS Chrome / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated or chrome finish, as selected",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Slatwall panel add-ons",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops slatwall hooks & accessories for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Chrome / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for slatwall panel add-ons. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the slatwall hooks & accessories. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Slatwall Hooks & Accessories Manufacturer | Arya Insulation",
      description: "Get slatwall hooks & accessories from Arya Insulation Pvt Ltd. MS steel construction for slatwall panel add-ons. Enquire about sizes and custom configurations.",
      slug: "slatwall-hooks-and-accessories",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Perforated Pegboard Wall Panel", slug: "perforated-pegboard-wall-panel", image: "/product/Perforated Pegboard Wall Panel.webp" },
      { title: "Grid Wall Display Panel", slug: "grid-wall-display-panel", image: "/product/Grid Wall Display Panel.webp" },
      { title: "Wall Channel Shelving System", slug: "wall-channel-shelving-system", image: "/product/Perfume Display Rack.webp" },
      { title: "Gondola Wall Shelving Unit", slug: "gondola-wall-shelving-unit", image: "/product/Bright White Gondola Shelf Studio Shot.webp" },
    ],
  },
  {
    id: "perforated-pegboard-wall-panel",
    slug: "perforated-pegboard-wall-panel",
    title: "Perforated Pegboard Wall Panel",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Perforated Pegboard Wall Panel.webp",
    gallery: ["/images/products/perforated-pegboard-wall-panel.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for hardware & accessory stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS Perforated Sheet may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Hardware & accessory stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops perforated pegboard wall panel for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Perforated Sheet are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for hardware & accessory stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the perforated pegboard wall panel. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Perforated Pegboard Wall Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures perforated pegboard wall panel in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "perforated-pegboard-wall-panel",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Grid Wall Display Panel", slug: "grid-wall-display-panel", image: "/product/Grid Wall Display Panel.webp" },
      { title: "Wall Channel Shelving System", slug: "wall-channel-shelving-system", image: "/product/Perfume Display Rack.webp" },
      { title: "Gondola Wall Shelving Unit", slug: "gondola-wall-shelving-unit", image: "/product/Bright White Gondola Shelf Studio Shot.webp" },
      { title: "Wall Mounted Bracket Shelf Rack", slug: "wall-mounted-bracket-shelf-rack", image: "/product/Wall Mounted Shoe Display Rack.webp" },
    ],
  },
  {
    id: "grid-wall-display-panel",
    slug: "grid-wall-display-panel",
    title: "Grid Wall Display Panel",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Grid Wall Display Panel.webp",
    gallery: ["/images/products/grid-wall-display-panel.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for accessory & gift stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS Wire Mesh may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Accessory & gift stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops grid wall display panel for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire Mesh are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for accessory & gift stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the grid wall display panel. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Grid Wall Panel Manufacturer | Arya Insulation",
      description: "Get grid wall display panel from Arya Insulation Pvt Ltd. MS steel construction for accessory & gift stores. Enquire about sizes and custom configurations.",
      slug: "grid-wall-display-panel",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wall Channel Shelving System", slug: "wall-channel-shelving-system", image: "/product/Perfume Display Rack.webp" },
      { title: "Gondola Wall Shelving Unit", slug: "gondola-wall-shelving-unit", image: "/product/Bright White Gondola Shelf Studio Shot.webp" },
      { title: "Wall Mounted Bracket Shelf Rack", slug: "wall-mounted-bracket-shelf-rack", image: "/product/Wall Mounted Shoe Display Rack.webp" },
      { title: "Shelf Wall Display Rack", slug: "shelf-wall-display-rack", image: "/product/Wall Mounted Garment Display Rack.webp" },
    ],
  },
  {
    id: "wall-channel-shelving-system",
    slug: "wall-channel-shelving-system",
    title: "Wall Channel Shelving System",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Perfume Display Rack.webp",
    gallery: ["/images/products/wall-channel-shelving-system.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for showrooms & retail walls. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS / Aluminium may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Showrooms & retail walls",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wall channel shelving system for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Aluminium are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for showrooms & retail walls. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wall channel shelving system. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wall Channel Shelving System Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures wall channel shelving system in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "wall-channel-shelving-system",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Gondola Wall Shelving Unit", slug: "gondola-wall-shelving-unit", image: "/product/Bright White Gondola Shelf Studio Shot.webp" },
      { title: "Wall Mounted Bracket Shelf Rack", slug: "wall-mounted-bracket-shelf-rack", image: "/product/Wall Mounted Shoe Display Rack.webp" },
      { title: "Shelf Wall Display Rack", slug: "shelf-wall-display-rack", image: "/product/Wall Mounted Garment Display Rack.webp" },
      { title: "Wall Mounted Wooden Display Rack", slug: "wall-mounted-wooden-display-rack", image: "/product/Perfume%20Display%20Rack.webp" },
    ],
  },
  {
    id: "gondola-wall-shelving-unit",
    slug: "gondola-wall-shelving-unit",
    title: "Gondola Wall Shelving Unit",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Bright White Gondola Shelf Studio Shot.webp",
    gallery: ["/images/products/gondola-wall-shelving-unit.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for supermarket & retail walls. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Supermarket & retail walls",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops gondola wall shelving unit for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for supermarket & retail walls. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the gondola wall shelving unit. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Gondola Wall Shelving Unit Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures gondola wall shelving unit in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "gondola-wall-shelving-unit",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wall Mounted Bracket Shelf Rack", slug: "wall-mounted-bracket-shelf-rack", image: "/product/Wall Mounted Shoe Display Rack.webp" },
      { title: "Shelf Wall Display Rack", slug: "shelf-wall-display-rack", image: "/product/Wall Mounted Garment Display Rack.webp" },
      { title: "Wall Mounted Wooden Display Rack", slug: "wall-mounted-wooden-display-rack", image: "/product/Perfume%20Display%20Rack.webp" },
      { title: "Aluminium Profile Wall Display System", slug: "aluminium-profile-wall-display-system", image: "/product/Aluminium Profile Wall Display System.webp" },
    ],
  },
  {
    id: "wall-mounted-bracket-shelf-rack",
    slug: "wall-mounted-bracket-shelf-rack",
    title: "Wall Mounted Bracket Shelf Rack",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Wall Mounted Shoe Display Rack.webp",
    gallery: ["/images/products/wall-mounted-bracket-shelf-rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for shops & offices. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS + Wood/Glass Shelves may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Shops & offices",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wall mounted bracket shelf rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS + Wood/Glass Shelves are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for shops & offices. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wall mounted bracket shelf rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wall Mounted Bracket Shelf Rack | Arya Insulation",
      description: "Get wall mounted bracket shelf rack from Arya Insulation Pvt Ltd. MS steel construction for shops & offices. Enquire about sizes and custom configurations.",
      slug: "wall-mounted-bracket-shelf-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Shelf Wall Display Rack", slug: "shelf-wall-display-rack", image: "/product/Wall Mounted Garment Display Rack.webp" },
      { title: "Wall Mounted Wooden Display Rack", slug: "wall-mounted-wooden-display-rack", image: "/product/Perfume%20Display%20Rack.webp" },
      { title: "Aluminium Profile Wall Display System", slug: "aluminium-profile-wall-display-system", image: "/product/Aluminium Profile Wall Display System.webp.webp" },
      { title: "Wall Display Rack", slug: "wall-display-rack", image: "/product/Skin Care Products Display Rack.webp" },
    ],
  },
  {
    id: "shelf-wall-display-rack",
    slug: "shelf-wall-display-rack",
    title: "Shelf Wall Display Rack",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Wall Mounted Garment Display Rack.webp",
    gallery: ["/images/products/shelf-wall-display-rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for premium showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; Toughened Glass + SS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Premium showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops shelf wall display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Toughened Glass + SS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for premium showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the shelf wall display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Shelf Wall Rack Manufacturer | Arya Insulation",
      description: "Get shelf wall display rack from Arya Insulation Pvt Ltd. MS steel construction for premium showrooms. Enquire about sizes and custom configurations.",
      slug: "shelf-wall-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wall Mounted Wooden Display Rack", slug: "wall-mounted-wooden-display-rack", image: "/product/Perfume%20Display%20Rack.webp" },
      { title: "Aluminium Profile Wall Display System", slug: "aluminium-profile-wall-display-system", image: "/product/Aluminium Profile Wall Display System.webp.webp" },
      { title: "Wall Display Rack", slug: "wall-display-rack", image: "/product/Skin Care Products Display Rack.webp" },
      { title: "Corner Wall Display Rack", slug: "corner-wall-display-rack", image: "/product/Black and Yellow Retail Shelving Display.webp" },
    ],
  },
  {
    id: "wall-mounted-wooden-display-rack",
    slug: "wall-mounted-wooden-display-rack",
    title: "Wall Mounted Wooden Display Rack",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Perfume%20Display%20Rack.webp",
    gallery: ["/images/products/wall-mounted-wooden-display-rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for boutiques & gift stores. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; Wood / Plywood may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Boutiques & gift stores",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wall mounted wooden display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Wood / Plywood are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for boutiques & gift stores. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wall mounted wooden display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wall Mounted Wooden Rack Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures wall mounted wooden display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "wall-mounted-wooden-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Aluminium Profile Wall Display System", slug: "aluminium-profile-wall-display-system", image: "/product/Aluminium Profile Wall Display System.webp.webp" },
      { title: "Wall Display Rack", slug: "wall-display-rack", image: "/product/Skin Care Products Display Rack.webp" },
      { title: "Corner Wall Display Rack", slug: "corner-wall-display-rack", image: "/product/Black and Yellow Retail Shelving Display.webp" },
      { title: "Slatwall Display Panel", slug: "slatwall-display-panel", image: "/product/Slatwall Display Panel.webp" },
    ],
  },
  {
    id: "aluminium-profile-wall-display-system",
    slug: "aluminium-profile-wall-display-system",
    title: "Aluminium Profile Wall Display System",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Surgical%20Items%20Display%20Rack.webp",
    gallery: ["/images/products/aluminium-profile-wall-display-system.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for modern showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; Aluminium may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Modern showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops aluminium profile wall display system for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Aluminium are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for modern showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the aluminium profile wall display system. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Aluminium Profile Wall System Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures aluminium profile wall display system in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "aluminium-profile-wall-display-system",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Wall Display Rack", slug: "wall-display-rack", image: "/product/Skin Care Products Display Rack.webp" },
      { title: "Corner Wall Display Rack", slug: "corner-wall-display-rack", image: "/product/Black and Yellow Retail Shelving Display.webp" },
      { title: "Slatwall Display Panel", slug: "slatwall-display-panel", image: "/product/Slatwall Display Panel.webp" },
      { title: "Slatwall Hooks & Accessories", slug: "slatwall-hooks-and-accessories", image: "/product/Slatwall Mobile Accessories Rack.webp" },
    ],
  },
  {
    id: "wall-display-rack",
    slug: "wall-display-rack",
    title: "Wall Display Rack",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Skin Care Products Display Rack.webp",
    gallery: ["/images/products/wall-display-rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for branded showrooms. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; Aluminium / MDF + LED may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Branded showrooms",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops wall display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Aluminium / MDF + LED are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for branded showrooms. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the wall display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Wall Rack Manufacturer | Arya Insulation",
      description: "Get wall display rack from Arya Insulation Pvt Ltd. MS steel construction for branded showrooms. Enquire about sizes and custom configurations.",
      slug: "wall-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Corner Wall Display Rack", slug: "corner-wall-display-rack", image: "/product/Black and Yellow Retail Shelving Display.webp" },
      { title: "Slatwall Display Panel", slug: "slatwall-display-panel", image: "/product/Slatwall Display Panel.webp" },
      { title: "Slatwall Hooks & Accessories", slug: "slatwall-hooks-and-accessories", image: "/product/Slatwall Mobile Accessories Rack.webp" },
      { title: "Perforated Pegboard Wall Panel", slug: "perforated-pegboard-wall-panel", image: "/product/Perforated Pegboard Wall Panel.webp" },
    ],
  },
  {
    id: "corner-wall-display-rack",
    slug: "corner-wall-display-rack",
    title: "Corner Wall Display Rack",
    category: "Wall Mounted & Slatwall Display Systems",
    eyebrow: "WALL MOUNTED & SLATWALL DISPLAY SYSTEMS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Black and Yellow Retail Shelving Display.webp",
    gallery: ["/images/products/corner-wall-display-rack.webp"],

    // Hero short description
    desc: "MS steel wall-mounted / panel display system by Arya Insulation Pvt Ltd, designed for shop corners. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Wall-mounted / panel display system",
      "Material": "MS steel primary structure; MS / Wood may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelf / rail / display-level count as per product configuration",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Shop corners",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops corner wall display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Wood are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for shop corners. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Uses available wall space for organized vertical merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the corner wall display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Corner Wall Rack Manufacturer | Arya Insulation",
      description: "Get corner wall display rack from Arya Insulation Pvt Ltd. MS steel construction for shop corners. Enquire about sizes and custom configurations.",
      slug: "corner-wall-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Slatwall Display Panel", slug: "slatwall-display-panel", image: "/product/Slatwall Display Panel.webp" },
      { title: "Slatwall Hooks & Accessories", slug: "slatwall-hooks-and-accessories", image: "/product/Slatwall Mobile Accessories Rack.webp" },
      { title: "Perforated Pegboard Wall Panel", slug: "perforated-pegboard-wall-panel", image: "/product/Perforated Pegboard Wall Panel.webp" },
      { title: "Grid Wall Display Panel", slug: "grid-wall-display-panel", image: "/product/Grid Wall Display Panel.webp" },
    ],
  },
  // ===================== Promotional & Countertop Display Stands =====================
//   {
//     id: "countertop-promotional-display-stand",
//     slug: "countertop-promotional-display-stand",
//     title: "Countertop Promotional Display Stand",
//     category: "Promotional & Countertop Display Stands",
//     eyebrow: "PROMOTIONAL & COUNTERTOP DISPLAY STANDS",
//     brand: "Arya Insulation Pvt Ltd",

//     // Product images
//     image: "/product/countertop-promotional-display-stand.webp",
//     gallery: ["/images/products/countertop-promotional-display-stand.webp"],

//     // Hero short description
//     desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for billing counters. Custom configurations are available as per product and store requirements.",

//     // Quick specifications
//     quickSpecs: {
//       height: "Custom Height",
//       displayLevels: "Configurable Levels",
//       material: "MS Steel",
//       finish: "Powder Coated",
//     },

//     // Specifications tab
//     specs: {
//       "Rack Type": "Countertop / freestanding display stand",
//       "Material": "MS steel primary structure; MS / Acrylic may be used for compatible panels, shelves, bins, hooks or finish components as required.",
//       "Height": "As per requirement / approved drawing",
//       "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
//       "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
//       "Finish": "Powder-coated MS frame; accessory finish as specified",
//       "Brand": "Arya Insulation Pvt Ltd",
//       "Usage / Application": "Billing counters",
//     },

//     // Description tab
//     description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops countertop promotional display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS / Acrylic are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

// The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

// These display racks are intended for billing counters. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

//     // Key features
//     features: [
//       "MS steel primary frame for a structured retail display",
//       "Suitable for featured products, promotions or impulse merchandising",
//       "Customizable dimensions and display configuration",
//       "Finish and accessory options to suit the store interior",
//       "Designed to organize products and improve in-store visibility",
//     ],

//     // Customization
//     customization: [
//       "Height",
//       "Width",
//       "Depth",
//       "Display Levels",
//       "Shelf or Rail Layout",
//       "Hooks",
//       "Bins",
//       "Panels",
//       "Finish",
//       "Branding Options",
//     ],
//     customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

//     // Enquiry CTA
//     enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the countertop promotional display stand. Share your required dimensions, product details, quantity and installation location.",

//     // SEO
//     seo: {
//       title: "Countertop Promotional Stand Manufacturer | Arya Insulation",
//       description: "Arya Insulation Pvt Ltd manufactures countertop promotional display stand in MS steel. Contact us for sizes, finishes and customized display options.",
//       slug: "countertop-promotional-display-stand",
//     },

//     brochure: "",

//     // Related products (same category)
//     relatedProducts: [
//       { title: "Branded Floor Standing Promotional Display Rack", slug: "branded-floor-standing-promotional-display-rack", image: "/product/Single%20Sided%20Wall%20Gondola%20Rack.webp" },
//       { title: "Spinner Display Rack", slug: "spinner-display-rack", image: "/product/Socks%20Display%20Rack.webp" },
//       { title: "Dump Bin Display rack", slug: "dump-bin-display-rack", image: "/product/Dump Bin Display rack.webp" },
//       { title: "Clip Strip & Sachet Hanging Display rack", slug: "clip-strip-and-sachet-hanging-display-rack", image: "/product/Clip Strip & Sachet Hanging Display rack.webp" },
//     ],
//   },
  {
    id: "branded-floor-standing-promotional-display-rack",
    slug: "branded-floor-standing-promotional-display-rack",
    title: "Branded Floor Standing Promotional Display Rack",
    category: "Promotional & Countertop Display Stands",
    eyebrow: "PROMOTIONAL & COUNTERTOP DISPLAY STANDS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Single%20Sided%20Wall%20Gondola%20Rack.webp",
    gallery: ["/images/products/branded-floor-standing-promotional-display-rack.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for fmcg brand promotions. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; MS + Branding Panels may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "FMCG brand promotions",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops branded floor standing promotional display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS + Branding Panels are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for fmcg brand promotions. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Suitable for featured products, promotions or impulse merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the branded floor standing promotional display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Branded Floor Standing Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures branded floor standing promotional display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "branded-floor-standing-promotional-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Spinner Display Rack", slug: "spinner-display-rack", image: "/product/Socks%20Display%20Rack.webp" },
      { title: "Dump Bin Display rack", slug: "dump-bin-display-rack", image: "/product/Dump Bin Display rack.webp" },
      { title: "Clip Strip & Sachet Hanging Display rack", slug: "clip-strip-and-sachet-hanging-display-rack", image: "/product/Clip Strip & Sachet Hanging Display rack.webp" },
      { title: "Brochure Display Stand", slug: "brochure-display-stand", image: "/product/Brochure Display Stand.webp" },
    ],
  },
  {
    id: "spinner-display-rack",
    slug: "spinner-display-rack",
    title: "Spinner Display Rack",
    category: "Promotional & Countertop Display Stands",
    eyebrow: "PROMOTIONAL & COUNTERTOP DISPLAY STANDS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Socks%20Display%20Rack.webp",
    gallery: ["/images/products/spinner-display-rack.webp"],

    // Hero short description
    desc: "MS steel movable / rotating display unit by Arya Insulation Pvt Ltd, designed for small items & impulse buys. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Movable / rotating display unit",
      "Material": "MS steel primary structure; MS Wire Powder Coated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Small items & impulse buys",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops spinner display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire Powder Coated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for small items & impulse buys. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Suitable for featured products, promotions or impulse merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the spinner display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Spinner Rack Manufacturer | Arya Insulation",
      description: "Get spinner display rack from Arya Insulation Pvt Ltd. MS steel construction for small items & impulse buys. Enquire about sizes and custom configurations.",
      slug: "spinner-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Dump Bin Display rack", slug: "dump-bin-display-rack", image: "/product/Dump Bin Display rack.webp" },
      { title: "Clip Strip & Sachet Hanging Display rack", slug: "clip-strip-and-sachet-hanging-display-rack", image: "/product/Clip Strip & Sachet Hanging Display rack.webp" },
      { title: "Brochure Display Stand", slug: "brochure-display-stand", image: "/product/Brochure Display Stand.webp" },
      { title: "Portable Exhibition Display Stand", slug: "portable-exhibition-display-stand", image: "/product/Portable Exhibition Display Stand.webp" },
    ],
  },
  {
    id: "dump-bin-display-rack",
    slug: "dump-bin-display-rack",
    title: "Dump Bin Display rack",
    category: "Promotional & Countertop Display Stands",
    eyebrow: "PROMOTIONAL & COUNTERTOP DISPLAY STANDS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Dump Bin Display rack.webp",
    gallery: ["/images/products/dump-bin-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for discount & clearance offers. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; MS Wire / Corrugated may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Discount & clearance offers",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops dump bin display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. MS Wire / Corrugated are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for discount & clearance offers. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Suitable for featured products, promotions or impulse merchandising",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the dump bin display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Dump Bin rack Manufacturer | Arya Insulation",
      description: "Get dump bin display rack from Arya Insulation Pvt Ltd. MS steel construction for discount & clearance offers. Enquire about sizes and custom configurations.",
      slug: "dump-bin-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Clip Strip & Sachet Hanging Display rack", slug: "clip-strip-and-sachet-hanging-display-rack", image: "/product/Clip Strip & Sachet Hanging Display rack.webp" },
      { title: "Brochure Display Stand", slug: "brochure-display-stand", image: "/product/Brochure Display Stand.webp" },
      { title: "Portable Exhibition Display Stand", slug: "portable-exhibition-display-stand", image: "/product/Portable Exhibition Display Stand.webp" },
      { title: "Countertop Promotional Display Stand", slug: "countertop-promotional-display-stand", image: "/product/countertop-promotional-display-stand.webp" },
    ],
  },
  {
    id: "clip-strip-and-sachet-hanging-display-rack",
    slug: "clip-strip-and-sachet-hanging-display-rack",
    title: "Clip Strip & Sachet Hanging Display rack",
    category: "Promotional & Countertop Display Stands",
    eyebrow: "PROMOTIONAL & COUNTERTOP DISPLAY STANDS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Clip Strip & Sachet Hanging Display rack.webp",
    gallery: ["/images/products/clip-strip-and-sachet-hanging-display-rack.webp"],

    // Hero short description
    desc: "MS steel freestanding / wall-side display rack (as per design) by Arya Insulation Pvt Ltd, designed for hanging sachets & small packs. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Freestanding / wall-side display rack (as per design)",
      "Material": "MS steel primary structure; Plastic / MS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Shelves not fixed; hooks, slots or panel accessories as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Hanging sachets & small packs",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops clip strip & sachet hanging display rack for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Plastic / MS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for hanging sachets & small packs. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the clip strip & sachet hanging display rack. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Clip Strip & Sachet Hanging Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures clip strip & sachet hanging display rack in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "clip-strip-and-sachet-hanging-display-rack",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Brochure Display Stand", slug: "brochure-display-stand", image: "/product/Brochure Display Stand.webp" },
      { title: "Portable Exhibition Display Stand", slug: "portable-exhibition-display-stand", image: "/product/Portable Exhibition Display Stand.webp" },
      { title: "Countertop Promotional Display Stand", slug: "countertop-promotional-display-stand", image: "/product/countertop-promotional-display-stand.webp" },
      { title: "Branded Floor Standing Promotional Display Rack", slug: "branded-floor-standing-promotional-display-rack", image: "/product/Single%20Sided%20Wall%20Gondola%20Rack.webp" },
    ],
  },
  {
    id: "brochure-display-stand",
    slug: "brochure-display-stand",
    title: "Brochure Display Stand",
    category: "Promotional & Countertop Display Stands",
    eyebrow: "PROMOTIONAL & COUNTERTOP DISPLAY STANDS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Brochure Display Stand.webp",
    gallery: ["/images/products/brochure-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for offices & exhibitions. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Acrylic / MS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS frame; accessory finish as specified",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Offices & exhibitions",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops brochure display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Acrylic / MS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for offices & exhibitions. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the brochure display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Brochure Stand Manufacturer | Arya Insulation",
      description: "Get brochure display stand from Arya Insulation Pvt Ltd. MS steel construction for offices & exhibitions. Enquire about sizes and custom configurations.",
      slug: "brochure-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Portable Exhibition Display Stand", slug: "portable-exhibition-display-stand", image: "/product/Portable Exhibition Display Stand.webp" },
      { title: "Countertop Promotional Display Stand", slug: "countertop-promotional-display-stand", image: "/product/countertop-promotional-display-stand.webp" },
      { title: "Branded Floor Standing Promotional Display Rack", slug: "branded-floor-standing-promotional-display-rack", image: "/product/Single%20Sided%20Wall%20Gondola%20Rack.webp" },
      { title: "Spinner Display Rack", slug: "spinner-display-rack", image: "/product/Socks%20Display%20Rack.webp" },
    ],
  },
  {
    id: "portable-exhibition-display-stand",
    slug: "portable-exhibition-display-stand",
    title: "Portable Exhibition Display Stand",
    category: "Promotional & Countertop Display Stands",
    eyebrow: "PROMOTIONAL & COUNTERTOP DISPLAY STANDS",
    brand: "Arya Insulation Pvt Ltd",

    // Product images
    image: "/product/Portable Exhibition Display Stand.webp",
    gallery: ["/images/products/portable-exhibition-display-stand.webp"],

    // Hero short description
    desc: "MS steel countertop / freestanding display stand by Arya Insulation Pvt Ltd, designed for trade fairs & expos. Custom configurations are available as per product and store requirements.",

    // Quick specifications
    quickSpecs: {
      height: "Custom Height",
      displayLevels: "Configurable Levels",
      material: "MS Steel",
      finish: "Powder Coated",
    },

    // Specifications tab
    specs: {
      "Rack Type": "Countertop / freestanding display stand",
      "Material": "MS steel primary structure; Aluminium / MS may be used for compatible panels, shelves, bins, hooks or finish components as required.",
      "Height": "As per requirement / approved drawing",
      "No. of Shelves / Display Levels": "Display tiers, baskets, bins or holders as per design",
      "Load Capacity": "To be confirmed by Arya Insulation Pvt Ltd according to design, dimensions and intended product weight",
      "Finish": "Powder-coated MS finish; other finishes on request",
      "Brand": "Arya Insulation Pvt Ltd",
      "Usage / Application": "Trade fairs & expos",
    },

    // Description tab
    description: `As a display rack manufacturer, Arya Insulation Pvt Ltd develops portable exhibition display stand for retail environments that need practical product presentation and organized merchandising. The MS steel primary frame is configured to suit the intended application, while the display components are selected according to the type of merchandise. Aluminium / MS are listed as typical material options in the supplied product schedule; where used, these are treated as compatible accessories, panels or finish elements alongside the MS steel structure.

The design can be discussed in terms of overall dimensions, mounting or floor-standing format, number of shelves or display levels, rail or hook arrangement, finish and optional branding. For projects involving heavier merchandise, the required load per shelf or display section must be shared so that the manufacturer can confirm a suitable configuration.

These display racks are intended for trade fairs & expos. Retailers, dealers, store planners and fit-out contractors can contact Arya Insulation Pvt Ltd with product dimensions, site measurements, quantity and preferred finish to request a suitable display rack proposal.`,

    // Key features
    features: [
      "MS steel primary frame for a structured retail display",
      "Product-specific layout planned around the merchandise",
      "Customizable dimensions and display configuration",
      "Finish and accessory options to suit the store interior",
      "Designed to organize products and improve in-store visibility",
    ],

    // Customization
    customization: [
      "Height",
      "Width",
      "Depth",
      "Display Levels",
      "Shelf or Rail Layout",
      "Hooks",
      "Bins",
      "Panels",
      "Finish",
      "Branding Options",
    ],
    customizationDescription: "Height, width, depth, display levels, shelf or rail layout, hooks, bins, panels, finish and branding options can be discussed as per project requirements.",

    // Enquiry CTA
    enquiryCta: "Request a Quote from Arya Insulation Pvt Ltd for the portable exhibition display stand. Share your required dimensions, product details, quantity and installation location.",

    // SEO
    seo: {
      title: "Portable Exhibition Stand Manufacturer | Arya Insulation",
      description: "Arya Insulation Pvt Ltd manufactures portable exhibition display stand in MS steel. Contact us for sizes, finishes and customized display options.",
      slug: "portable-exhibition-display-stand",
    },

    brochure: "",

    // Related products (same category)
    relatedProducts: [
      { title: "Countertop Promotional Display Stand", slug: "countertop-promotional-display-stand", image: "/product/countertop-promotional-display-stand.webp" },
      { title: "Branded Floor Standing Promotional Display Rack", slug: "branded-floor-standing-promotional-display-rack", image: "/product/Single%20Sided%20Wall%20Gondola%20Rack.webp" },
      { title: "Spinner Display Rack", slug: "spinner-display-rack", image: "/product/Socks%20Display%20Rack.webp" },
      { title: "Dump Bin Display rack", slug: "dump-bin-display-rack", image: "/product/Dump Bin Display rack.webp" },
    ],
  },
];

export const slugify = (s = "") =>
  String(s)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");