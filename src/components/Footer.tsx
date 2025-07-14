import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <span className="text-sm md:text-lg font-bold">VP</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">Vijay Prints</h3>
                <p className="text-xs md:text-sm text-primary-foreground/80">Textile Excellence</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-primary-foreground/80">
              Leading manufacturer of premium textiles with over 35 years of experience in delivering quality fabrics worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/cotton" className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Cotton Fabrics
                </Link>
              </li>
              <li>
                <Link to="/categories/silk" className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Silk Textiles
                </Link>
              </li>
              <li>
                <Link to="/categories/synthetic" className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Synthetic Fabrics
                </Link>
              </li>
              <li>
                <Link to="/categories/home-textiles" className="text-sm md:text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home Textiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-primary-foreground/80">
                    123 Textile Hub, Industrial Area<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground/80 flex-shrink-0" />
                <p className="text-sm md:text-base text-primary-foreground/80">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground/80 flex-shrink-0" />
                <p className="text-sm md:text-base text-primary-foreground/80 break-all">info@vijayprints.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base text-primary-foreground/80">
            © 2024 Vijay Prints. All rights reserved. | Premium Textile Manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;