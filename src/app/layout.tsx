import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jima's Blog",
  description: "Simple blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className}  ${process.env.NODE_ENV=="development" ? "debug-screens" : ""}`}>
        <Navbar/>
        {children}
        {/* // <Footer /> */}
        </body>
    </html>
  );
}
