// All site content lives here. Edit names, links and copy in one place.
export const IMG = {
  hero: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000&q=80",
  farm: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  process: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80",
};

export const NAV = [
  ["about", "Team"], ["problem", "Problem"], ["solution", "Solution"], ["impact", "Impact"],
  ["pestle", "PESTLE"], ["budget", "Budget"], ["journey", "Journey"],
];

export const TEAM = [
  { name: "Victor Enang", role: "Founder & Strategy Lead", photo: "/victor.png" },
  { name: "Benjamin Ishimwe", role: "Research & PESTLE Lead", photo: "/benjamin.png" },
  { name: "Angoue David", role: "Operations & Value Chain", photo: "/dave.png" },
  { name: "Mahamat Ouagal Babol", role: "Finance & Budget", photo: "/mahamat.jpeg" },
  { name: "Thierry NTWARI", role: "Marketing & Branding", photo: "/thierry.png" },
];

export const PROBLEM_TEXT =
  "In Musanze District, Rwanda, youth aged 16–30 face high unemployment (15.7% as of May 2026) and exclusion from decent work (24.9% NEET), while the formal job market remains saturated. Agriculture is Rwanda's largest employer (38% of total employment) and holds the greatest potential for youth job creation, yet youth participation remains critically low: only 34% of the agricultural workforce was aged 16–30 as of the 2022 Census, down from 36% in 2017. In Musanze, the 2024 NEET rate stands at 24.6% (male) and 25.7% (female). The sector with the most jobs is the one youth are least willing to enter, because of skills gaps, limited access to land and credit, and outdated perceptions of farming as a last resort.";

export const STATS = [
  { value: 15.7, suffix: "%", decimals: 1, label: "Youth unemployment", note: "May 2026, vs 11.9% for adults" },
  { value: 24.9, suffix: "%", decimals: 1, label: "Youth NEET rate", note: "Not in employment, education or training" },
  { value: 34, suffix: "%", decimals: 0, label: "Of agri workforce is aged 16–30", note: "2022 Census, down from 36% in 2017" },
  { value: 24.6, suffix: "%", decimals: 1, label: "Musanze NEET, young men", note: "2024" },
  { value: 25.7, suffix: "%", decimals: 1, label: "Musanze NEET, young women", note: "2024" },
];

export const CAUSES = [
  { icon: "GraduationCap", title: "Skills gaps", text: "Educated youth leave school without practical agribusiness and processing skills." },
  { icon: "Landmark", title: "Land and credit access", text: "Young people struggle to get land or finance to start farming on their own." },
  { icon: "Frown", title: "Perception of farming", text: "Many see farming as a last resort, not a career with a future." },
  { icon: "Unplug", title: "Value chain gaps", text: "Raw produce is sold cheaply because little local processing adds value." },
];

export const DIVISIONS = [
  { icon: "Sprout", title: "Farming operations", text: "We work with local farmers to source reliable, quality raw materials from Musanze's fertile land.", img: "farm" },
  { icon: "Factory", title: "Agro-processing", text: "We turn raw produce into marketable snacks and food products, keeping the value in Musanze.", img: "process" },
];

export const CHAIN = [
  { icon: "Package", label: "Inputs" }, { icon: "Tractor", label: "Production" },
  { icon: "Warehouse", label: "Storage" }, { icon: "Cog", label: "Processing" },
  { icon: "Box", label: "Packaging" }, { icon: "Megaphone", label: "Marketing" },
  { icon: "Recycle", label: "Waste" },
];

export const FEATURES = [
  { icon: "TrendingUp", title: "Value addition", text: "Local produce becomes higher-value products." },
  { icon: "Users", title: "Jobs for educated youth", text: "Roles for people with diverse skills, not only farm labour." },
  { icon: "Rocket", title: "Independent business units", text: "Each unit runs with a startup mindset." },
  { icon: "Share2", title: "Shared resources", text: "Common infrastructure and expertise cut costs." },
  { icon: "Lightbulb", title: "Product diversity", text: "Room to innovate with new products over time." },
  { icon: "Maximize2", title: "Built to scale", text: "A model that can grow into other districts." },
];

export const IMPACT = [
  { value: 10, prefix: "", suffix: "%", label: "Reduction in Musanze youth NEET rate by 2028" },
  { value: 500, prefix: "", suffix: "", label: "Youth-led agricultural enterprises" },
  { value: 1500, prefix: "", suffix: "", label: "Direct and indirect jobs" },
  { value: 1000, prefix: "", suffix: "", label: "Youth trained in agri-business" },
];

