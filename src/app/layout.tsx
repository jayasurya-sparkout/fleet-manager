import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neuralpilot | Fleet Manager",
  description: "Fleet manager of Neuralpilot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen w-full bg-background">
            <div className="fixed top-0 left-0 right-0 z-50 p-8">
              <Header
                logoSrc="/brand/logo.svg"
                initials="AM"
                name="Aditya Mittal"
                role="Admin"
                headerClass="rounded-2xl shadow-lg border-0 bg-card !py-0"
              />
            </div>

            <main className="flex-1 height-full px-8 pt-[150px] pb-6 h-screen max-h-screen overflow-hidden">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
