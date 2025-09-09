// src/components/Navbar.tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import Logo from "@/assets/Logo";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function Navbar() {
  return (
    <div className="bg-[#021c35]">
      <header className="w-[90%] px-6 py-4 bg-white shadow-md flex justify-between items-center m-auto h-25 rounded-2xl">
        <div className="text-xl font-bold">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <a href="#home" className="font-semibold">
                  HOME
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#services" className="font-semibold">
                  ABOUT
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#about" className="font-semibold">
                  SERVICES
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#contact" className="font-semibold">
                  TEAMS
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#contact" className="font-semibold">
                  BLOG
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#contact" className="font-semibold">
                  CONTACT
                </a>
              </NavigationMenuItem>

              <Dialog>
                <DialogTrigger>
                  <Search className="rounded-md" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                    <DialogDescription>
                      <Input />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <div>
                <Sheet>
                  <SheetTrigger>
                    <Menu />
                  </SheetTrigger>
                  <SheetContent>
                    <div className="flex flex-col h-full">
                      <div className="flex-grow flex flex-col p-4">
                        <div className="p-5">
                          <Logo />
                        </div>
                        <Separator className="my-4" />
                        <div className="text-2xl font-semibold py-4">
                          About Us
                        </div>
                        <div className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iste consequuntur mollitia incidunt dicta
                          consequatur at facere. Voluptatibus tempore aut
                          praesentium, animi non maiores?
                        </div>

                        <div className="text-2xl font-semibold py-4">
                          Location
                        </div>
                        <div className="flex gap-2 items-center">
                          <MapPin className="text-blue-600" />
                          <div className="text-gray-500">
                            123 Main Street , New York , NY 10012
                          </div>
                        </div>

                        <div className="text-2xl font-semibold py-4">
                          Contact Us
                        </div>
                        <div className="flex gap-2 items-center">
                          <Phone className="text-blue-600" />
                          <div className="text-gray-500">123-456-7890</div>
                        </div>
                      </div>

                      <div className="p-4 border-t mt-4">
                        <div className="text-2xl font-semibold mb-2">
                          Follow us
                        </div>
                        <div className="flex gap-4">
                          <Facebook />
                          <Twitter />
                          <Instagram />
                          <Youtube />
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Button */}
        <Button className="hidden md:inline-block bg-green-200 text-black ">
          Book Appointment
        </Button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mx-20 p-4 ">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#home">Teams</a>
                <a href="#home">Blog</a>
                <a href="#contact">Contact</a>
                <Dialog>
                  <DialogTrigger>
                    <Search className="rounded-md" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Search</DialogTitle>
                      <DialogDescription>
                        <Input />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <div>
                  <Sheet>
                    <SheetTrigger>
                      <Menu />
                    </SheetTrigger>
                    <SheetContent>
                      <div className="flex flex-col h-full">
                        <div className="flex-grow flex flex-col p-4">
                          <div className="p-5">
                            <Logo />
                          </div>
                          <Separator className="my-4" />
                          <div className="text-2xl font-semibold py-4">
                            About Us
                          </div>
                          <div className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iste consequuntur mollitia incidunt dicta
                            consequatur at facere. Voluptatibus tempore aut
                            praesentium, animi non maiores?
                          </div>

                          <div className="text-2xl font-semibold py-4">
                            Location
                          </div>
                          <div className="flex gap-2 items-center">
                            <MapPin className="text-blue-600" />
                            <div className="text-gray-500">
                              123 Main Street , New York , NY 10012
                            </div>
                          </div>

                          <div className="text-2xl font-semibold py-4">
                            Contact Us
                          </div>
                          <div className="flex gap-2 items-center">
                            <Phone className="text-blue-600" />
                            <div className="text-gray-500">123-456-7890</div>
                          </div>
                        </div>

                        <div className="p-4 border-t mt-4">
                          <div className="text-2xl font-semibold mb-2">
                            Follow us
                          </div>
                          <div className="flex gap-4">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                            <Youtube />
                          </div>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
                <Button className="mt-4">Book Now</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
