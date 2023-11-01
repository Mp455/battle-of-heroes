import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Battle of heroes",
  description: "Batalha de heróis por habilidades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyStyle = {
    backgroundColor: "black",
  };

  return (
    <html lang="en">
      <body className={poppins.className} style={bodyStyle}>
        <Header />
        {children}
      </body>
    </html>
  );
}
