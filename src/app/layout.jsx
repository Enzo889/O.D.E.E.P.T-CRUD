import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import PageWrapper from "./page-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "O.D.E.E.P.T | CRUD",
  description: "Author: Enzo Bustamante",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageWrapper>
          <Navbar />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
