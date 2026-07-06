import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CursorProvider } from "@/components/providers/CursorProvider";
import { PremiumCursor } from "@/components/ui/PremiumCursor";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rushyblock",
  description: "A showcase of modern frontend engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <CursorProvider>
              <AtmosphericBackground />
              <PremiumCursor />
              <div className="relative flex min-h-screen flex-col overflow-hidden">
                <Navbar />
                <main className="flex-1 pt-24">{children}</main>
                <Footer />
              </div>
            </CursorProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
