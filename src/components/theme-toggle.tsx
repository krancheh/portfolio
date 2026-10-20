"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle dark mode"
            className="size-11 text-hero-muted-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground dark:hover:bg-hero-foreground/10 [&_svg:not([class*='size-'])]:size-4.5"
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
        >
            {/* Icon swap is CSS-driven so server and client markup match. */}
            <MoonIcon className="dark:hidden" />
            <SunIcon className="hidden dark:block" />
        </Button>
    );
};

export { ThemeToggle };
