import type { Metadata } from "next";
import { Preahvihear } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";

const font = Preahvihear({
   subsets: ["latin"],
   weight: ["400"],
});

export const metadata: Metadata = {
   title: "Dang huynh huy - Portfolio",
   description: "My personal portfolio",
   icons: "/logo-light.svg",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={`${font.className}`}>
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
}
