"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarGeneral() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/reto/1", label: "Reto 1" },
    { href: "/reto/2", label: "Reto 2" },
    { href: "/reto/3", label: "Reto 3" },
    { href: "/reto/4", label: "Reto 4" },
    { href: "/reto/5", label: "Reto 5" },
    { href: "/reto/6", label: "Reto 6" },
    { href: "/reto/7", label: "Reto 7" },
  ];

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-300">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <h1 className="text-lg font-semibold text-gray-800">Hackaton</h1>
        <ul className="flex gap-4 text-sm font-medium">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                } transition-colors`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
