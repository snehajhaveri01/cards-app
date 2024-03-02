import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { ThemeProvider } from 'styled-components';
import "./globals.css";
import StoreProvider from "./StoreProvider"; 
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Card App",
  description: "Developed by SJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {/* <ThemeProvider theme={{ light: lightTheme, dark: darkTheme }}> */}
            <NavBar />
            {children}
          {/* </ThemeProvider> */}
        </StoreProvider>
      </body>
    </html>
  );
}
