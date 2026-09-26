"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const SideBar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-2 cursor-pointer flex items-center gap-2"
        >
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          console.log(item.label, "→ isActive:", isActive, "| pathname:", pathname);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", {
                "!bg-bank-gradient text-white": isActive,
              })}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default SideBar;