import { SiteNav } from "@/components/site-nav";

const SiteHeader = () => {
    return (
        <header className="sticky top-0 z-50 bg-hero text-hero-foreground">
            <div className="mx-auto max-w-295 px-6">
                <SiteNav />
            </div>
        </header>
    );
};

export { SiteHeader };
