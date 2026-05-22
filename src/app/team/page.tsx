import Image from "next/image";

const BRIAN_PHOTO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBfSxX3_130D4ipnFS5n78L53hepTU5PRtqyLrluF3jU2bf2gfrTu43I3R0MKGnCDKnRMzc1dCD1BDUhASune2sCGGqMZxsgtNdS_IF_xW16sEXJCZ9CJY8JRo5x_w1erbeSUr82hhCb6E6SKnK4l4i8y2QfTuybG5KgRtsuikYauZuqtbrErBVEiwMo_S9gDJsN66YnC4bZKZOzKcsb7VsvtmEgbIKmcvLAIA1pC1b2oiYAsPG71ztxCo9Aj2vEX_m8WgKW4z3AD0";
const CONNOR_PHOTO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXtkuC9Mh9DSWwsWfF4l_OtILoneJ65s4fGMeuC6gBJixTAx1JT61uP5EJRWZ6roRBv1VvJp5BhFJCQrfA4zW2hKNArV8k0jaji3TMH2JqkG5b4k_qxOrl3BRsN4Aim2FGklfDeRq7N45b3XlV99v1zbiAtKsxP0aw07waffFHOpfiXPnlQj4Ql8HD_Q5urreI5Ih1RZPxLenozwu6jxHmyPGqZtf4_mqvr70br-YZwwMpQRISdpGlToch1YsEatEj4dVlVyhnp6cGxw";

const LinkedInIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function TeamPage() {
  return (
    <div className="max-w-container-max mx-auto px-gutter py-section-padding">
      <section className="mb-stack-lg border-b border-outline-variant pb-stack-md">
        <div className="max-w-3xl">
          <p className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary-container mb-4">
            Leadership &amp; Stewardship
          </p>
          <h1 className="font-display-lg text-display-lg mb-6">
            Institutional Heritage. <br />
            Future-Focused Precision.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Our team represents over a century of cumulative experience at the world&apos;s most prestigious financial
            institutions. We combine rigorous analytical discipline with the discreet service expected by sovereign
            wealth and private capital.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:justify-center">
        <article className="md:col-span-6 lg:col-span-4 bg-surface-container-lowest border border-outline-variant card-hover-effect flex flex-col transition-all duration-1000 opacity-100 translate-y-0">
          <div className="aspect-[4/3] overflow-hidden relative">
            <Image
              src={BRIAN_PHOTO}
              alt="Brian Cheboski"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-stack-sm flex-grow">
            <p className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary-container mb-1">
              Founder, Private Equity Broker
            </p>
            <h3 className="font-headline-sm text-headline-sm mb-4">Brian Cheboski, MBA</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Bio coming soon.</p>
          </div>
          <div className="px-stack-sm py-4 border-t border-outline-variant flex justify-between items-center bg-surface-bright">
            <span className="font-label-md text-label-md text-primary"></span>
            <div className="flex items-center gap-3">
              <a href="#" className="text-outline hover:text-primary transition-colors flex items-center">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </article>

        <article className="md:col-span-6 lg:col-span-4 bg-surface-container-lowest border border-outline-variant card-hover-effect flex flex-col transition-all duration-1000 opacity-100 translate-y-0">
          <div className="aspect-[4/3] overflow-hidden relative">
            <Image
              src={CONNOR_PHOTO}
              alt="Connor Cheboski"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-stack-sm flex-grow">
            <p className="font-label-md text-label-md uppercase tracking-wider text-on-tertiary-container mb-1">
              Job title
            </p>
            <h3 className="font-headline-sm text-headline-sm mb-4">Connor Cheboski</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Bio coming soon.</p>
          </div>
          <div className="px-stack-sm py-4 border-t border-outline-variant flex justify-between items-center bg-surface-bright"></div>
        </article>
      </div>
    </div>
  );
}
