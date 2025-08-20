import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple White Page",
  description: "A simple white page with a button",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}