import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "JourneyRV",
  description: "RV Rentals",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
