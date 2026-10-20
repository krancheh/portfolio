"use client";

import { DownloadIcon } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

const SiteNav = () => {
    return (
        <nav
            aria-label="Main"
            className="flex min-h-19 flex-wrap items-center justify-between gap-4"
        >
            <a
                href="#top"
                className="flex items-center gap-2 text-[22px] font-extrabold tracking-[-0.02em] text-hero-foreground"
            >
                Kronk
                <span
                    aria-hidden="true"
                    className="mt-1.5 size-1.75 rounded-full bg-primary"
                />
            </a>

            <Tabs defaultValue="experience" activationMode="manual">
                <TabsList variant="line" surface="hero" className="flex-wrap">
                    {sections.map(({ id, label }) => (
                        <TabsTrigger key={id} value={id} asChild>
                            <a href={`#${id}`}>{label}</a>
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                <Button
                    asChild
                    variant="outline"
                    className="h-10 border-hero-muted-foreground/50 bg-transparent px-4 text-[13px] font-semibold text-hero-foreground shadow-none hover:bg-hero-foreground/10 hover:text-hero-foreground dark:border-hero-muted-foreground/50 dark:bg-transparent dark:hover:bg-hero-foreground/10"
                >
                    <a href="#cv">
                        <DownloadIcon />
                        Download CV
                    </a>
                </Button>
            </div>
        </nav>
    );
};

export { SiteNav };
