"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const navLinks = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "About Us",
      link: "/about-us",
    },
    {
      id: 3,
      label: "Service",
      children: [
        {
          id: 3.1,
          label: "Staff Augmentation Services",
          link: "/staff-augmentation-services",
          description:
            "Professional staffing solutions for your business needs",
        },
        {
          id: 3.2,
          label: "Product Provisioning Services",
          link: "/product-provisioning-services",
          description: "Complete product delivery and provisioning solutions",
        },
      ],
    },
    {
      id: 4,
      label: "Blog",
      link: "/blog",
    },
    {
      id: 5,
      label: "Certification",
      link: "/certification",
    },
    {
      id: 6,
      label: "Industrial Serve",
      link: "/industrial-serve",
    },
    {
      id: 7,
      label: "Contact Us",
      link: "/contact-us",
    },
  ];

  // Helper to check if a link is active
  const isActive = (link) => {
    // For root, match exactly
    if (link === "/") return pathname === "/";
    // For others, match if pathname starts with link
    return pathname.startsWith(link);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-transparent ">
      <div className="flex-shrink-0">
        <Link href="/" className="text-white text-xl font-bold">
          Company Logo
        </Link>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-2 ">
          {navLinks.map((nav) => {
            if (nav.children) {
              return (
                <NavigationMenuItem key={nav.id}>
                  <NavigationMenuTrigger className="bg-transparent  text-white text-xl    data-[state=open]:text-white data-[state=open]:underline">
                    {nav.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[300px] ">
                      {nav.children.map((child) => (
                        <li key={child.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.link}
                              className={cn(
                                "block select-none space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:underline",
                                isActive(child.link) && "underline"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">
                                {child.label}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {child.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            } else {
              return (
                <NavigationMenuItem key={nav.id}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={nav.link}
                      className={cn(
                        "group inline-flex h-10  w-max items-center justify-center rounded-md px-4 py-2 text-xl font-medium transition-colors hover:underline text-white hover:text-[#7181E8] hover:bg-transparent disabled:pointer-events-none disabled:opacity-50 ",
                        isActive(nav.link) && "underline"
                      )}
                    >
                      {nav.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default NavBar;
