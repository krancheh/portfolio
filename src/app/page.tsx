import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-6 px-4 py-24">
      <p className="text-xs font-bold tracking-[0.14em] text-brand uppercase">
        Portfolio
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight">[YOUR NAME]</h1>
      <p className="max-w-prose text-muted-foreground">
        Next.js + shadcn/ui starter. Replace this page with the portfolio home.
      </p>
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </main>
  );
};

export default Home;
