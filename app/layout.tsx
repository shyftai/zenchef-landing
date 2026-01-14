import type { Metadata } from "next";
import "./globals.css";
import { PasswordProtection } from "@/components/auth/PasswordProtection";

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
        <PasswordProtection>
          {children}
        </PasswordProtection>
      </body>
    </html>
  );
}
