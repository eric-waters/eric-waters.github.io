"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../next/mode-toggle";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { IconMenu2 } from "@tabler/icons-react";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false); // Add this line

  const lastScroll = useRef(0);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
      e.currentTarget.blur();

      if (id !== "home") {
        setTimeout(() => {
          setShow(false);
        }, 800);
      }
    }
  }

  function handleDrawerNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
  ) {
    // e.preventDefault();
    // setDrawerOpen(false);

    const id = href.replace("#", "");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        // el.scrollIntoView({ behavior: "smooth" });

        if (id !== "home") {
          setTimeout(() => {
            setShow(false);
          }, 800);
        }
      }
    }, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Show navbar if within 100px of bottom
      if (pageHeight - scrollPosition <= 100) {
        setShow(true);
        lastScroll.current = currentScroll;
        return;
      }

      if (currentScroll < 10) {
        setShow(true);
        lastScroll.current = currentScroll;
        return;
      }
      if (currentScroll < lastScroll.current) {
        setShow(true); // scrolling up
      } else if (currentScroll > lastScroll.current) {
        setShow(false); // scrolling down
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="bg-opacity-90 w-full bg-blue-500 py-2 shadow-md backdrop-blur-md">
        <div className="container mx-auto flex max-w-[90rem] justify-between px-5 md:px-10 lg:px-20">
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <span>Eric Waters</span>
            <BadgeCheck className="h-6 w-6" />
          </div>
          <div className="flex">
            <NavigationMenu className="hidden text-white lg:flex">
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      asChild
                      className={
                        navigationMenuTriggerStyle() +
                        " bg-transparent transition-none"
                      }
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href, setShow)}
                      >
                        {item.name}
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild className="lg:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  className="cursor-pointer border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.15)]/30 text-white hover:bg-[rgba(255,255,255,0.15)]/50 hover:text-white"
                >
                  <IconMenu2></IconMenu2>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="hidden">Menu</DrawerTitle>
                </DrawerHeader>

                <div className="px-4 pb-4">
                  {menuItems.map((item) => (
                    <div key={item.name} className="px-2 py-2 text-xl">
                      <DrawerClose asChild>
                        <Link
                          href={item.href}
                          onClick={(e) =>
                            handleDrawerNavClick(e, item.href, setShow)
                          }
                          className=""
                        >
                          {item.name}
                        </Link>
                      </DrawerClose>
                    </div>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
            <div className="pl-2 lg:pl-5">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
