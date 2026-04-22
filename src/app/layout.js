import "./globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Para ti ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}