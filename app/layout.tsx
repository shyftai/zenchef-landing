import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Intelligence Cockpit | Zenchef Netherlands Expansion",
  description: "Stop manually hunting for leads. Start having conversations with your data. AI-powered market intelligence that tells you exactly who to call and why.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
