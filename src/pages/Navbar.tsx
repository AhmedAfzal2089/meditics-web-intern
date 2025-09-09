// src/components/Navbar.tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "@/assets/Logo";

export function Navbar() {
  return (
    <header className="w-[90%] px-6 py-4 bg-white shadow-md flex justify-between items-center m-auto">
      <div className="text-xl font-bold">
        <Logo />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <a href="#home">HOME</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#services">ABOUT</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#about">SERVICES</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#contact">TEAMS</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#contact">BLOG</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#contact">CONTACT</a>
            </NavigationMenuItem>
            <div className="">
              <Sheet>
                <SheetTrigger>
                  <Menu />
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col p-4">
                    <div>
                      <Logo />
                    </div>
                    <div>About Us</div>
                    <div>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Iste consequuntur mollitia incidunt dicta consequatur at
                      facere. Voluptatibus tempore aut praesentium, animi non
                      maiores?
                    </div>
                    <div></div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* CTA Button */}
      <Button className="hidden md:inline-block">Book Appointment</Button>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-10 P-4">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <Button className="mt-4">Book Now</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
