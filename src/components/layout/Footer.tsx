import Image from "next/image";
import { contact, footer } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        backgroundImage:
          "radial-gradient(120% 90% at 100% 0%, rgba(0,151,218,0.55) 0%, rgba(0,60,90,0.35) 30%, rgba(0,0,0,0) 60%), linear-gradient(#000, #000)",
      }}
    >
      <Reveal className="container-x flex flex-col gap-12 py-16 md:py-20" stagger={0.06}>
        <a href="#" data-reveal aria-label="Dubhe Merak — back to top" className="w-fit">
          <Image
            src="/images/logo-dubhe-merak.png"
            alt="Dubhe Merak"
            width={1778}
            height={172}
            className="h-auto w-[280px] sm:w-[421px]"
          />
        </a>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div data-reveal className="flex max-w-[440px] flex-col gap-4">
            <p className="font-display text-[clamp(1.75rem,1.3rem+1.2vw,2.25rem)] leading-10 font-light tracking-[-0.5px]">
              {footer.headline[0]}
              <br />
              {footer.headline[1]}
            </p>
            <p className="font-sans text-base leading-6 font-light md:text-lg">{footer.body}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-10 text-sm sm:flex sm:gap-16">
            {footer.groups.map((g) => (
              <div key={g.title} data-reveal className="flex flex-col gap-4">
                <p className="font-sans font-bold tracking-[1px] text-brand uppercase">{g.title}</p>
                <ul className="flex flex-col gap-4">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="font-sans text-muted transition-colors hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div data-reveal className="flex flex-col gap-4">
              <p className="font-sans font-bold tracking-[1px] text-brand uppercase">Contact</p>
              <a href={`mailto:${contact.email}`} className="font-sans text-muted transition-colors hover:text-white">
                {contact.email}
              </a>
              <a href={contact.phoneHref} className="font-sans text-muted transition-colors hover:text-white">
                {contact.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>

        <div data-reveal className="flex flex-col items-start text-[clamp(1.5rem,1rem+1.4vw,2rem)] sm:items-end">
          <a href={`mailto:${contact.email}`} className="font-sans font-light transition-colors hover:text-brand">
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="font-sans font-medium text-brand transition-colors hover:text-white">
            {contact.phoneDisplay}
          </a>
        </div>

        <div className="flex flex-col gap-4 border-t border-divider pt-6 font-sans text-xs leading-4 text-muted sm:flex-row sm:justify-between">
          <p>© 2026 Dubhe Merak Pvt Ltd</p>
          <ul className="flex flex-wrap gap-6">
            {footer.legal.map((l) => (
              <li key={l}>
                <a href="#" className="transition-colors hover:text-white">
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Built by Phitany
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
    </footer>
  );
}
