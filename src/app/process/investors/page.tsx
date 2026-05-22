import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Set Your Mandate",
    body: "Tell us your ticket size, target sectors, preferred stage, and geographic focus. The more specific, the better we can match.",
  },
  {
    number: "02",
    title: "We Source & Screen",
    body: "We identify and vet founders that fit your mandate. You never see a deal that hasn't already passed our internal review.",
  },
  {
    number: "03",
    title: "We Make the Introduction",
    body: "We facilitate a warm introduction on your behalf. Every meeting starts with context — no cold pitches, no wasted calls.",
  },
  {
    number: "04",
    title: "You Decide",
    body: "Every decision is yours. We support you from the first conversation through to close, but you remain in full control.",
  },
];

const benefits = [
  {
    title: "Pre-Screened Deal Flow",
    body: "Every founder we introduce has been reviewed against your mandate before you see them.",
  },
  {
    title: "No Direct Cold Outreach",
    body: "You never receive unsolicited pitches. All contact is structured and routed through us.",
  },
  {
    title: "Global Reach",
    body: "We source opportunities across geographies and sectors that institutional channels often overlook.",
  },
  {
    title: "Confidential by Default",
    body: "Your investment criteria and identity are protected throughout the process.",
  },
];

export default function ForInvestorsPage() {
  return (
    <div className="bg-surface">
      <section className="py-section-padding border-b border-outline-variant">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <p className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary-container mb-4">
              For Investors
            </p>
            <h1 className="font-display-lg text-display-lg text-primary mb-6">
              Curated Deal Flow. No Noise.
            </h1>
            <div className="w-24 h-1 bg-tertiary-fixed-dim mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Set your mandate once. We handle the sourcing, screening, and introductions — so your time is spent
              only on deals that are genuinely worth your attention.
            </p>
          </div>
        </div>
      </section>

      <section className="py-section-padding">
        <div className="px-gutter max-w-container-max mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-lg">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-base border-t border-outline-variant pt-stack-sm group hover:bg-surface-container-low transition-colors duration-300"
              >
                <span className="font-label-md text-label-md text-on-tertiary-container mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{step.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-primary-container border-y border-outline-variant">
        <div className="px-gutter max-w-container-max mx-auto">
          <h2 className="font-headline-md text-headline-md text-on-primary mb-stack-lg">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {benefits.map((b) => (
              <div key={b.title} className="space-y-3">
                <div className="w-8 h-0.5 bg-tertiary-fixed-dim"></div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary">{b.title}</h3>
                <p className="font-body-md text-body-md text-on-primary-container">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-padding">
        <div className="px-gutter max-w-container-max mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-stack-md">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">Ready to set your mandate?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Get in touch and we will follow up to discuss your investment criteria.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-8 py-4 bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-primary transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
