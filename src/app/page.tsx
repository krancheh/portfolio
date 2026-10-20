import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";

const Home = () => {
    return (
        <>
            <SiteHeader />
            <main>
                <Hero />
            </main>
        </>
    );
};

export default Home;