export const PESTLE = [
  {
    key: "Political",
    icon: "Landmark",
    points: [
      "Agriculture is a national priority, with policies promoting productivity, food security and commercialisation",
      "Government encourages private-sector investment and offers tax exemptions for agricultural businesses",
      "Musanze District promotes high-value crops, mechanisation, horticulture and agro-processing",
      "Climate-adapted agriculture and technology modernisation are actively supported",
    ],
  },
  {
    key: "Economic",
    icon: "Coins",
    points: [
      "Musanze's economy is highly dependent on agriculture for employment and income",
      "High input costs (fertiliser, fuel, transport) make farming costly, especially for small-scale farmers",
      "Limited access to loans prevents many from starting or growing agribusinesses",
      "Processing, packaging and selling finished products creates jobs in transport, storage and sales",
      "Youth unemployment and low household incomes continue to limit economic activity",
    ],
  },
  {
    key: "Social",
    icon: "Users",
    points: [
      "Farming is seen as labour-intensive with little economic return, so youth leave for cities",
      "Dense population has fragmented family land into small parcels, leaving little to inherit or use as collateral",
      "Changing perceptions requires reframing agriculture as a high-value, tech-based business",
      "Youth-focused training and Kinyarwanda content can shift attitudes toward agribusiness",
    ],
  },
  {
    key: "Technological",
    icon: "Cpu",
    points: [
      "Rwanda has near-total mobile coverage, but rural usage is low due to device costs and limited digital literacy",
      "Agritech solutions should run on simple phones using USSD",
      "Rwanda Soil Information System (RSIS) provides soil data and fertiliser recommendations, including for Musanze potatoes",
      "Smart Nkunganire connects farmers to inputs and advice, but youth adoption remains low",
      "ACEIoT and drone service providers show existing technical support for agri-tech",
    ],
  },
  {
    key: "Legal",
    icon: "Scale",
    points: [
      "Company registration through RDB is fast and can be done online",
      "Larger agricultural operations face more rigid requirements",
      "Musanze borders Volcanoes National Park, so large-scale farming, livestock, irrigation or processing may require an Environmental Impact Assessment (EIA) from REMA",
      "Compliance increases cost, planning time and project timelines",
    ],
  },
  {
    key: "Environmental",
    icon: "Leaf",
    points: [
      "Fertile volcanic soils, cool temperatures and adequate rainfall make Musanze good for agriculture",
      "Land availability, soil erosion, heavy rainfall, flooding and landslides threaten production",
      "Proximity to Volcanoes National Park requires environmental protection and responsible land use",
      "Sustainable expansion must balance productivity with ecological concerns",
    ],
  },
];

export const TOTAL_BUDGET = 10000;
export const BUDGET = [
  { item: "Agro-processing equipment", pct: 35, why: "Core machines that turn raw produce into finished products." },
  { item: "Raw material sourcing", pct: 15, why: "Buying quality produce from local farmers." },
  { item: "Facility setup", pct: 12, why: "A processing and storage space ready for production." },
  { item: "Packaging and branding", pct: 10, why: "Packaging that protects products and builds a recognisable brand." },
  { item: "Working capital", pct: 8, why: "Day-to-day cash to keep operations moving." },
  { item: "Marketing and distribution", pct: 7, why: "Getting products to shops and customers." },
  { item: "Youth recruitment and training", pct: 5, why: "Hiring and upskilling our first youth team." },
  { item: "Contingency", pct: 5, why: "A buffer for price changes and surprises." },
  { item: "Monitoring and admin", pct: 3, why: "Tracking impact and keeping records in order." },
];

export const JOURNEY = [
  { week: 1, title: "Introduction", text: "We formed KORA LAB as a Think Tank and defined how we work together as a team." },
  { week: 2, title: "Discover Africa", text: "We researched the African context and identified youth unemployment in Musanze as our focus problem." },
  { week: 3, title: "HELP-LAB", text: "We mapped root causes, ran a PESTLE analysis, and shaped our integrated agribusiness solution." },
  { week: 4, title: "Hunt for Treasure", text: "We built our business model, costed the $10,000 budget, and validated our value chain." },
  { week: 5, title: "Launch Your Mission", text: "We finalized our proposal, recorded our pitch, and launched the KORA LAB website." },
];

export const CONTACT = {
  instagram: "https://www.instagram.com/koralab_rw",
  youtube: "https://www.youtube.com/watch?v=xx0X-ro5Rn0",
};