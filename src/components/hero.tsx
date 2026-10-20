import { MailIcon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const contacts = [
    {
        href: "mailto:krancheh@gmail.com",
        label: "krancheh@gmail.com",
        icon: MailIcon,
    },
    {
        href: "https://github.com/krancheh",
        label: "github.com/krancheh",
        icon: GithubIcon,
    },
    {
        href: "https://linkedin.com/in/krancheh",
        label: "linkedin.com/in/krancheh",
        icon: LinkedinIcon,
    },
];

/** Hero section of the portfolio. */
const Hero = () => {
    return (
        <section
            id="about"
            aria-labelledby="hero-title"
            className="bg-hero text-hero-foreground"
        >
            <div className="mx-auto flex max-w-295 flex-wrap items-center gap-8 px-6 pt-7 pb-10">
                <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-4.5">
                    <p className="text-xs font-bold tracking-[0.16em] text-hero-muted-foreground uppercase">
                        Frontend Developer
                    </p>
                    <h1
                        id="hero-title"
                        className="text-4xl leading-[1.05] font-extrabold tracking-[-0.03em] text-hero-foreground sm:text-[56px]"
                    >
                        Hi, I’m <span className="text-brand-soft">Kronk</span>
                    </h1>
                    <p className="max-w-115 leading-[1.65] text-hero-foreground/80">
                        I build modern, responsive and accessible web
                        applications with React and TypeScript. I’m passionate
                        about clean code, user experience and exploring new
                        technologies.
                    </p>
                    <ul className="flex flex-wrap gap-x-7 gap-y-2 pt-1.5 text-sm">
                        {contacts.map(({ href, label, icon: Icon }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className="inline-flex min-h-11 items-center gap-2.5 text-hero-foreground/80 transition-colors hover:text-hero-foreground"
                                >
                                    <Icon className="size-4.5" />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Placeholder until the real illustration is ready. */}
                <div
                    role="img"
                    aria-label="Illustration placeholder: cat-eared character resting at a laptop beside a mug"
                    className="relative flex h-75 min-w-0 flex-[1_1_460px] items-center justify-center overflow-hidden rounded-[20px] border border-dashed border-hero-foreground/15 bg-hero-foreground/5"
                >
                    <svg
                        aria-hidden="true"
                        width="420"
                        height="260"
                        viewBox="0 0 420 260"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="max-w-full text-hero-muted-foreground/40"
                    >
                        <rect x="20" y="30" width="70" height="90" rx="4" />
                        <rect x="330" y="20" width="60" height="70" rx="4" />
                        <path d="M205 70 l-18 -42 l30 24 M265 70 l18 -42 l-30 24" />
                        <circle cx="235" cy="100" r="46" />
                        <path d="M219 102 q5 -5 10 0 M241 102 q5 -5 10 0" />
                        <path d="M195 150 q40 -20 80 0 l20 70 h-120 z" />
                        <path
                            d="M110 220 l40 -80 h90 l-30 80 z"
                            className="text-hero-muted-foreground/60"
                        />
                        <circle cx="190" cy="180" r="7" />
                        <path d="M60 222 h300" />
                        <rect
                            x="320"
                            y="180"
                            width="38"
                            height="42"
                            rx="6"
                            className="text-hero-muted-foreground/60"
                        />
                        <path d="M358 190 q14 0 14 12 t-14 12" />
                        <path d="M332 168 q-6 -8 0 -16 M344 168 q-6 -8 0 -16" />
                    </svg>
                    <span className="absolute bottom-3 left-4 text-[11px] font-semibold tracking-[0.08em] text-hero-muted-foreground/70 uppercase">
                        [Hero illustration]
                    </span>
                </div>
            </div>
        </section>
    );
};

export { Hero };
