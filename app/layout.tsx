import "./globals.css";
import { Inter } from "next/font/google";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModel from "./components/modals/RegisterModel";

const inter = Inter({ subsets: ["latin"] });
const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${font.className}`}>
        <ClientOnly>
          <RegisterModel />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
