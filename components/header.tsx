"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { useSidebar } from "./ui/sidebar";
import { Sidebar, X } from "lucide-react";

const menuItems = [
  { href: "/", title: "Transactions", subTitle: "- Track and manage your transactions" },
];

export default function Header() {
  const pathname = usePathname();
  const { setOpenMobile, openMobile } = useSidebar();

  const currentPathname = useMemo(() => {
    return menuItems.find((item) => item.href === pathname);
  }, [pathname]);

  return (
    <div className="sticky top-0 z-10 overflow-visible">
      <header
        className={cn(
          "relative flex items-center px-5 py-5 transition-colors duration-200 ease-out md:px-6"
        )}
      >
        <div className="container mx-auto px-0 md:px-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-contrast-low hidden text-sm font-medium md:flex">
                <span className="text-contrast-high">
                  {currentPathname?.title}&nbsp;
                </span>
                {currentPathname?.subTitle}
              </h1>
              <Image
                className="logo flex md:hidden"
                src="/afripay-logo.png"
                alt="Afripay Logo"
                width={100}
                height={20}
                priority
              />
            </div>

            <div className="flex items-center gap-6">
              <motion.button
                className="flex md:hidden"
                onClick={() => setOpenMobile(!openMobile)}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {openMobile ? (
                    <motion.span
                      key="checkmark"
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="grid place-content-center"
                    >
                      <X className="stroke-contrast-high size-4.5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="grid place-content-center"
                    >
                      <Sidebar className="stroke-contrast-high size-4.5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </header>
      <Separator />
    </div>
  );
}

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};
