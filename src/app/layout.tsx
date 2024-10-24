import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


export const metadata: Metadata = {
  title: "Movie Time",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`flex flex-col min-h-screen `}>
          <Navbar />
          <div className="flex flex-grow" >
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}