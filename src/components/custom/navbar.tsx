"use client";

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
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

const menuItems = [
  // { name: "Home", href: "/" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  return (
    <div className="flex justify-between w-full">
      <div className="font-bold text-xl flex items-center gap-2 text-white">
        {/* <Avatar className="mr-2">
          <AvatarImage src="eric-blue.jpg" alt="Eric Waters" />
          <AvatarFallback className="text-sm">EW</AvatarFallback>
        </Avatar> */}
        <span>Eric Waters</span>
        <BadgeCheck className=" h-6 w-6" />
      </div>
      <div className="flex">
        <NavigationMenu className="hidden lg:flex text-white">
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
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Drawer>
          <DrawerTrigger asChild className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer text-white hover:text-white bg-[rgba(255,255,255,0.15)]/30 border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.15)]/50"
            >
              <IconMenu2></IconMenu2>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="hidden">Menu</DrawerTitle>
              {menuItems.map((item) => (
                <div key={item.name} className="text-xl px-2 py-2">
                  <DrawerClose asChild>
                    <Link href={item.href} className="">
                      {item.name}
                    </Link>
                  </DrawerClose>
                </div>
              ))}
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
        <div className="pl-2 lg:pl-5">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
