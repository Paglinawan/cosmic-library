import type { Metadata } from "next";
import "./assets/css/globals.css";

export const metadata: Metadata = {
  title: "Cosmic Library",
  description: "Stories touch you, linking the cosmos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
