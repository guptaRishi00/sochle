import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer"; // Import Footer
import { getGlobalData } from "@/data/loader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Socle RH",
  description: "Transform Your HR Strategy with Socle RH",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();

  const headerData = globalData?.data?.blocks?.find(
    (b: any) => b.__component === "layout.header"
  );

  const ctaData = globalData?.data?.blocks?.find(
    (b: any) => b.__component === "global.cta"
  );

  const footerData = globalData?.data?.blocks?.find(
    (b: any) => b.__component === "global.footer"
  );

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header data={headerData} />

        <main className="grow">{children}</main>

        {/* Global CTA handles its own visibility (hides on /contact) */}
        <CTA data={ctaData} />

        {/* Footer */}
        <Footer data={footerData} />
      </body>
    </html>
  );
}
