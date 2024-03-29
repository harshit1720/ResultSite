import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Result Online",
  description: "HomePage of Result Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
      <div className="container">

        <Navbar/>
        {children}
        <Footer />
      </div>
      </body>
    </html>
  );
}
