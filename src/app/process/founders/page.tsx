import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Submit Your Company",
    body: "Tell us about your business — stage, sector, raise size, and geography. We review every submission personally.",
  },
  {
    number: "02",
    title: "We Review & Qualify",
    body: "Our team assesses your opportunity against our active investor mandates. If there is a fit, we move forward.",
  },
  {
    number: "03",
    title: "We Match You With Investors",
    body: "We identify investors whose mandate aligns with your raise and make a structured, warm introduction on your behalf.",
  },
  {
    number: "04",
    title: "We Support Through Close",
    body: "We stay involved from first meeting through to term sheet and close — keeping the process moving on both sides.",
  },
];

const benefits = [
  {
    title: "Relevant Introductions Only",
    body: "We only introduce you to investors who have already expressed interest in your sector, stage, and geography.",
  },
  {
    title: "Structured Process",
    body: "No cold emails or scattered outreach. Every introduction is deliberate and prepared.",
  },
  {
    title: "Investor Confidentiality",
    body: "Investor identities and mandates are protected — you meet qualified partners, not a broadcast list.",
  },
  {
    title: "End-to-End Support",
    body: "We remain engaged throughout the raise, not just at the introduction stage.",
  },
];

export default function ForFoundersPage() {
  return (
    <div className="bg-surface">
      <section className="py-section-padding border-b border-outline-variant">
        <div className="px-gutter max-w-container-max mx-auto">
          <div className="max-w-3xl">
            <p className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary-container mb-4">
              For Founders
            </p>
            <h1 className="font-display-lg text-display-lg text-primary mb-6">
              The Right Investors. At the Right Time.
            </h1>
            <div className="w-24 h-1 bg-tertiary-fixed-dim mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Stop pitching cold. We connect you with investors who are actively looking for companies like yours —
              so every conversation starts with a genuine mandate match.
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
            <h2 className="font-headline-md text-headline-md text-primary mb-2">Ready to start your raise?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Submit your company and we will be in touch if there is an active mandate match.
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
