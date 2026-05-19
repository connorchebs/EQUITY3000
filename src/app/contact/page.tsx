'use client';

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, access_key: 'ef984d6b-119e-4925-9f22-8284cdf01f46' }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <section className="py-section-padding bg-surface-bright">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-12 gap-stack-md items-end">
          <div className="md:col-span-8">
            <span className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-base block">
              Institutional Inquiry
            </span>
            <h1 className="font-display-lg text-display-lg text-primary mt-base leading-tight">Get in Touch</h1>
            <p className="font-body-lg text-body-lg text-secondary mt-stack-sm max-w-2xl">
              Connect with our global advisors to explore exclusive private equity opportunities or discuss bespoke
              institutional brokerage services.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end">
            <div className="h-24 w-px bg-outline-variant hidden md:block"></div>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid grid-cols-1 gap-stack-lg">
            <div>
              <div className="bg-surface-container-lowest p-stack-md md:p-stack-lg border border-outline-variant">
                <h2 className="font-headline-md text-headline-md text-primary mb-stack-md">Investor Inquiry Form</h2>

                {status === 'success' ? (
                  <div className="py-stack-lg text-center">
                    <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4 block">check_circle</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Inquiry Received</h3>
                    <p className="font-body-md text-on-surface-variant">Thank you. A member of our team will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-stack-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-3 py-3 font-body-md text-on-surface transition-all"
                          id="name" name="name" placeholder="Johnathan Doe" type="text" required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="email">
                          Professional Email
                        </label>
                        <input
                          className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-3 py-3 font-body-md text-on-surface transition-all"
                          id="email" name="email" placeholder="j.doe@firm.com" type="email" required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
                      <div className="flex flex-col gap-2">
                        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="firm">
                          Firm / Organization
                        </label>
                        <input
                          className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-3 py-3 font-body-md text-on-surface transition-all"
                          id="firm" name="firm" placeholder="Institutional Capital Partners" type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="interest">
                          Investment Interest
                        </label>
                        <select
                          className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-3 py-3 font-body-md text-on-surface transition-all appearance-none"
                          id="interest" name="interest"
                        >
                          <option value="">Select Asset Class</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="private-equity">Private Equity</option>
                          <option value="venture-capital">Venture Capital</option>
                          <option value="distressed-debt">Distressed Debt</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-3 py-3 font-body-md text-on-surface transition-all resize-none"
                        id="message" name="message" placeholder="How can our brokerage assist your investment strategy?" rows={4}
                      />
                    </div>
                    {status === 'error' && (
                      <p className="font-body-md text-error">Something went wrong. Please try again.</p>
                    )}
                    <div className="pt-stack-sm">
                      <button
                        className="bg-on-primary-fixed text-on-primary px-10 py-4 font-label-md uppercase tracking-widest hover:bg-primary transition-all active:scale-95 duration-200 disabled:opacity-50"
                        type="submit"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                      </button>
                      <p className="font-caption text-caption text-secondary mt-4">
                        By submitting, you agree to our Investor Privacy Policy.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


<section className="py-stack-lg bg-on-primary-fixed text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md text-center md:text-left">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary-fixed">Market Intelligence</h3>
            <p className="font-body-md text-on-primary-container mt-2">Subscribe to our quarterly private equity outlook.</p>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <input
              className="bg-white/10 border-0 border-b border-white/30 focus:border-tertiary-fixed focus:ring-0 text-white font-body-md px-4 py-2 w-full md:w-64 transition-all"
              placeholder="Institutional Email" type="email"
            />
            <button className="bg-tertiary-fixed text-on-tertiary-fixed font-label-md px-6 py-2 hover:bg-tertiary-fixed-dim transition-colors">
              Join
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
