import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Nautic | Consultoria em Processos & Performance",
  description:
    "Consultoria especializada em gestão de processos, análise de performance e automação operacional. Transformamos processos em vantagem competitiva.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={interTight.variable}>{children}</body>
    </html>
  );
}
