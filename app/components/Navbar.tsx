"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const SimpleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-sm">
        <div className="max-w-6xl mx-auto flex justify-center sm:justify-between items-center">
          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+91 89626 23662</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>aiinstitute@vithupro.in</span>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <span className="text-xs sm:text-sm">Admissions Open 2025</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.jpg"
                  alt="Vithupro Institute Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  Vithupro Institute
                </h1>
                <p className="text-xs text-gray-600">Learn, Build, Ship</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => router.push("/applynow")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-3 rounded-lg font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                router.push("/applynow");
                setIsOpen(false);
              }}
              className="w-full mt-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Apply for Admission
            </button>

            {/* Mobile Contact Info */}
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+91 89626 23662</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>aiinstitute@vithupro.in</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SimpleNavbar;
