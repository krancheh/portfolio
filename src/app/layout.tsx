import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Personal portfolio",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
    return (
        <html
            lang="en"
            className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full scroll-pt-19 antialiased`}
            suppressHydrationWarning
        >
            <body className="flex min-h-full flex-col">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
