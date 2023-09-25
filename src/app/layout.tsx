import "./global.css";
import "../vendor/normalize.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News App",
  description: "Newsfeed with sorting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
