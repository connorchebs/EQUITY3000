import Image from "next/image";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUtSbq-jbxWQWmTQHR1gqepWrAVm-e1MY7GxfOUMYqv0SinNRlUw_x62QGdc_SC8pfYZ817srMX5hFSNu6oBc_-NbsHPjkOlE7bOBs2yvbkbSX7OGuL1uecWn9FtSiUF88CGoIOuPqMiTqIqMwjtFSj-XUN_ykh9usXCQ_xaNae02NhKVWNb2l4dVSnCFSsnNC6p3pXlfZN95SmSyOdCEe-kBT2n2_sfpt-qf6QaUAHDe4pgAa-qbEdRcb7yocbW33b08sKVDWFNI";

export default function ContactPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
            <div className="md:col-span-4 space-y-stack-md">
              <div className="p-stack-md border border-outline-variant border-t-2 border-t-tertiary-fixed-dim bg-surface-container-lowest">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-sm">London Headquarters</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-on-secondary-container mt-1">location_on</span>
                    <p className="font-body-md text-secondary">
                      30 St Mary Axe (The Gherkin),
                      <br />
                      EC3A 8BF London,
                      <br />
                      United Kingdom
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-on-secondary-container mt-1">call</span>
                    <p className="font-body-md text-secondary">+44 (0) 20 7946 0123</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-on-secondary-container mt-1">mail</span>
                    <p className="font-body-md text-secondary">london.desk@equity3000.com</p>
                  </div>
                </div>
              </div>
              <div className="p-stack-md border border-outline-variant bg-surface-container-lowest">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-stack-sm">New York Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-on-secondary-container mt-1">location_on</span>
                    <p className="font-body-md text-secondary">
                      One World Trade Center,
                      <br />
                      NY 10007 New York,
                      <br />
                      United States
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-on-secondary-container mt-1">call</span>
                    <p className="font-body-md text-secondary">+1 (212) 555-0198</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-on-secondary-container mt-1">mail</span>
                    <p className="font-body-md text-secondary">ny.desk@equity3000.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="bg-surface-container-lowest p-stack-md md:p-stack-lg border border-outline-variant">
                <h2 className="font-headline-md text-headline-md text-primary mb-stack-md">Investor Inquiry Form</h2>
                <form action="#" method="POST" className="space-y-stack-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
                    <div className="flex flex-col gap-2">
                      <label
                        className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-0 py-3 font-body-md text-on-surface transition-all"
                        id="name"
                        name="name"
                        placeholder="Johnathan Doe"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                        htmlFor="email"
                      >
                        Professional Email
                      </label>
                      <input
                        className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-0 py-3 font-body-md text-on-surface transition-all"
                        id="email"
                        name="email"
                        placeholder="j.doe@firm.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-sm">
                    <div className="flex flex-col gap-2">
                      <label
                        className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                        htmlFor="firm"
                      >
                        Firm / Organization
                      </label>
                      <input
                        className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-0 py-3 font-body-md text-on-surface transition-all"
                        id="firm"
                        name="firm"
                        placeholder="Institutional Capital Partners"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                        htmlFor="interest"
                      >
                        Investment Interest
                      </label>
                      <select
                        className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-0 py-3 font-body-md text-on-surface transition-all appearance-none"
                        id="interest"
                        name="interest"
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
                    <label
                      className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="bg-surface-container-low border-0 border-b border-outline-variant focus:border-tertiary-fixed-dim focus:ring-0 px-0 py-3 font-body-md text-on-surface transition-all resize-none"
                      id="message"
                      name="message"
                      placeholder="How can our brokerage assist your investment strategy?"
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="pt-stack-sm">
                    <button
                      className="bg-on-primary-fixed text-on-primary px-10 py-4 font-label-md uppercase tracking-widest hover:bg-primary transition-all active:scale-95 duration-200"
                      type="submit"
                    >
                      Submit Inquiry
                    </button>
                    <p className="font-caption text-caption text-secondary mt-4">
                      By submitting, you agree to our Investor Privacy Policy.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-container-high overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-stack-lg">
            <h2 className="font-headline-md text-headline-md text-primary">Global Strategic Network</h2>
            <p className="font-body-md text-secondary mt-stack-sm mx-auto max-w-xl">
              Our presence spans across key financial hubs, providing on-the-ground intelligence and direct access to
              emerging markets.
            </p>
          </div>
          <div className="relative w-full aspect-video md:aspect-[21/9] border border-outline-variant shadow-sm grayscale opacity-90 hover:grayscale-0 transition-all duration-700 overflow-hidden bg-surface-container">
            <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10"></div>
            <Image src={MAP_IMAGE} alt="Global Presence Map" fill className="object-cover" />
            <div className="absolute inset-0 pointer-events-none z-20">
              <div className="absolute top-[35%] left-[24%] flex flex-col items-center">
                <div className="w-2 h-2 bg-tertiary-fixed rounded-full animate-pulse"></div>
                <span className="font-label-md text-[10px] text-white bg-on-primary-fixed/80 px-2 py-0.5 mt-1 backdrop-blur-sm">
                  NEW YORK
                </span>
              </div>
              <div className="absolute top-[28%] left-[47%] flex flex-col items-center">
                <div className="w-2 h-2 bg-tertiary-fixed rounded-full animate-pulse"></div>
                <span className="font-label-md text-[10px] text-white bg-on-primary-fixed/80 px-2 py-0.5 mt-1 backdrop-blur-sm">
                  LONDON
                </span>
              </div>
              <div className="absolute top-[42%] left-[60%] flex flex-col items-center">
                <div className="w-1.5 h-1.5 bg-outline rounded-full"></div>
                <span className="font-label-md text-[10px] text-white bg-on-primary-fixed/80 px-2 py-0.5 mt-1 backdrop-blur-sm">
                  DUBAI
                </span>
              </div>
              <div className="absolute top-[58%] left-[78%] flex flex-col items-center">
                <div className="w-1.5 h-1.5 bg-outline rounded-full"></div>
                <span className="font-label-md text-[10px] text-white bg-on-primary-fixed/80 px-2 py-0.5 mt-1 backdrop-blur-sm">
                  SINGAPORE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-stack-lg bg-on-primary-fixed text-on-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-md text-center md:text-left">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary-fixed">Market Intelligence</h3>
            <p className="font-body-md text-on-primary-container mt-2">
              Subscribe to our quarterly private equity outlook.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <input
              className="bg-white/10 border-0 border-b border-white/30 focus:border-tertiary-fixed focus:ring-0 text-white font-body-md px-4 py-2 w-full md:w-64 transition-all"
              placeholder="Institutional Email"
              type="email"
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
