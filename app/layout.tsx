import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StyledProvider } from "./providers/styled-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insany Shop",
  description: "E-commerce app created with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        <StyledProvider>{children}</StyledProvider>
      </body>
    </html>
  );
}
