
import logo from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[90px]", className)} src={logo} alt="logo" />
  );
};
