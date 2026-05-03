"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  const links = [
    { to: isHome ? "#home" : "/", label: "Home" },
    { to: isHome ? "#sobre" : "/#sobre", label: "Sobre" },
    { to: isHome ? "#pacotes" : "/#pacotes", label: "Pacotes" },
    { to: isHome ? "#contato" : "/#contato", label: "Contato" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex flex-row items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-serif text-primary">
          AJ Wings
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} href={to} className="hover:text-primary transition-colors duration-200">
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          {/* Action Button */}
          <Link href={isHome ? "#pacotes" : "/#pacotes"} className="bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-transform hover:scale-105 duration-200 shadow-sm shadow-primary/20">
            Explorar
          </Link>
        </div>
      </div>
    </header>
  );
}
