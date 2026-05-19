'use client';

import Image from "next/image";
import { useState } from "react";

const IMAGE_1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCGqBPpMTE-0pZTWDsHKp5oSLNwOQ1sMM9wJw5MoywWgZ51GtXantlAAEdc-qm9j6gbKcyyZb7Wq1SuOAW5LgPg9AjnJZ8U7rZcvi2Beq7wtx-AZpfiKzsMR00C-h2G0UTqiFRoYP3qiLtTopsyopq0otDwHv48QZWs7ATJjpSHplC9Zk2o2FoAke0j0u8ICuLo2sY9Ct2hxgO2seaIBkXeGFd3cIBuKb1uWbCvnsI2xBnC5lDSvB3n6qWjUF_4EGQSLxLskwx0sew";
const IMAGE_3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA_bWgVSoSJzU2H9EmVyeX9-qrG6hYI3i_ec5CL1UcUhVJ56PoWuGjyYMs_gLuO1RtpzPJAqUYfU2psxOHAgcKbEhrjkXEqWmN5kejcMcGbjbDllh5K2-grzLSmcoZkxROJTgpaQaZaw4Uqic1B9QMzq8T8FRSln60SoSpUD2gJ0uQXRqxbjWpxFqZvH488ABvzd2O1UXMOMhhetFqXvzfVdzFKhR1TqvCeoVS5kEJndqcwwRtS0niIUyTe2LbLc44-aI05Tx0sCtg";
const IMAGE_5 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB8VWHQwsANjbJslgGpP6cJfrVUB9qNslOYOp8Fk9v3W0Oki7DDpA3C3wM1GS2ozqH-sArQbifRLOsvd8nm-CG4ADxppInlS75LFrqeXMpJhWxD8hqVsCcWHPv1bZiCOWMapE2esCME4qVLc2J8lG8_TwCOAl93T2hEYVSbtaQ727FKP6TgUoB_iz8sYOw5RKT5Pr6XEhmm0ukrSmtYABUCUUyWpO8hiW_QmrYTkIwUiTQpnuDdp8N7zcKgFfU_M69YEJbK_jjUKy0";
const IMAGE_7 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCI6T-dC2-5_7jRkWNU2xocD7GgUghbj9Hrg1BSOV2fO8BP__0wAgfO60Ijrx7ihK4Th2WyM3C90eOOUPptc1U6vAoC2s7mcjYwKDC1s4us0aW-29i-lM0A1j5MKW0uvAWdBtpmjBA2eEr4oAR1q0hefOdbQHaiceMu2SU4_SW6Of3HFJ_0QT7p15b4q4ZDG6hEVuICa774ra5fK2-PAbWLPJph2gFVB1lMasezUu8TCLH-IXPV73qrMay6dBJVv9BCvuUr8j-hAsQ";
const IMAGE_8 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCvbvegD0-Ru-VPS7YPFI2z1pPAnIHBNV59tIGTBms1fzL_e-tKYFiMgDv3Iqcy-87uG4_cOyqm7H5ijeS43OAR15etMhfnXYG_vJ2yOFfx9LALNs6zOixZdkUX976QWOLr2yZV94yCFMqmevzK_Mv8UGQnty02kzpT3udJTfaZp_McxM6QIGqQUdUtRBcCuW8oOmDE0-Z9OKMVTg1_dX9aTXwvT4zusJhO3UH21IPxKS9bvflfiS5fE8JOkIVws_CgVXN0pJOr6r4";

interface Deal {
  id: number;
  name: string;
  sector: string;
  minInvestment: number;
  geography: string;
  badge: string;
  description: string;
  image: string;
}

const deals: Deal[] = [
  {
    id: 1,
    name: "Eco Shaper",
    sector: "Sustainability",
    minInvestment: 2150000,
    geography: "United Kingdom",
    badge: "ESG",
    description:
      "Sustainable product design company reshaping consumer goods manufacturing across the United Kingdom.",
    image: IMAGE_1,
  },
  {
    id: 2,
    name: "Domestic Solar Rental",
    sector: "Renewable Energy",
    minInvestment: 550000,
    geography: "South Africa",
    badge: "ESG",
    description:
      "Residential solar panel rental systems expanding affordable clean energy access across South Africa.",
    image: IMAGE_1,
  },
  {
    id: 3,
    name: "RIP Apparel",
    sector: "Fashion",
    minInvestment: 550000,
    geography: "South Africa",
    badge: "Growth",
    description:
      "Bold fashion label with strong brand identity targeting high-growth consumer markets across South Africa.",
    image: IMAGE_3,
  },
  {
    id: 4,
    name: "Citra Synergy Aviation",
    sector: "Aviation",
    minInvestment: 500000,
    geography: "Middle East",
    badge: "Vetted",
    description:
      "Regional aviation services company capitalising on the rapid expansion of air travel across the Middle East.",
    image: IMAGE_3,
  },
  {
    id: 5,
    name: "ClickDealBuy",
    sector: "Digital Commerce",
    minInvestment: 500000,
    geography: "United Kingdom",
    badge: "Digital",
    description:
      "E-commerce platform connecting buyers and sellers through a streamlined deal-discovery marketplace in the UK.",
    image: IMAGE_5,
  },
  {
    id: 6,
    name: "Me Grow",
    sector: "Artificial Intelligence",
    minInvestment: 500000,
    geography: "India",
    badge: "AI / Tech",
    description:
      "AI-powered growth platform helping businesses in India scale through intelligent automation and data insights.",
    image: IMAGE_5,
  },
  {
    id: 7,
    name: "Destination Ukraine",
    sector: "Construction",
    minInvestment: 150000,
    geography: "Ukraine",
    badge: "Frontier",
    description:
      "Construction and development venture positioned for growth in Ukraine's post-conflict reconstruction phase.",
    image: IMAGE_7,
  },
  {
    id: 8,
    name: "PhantasIA",
    sector: "Entertainment",
    minInvestment: 125000,
    geography: "United Kingdom",
    badge: "Creative",
    description:
      "Immersive entertainment company blending AI-generated experiences with live media production in the UK.",
    image: IMAGE_8,
  },
];

