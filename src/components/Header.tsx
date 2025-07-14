import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar - hidden on mobile */}
      <div className="border-b bg-primary/5 hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+91 98765 43210</span>
                <span className="sm:hidden">Call Us</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline">info@vijayprints.com</span>
                <span className="lg:hidden">Email</span>
              </div>
            </div>
            <div className="text-muted-foreground hidden lg:block">
              Premium Textile Manufacturing Since 1985
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex h-14 md:h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-sm md:text-lg font-bold text-primary-foreground">VP</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-primary">Vijay Prints</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Textile Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="enquire" size="sm" asChild className="hidden lg:inline-flex">
              <Link to="/contact">Get Quote</Link>
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-2 pb-4 border-b">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                      <span className="text-sm font-bold text-primary-foreground">VP</span>
                    </div>
                    <div>
                      <h2 className="font-bold text-primary">Vijay Prints</h2>
                    </div>
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary py-2 ${
                        isActive(item.href)
                          ? "text-primary font-semibold"
                          : "text-foreground/80"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t space-y-4">
                    <Button variant="enquire" size="lg" asChild className="w-full">
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Get Quote
                      </Link>
                    </Button>
                    <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>info@vijayprints.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;