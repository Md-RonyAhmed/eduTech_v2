import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { dbConnect } from "@/service/mongo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "EduTech - World's best LMS Platform",
  description: "Explore || Learn || Build || Share",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, poppins.className)}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