function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(2)}M`;
  }
  return `$${(amount / 1000).toFixed(0)}k`;
}

type InvestmentRange = "" | "0-199999" | "200000-600000" | "2000000+";

export default function OpportunitiesPage() {
  const [sectorFilter, setSectorFilter] = useState("");
  const [investmentFilter, setInvestmentFilter] = useState<InvestmentRange>("");
  const [geographyFilter, setGeographyFilter] = useState("");

  const filtered = deals.filter((deal) => {
    if (sectorFilter && deal.sector !== sectorFilter) return false;
    if (investmentFilter) {
      if (investmentFilter === "0-199999" && deal.minInvestment >= 200000) return false;
      if (
        investmentFilter === "200000-600000" &&
        (deal.minInvestment < 200000 || deal.minInvestment > 600000)
      )
        return false;
      if (investmentFilter === "2000000+" && deal.minInvestment < 2000000) return false;
    }
    if (geographyFilter && deal.geography !== geographyFilter) return false;
    return true;
  });

  return (
    <div className="py-section-padding bg-surface">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="mb-stack-lg">
          <span className="font-label-md text-label-md uppercase tracking-widest text-on-tertiary-container mb-4 block">
            Deal Flow
          </span>
          <h1 className="font-display-lg text-display-lg text-primary mb-4">Current Opportunities</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Vetted investment opportunities across sectors and geographies. Each deal has been reviewed by our team.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-stack-lg">
          <div className="flex flex-col gap-1 min-w-[180px]">
            <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
              INDUSTRY
            </label>
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 font-body-md text-on-surface focus:outline-none focus:border-tertiary-fixed-dim"
            >
              <option value="">All Sectors</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Renewable Energy">Renewable Energy</option>
              <option value="Fashion">Fashion</option>
              <option value="Aviation">Aviation</option>
              <option value="Digital Commerce">Digital Commerce</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Construction">Construction</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 min-w-[180px]">
            <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
              MIN. INVESTMENT
            </label>
            <select
              value={investmentFilter}
              onChange={(e) => setInvestmentFilter(e.target.value as InvestmentRange)}
              className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 font-body-md text-on-surface focus:outline-none focus:border-tertiary-fixed-dim"
            >
              <option value="">Any Amount</option>
              <option value="0-199999">Under $200k</option>
              <option value="200000-600000">$200k–$600k</option>
              <option value="2000000+">$2M+</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 min-w-[180px]">
            <label className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
              GEOGRAPHY
            </label>
            <select
              value={geographyFilter}
              onChange={(e) => setGeographyFilter(e.target.value)}
              className="w-full bg-surface-container-lowest border border-outline-variant px-4 py-2 font-body-md text-on-surface focus:outline-none focus:border-tertiary-fixed-dim"
            >
              <option value="">All Regions</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="South Africa">South Africa</option>
              <option value="Middle East">Middle East</option>
              <option value="India">India</option>
              <option value="Ukraine">Ukraine</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-stack-lg text-center">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              No opportunities match your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filtered.map((deal) => (
              <div
                key={deal.id}
                className="bg-surface-container-lowest border border-outline-variant card-hover-effect transition-all duration-300 relative group overflow-hidden flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-primary-container text-on-primary font-label-md text-caption px-2 py-1 uppercase tracking-wider">
                      {deal.sector}
                    </span>
                    <span className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-label-md text-caption px-2 py-1 uppercase tracking-wider">
                      {deal.badge}
                    </span>
                  </div>
                </div>
                <div className="p-stack-sm flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{deal.name}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-1">
                    {deal.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
                        SECTOR
                      </span>
                      <span className="font-body-md text-body-md text-on-surface">{deal.sector}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
                        Min. Invest
                      </span>
                      <span className="font-body-md text-body-md text-on-surface monospaced-data">
                        {formatCurrency(deal.minInvestment)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                      <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">
                        GEOGRAPHY
                      </span>
                      <span className="font-body-md text-body-md text-on-surface">{deal.geography}</span>
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-primary transition-colors duration-200 text-center">
                    View Detailed Prospectus
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
