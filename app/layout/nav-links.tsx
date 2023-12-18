"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MenuItems from "../shared/constants/menu";
import { Icon } from "@fluentui/react";
import { useTranslation } from "react-i18next";
// import { useTranslation } from "react-i18next";


export default function NavLinks() {
  const pathname = usePathname();
  const { t } = useTranslation('menu');
  return (
    <>
      {MenuItems.map((link) => {
        return (
          <Link
            key={link.title}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <Icon iconName={link.icon} />
            <div className="hidden md:block">{t(link.title)}</div>
          </Link>
        );
      })}
    </>
  );
}
