"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const InstituteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Admissions", href: "/admissions" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ];

  const topBarInfo = [
    { icon: Phone, text: "+91 89626 23662" },
    { icon: Mail, text: "aiinstitute@vithupro.in" },
  ];

  // Handle scroll effect and navbar height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target) &&
        navbarRef.current &&
        !navbarRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Information Bar */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {topBarInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-1 transition-transform duration-200 hover:scale-105"
                >
                  <Icon className="h-3 w-3 flex-shrink-0" />
                  <span className="text-xs whitespace-nowrap">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        ref={navbarRef}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl"
            : "bg-gradient-to-r from-white to-blue-50/30 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center space-x-2 sm:space-x-3">
              <div className="p-1 sm:p-2">
                <Image
                  src="/logo.jpg"
                  alt="Elite Institute Logo"
                  width={48}
                  height={48}
                  className="h-8 w-8 sm:h-12 sm:w-12 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="max-w-[140px] sm:max-w-none">
                <h1
                  className={`text-sm sm:text-xl font-bold transition-colors duration-300 leading-tight ${
                    isScrolled ? "text-blue-800" : "text-gray-900"
                  }`}
                >
                  Vithupro Institute
                </h1>
                <p
                  className={`text-[10px] sm:text-xs transition-colors duration-300 ${
                    isScrolled ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  Learn, Build, Ship
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-4 flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                      isActive(item.href)
                        ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                        : "text-gray-800 hover:text-blue-700 hover:bg-white/80"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}

                {/* CTA Button */}
                <button
                  className={`ml-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white whitespace-nowrap`}
                  onClick={() => router.push("/applynow")}
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Tablet/Mobile CTA Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                className={`px-3 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                  isScrolled
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                }`}
                onClick={() => router.push("/applynow")}
              >
                Apply
              </button>
              <button
                ref={hamburgerRef}
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-gray-800 hover:text-blue-700 hover:bg-white/80"
                }`}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ top: `${navbarHeight}px` }}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Content */}
          <div
            className={`absolute right-0 top-0 w-full max-w-sm h-full bg-white/95 backdrop-blur-md shadow-2xl border-l border-gray-200 overflow-y-auto transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <a
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-blue-600 bg-blue-50 border-r-4 border-blue-600"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                    }`}
                    onClick={handleMobileLinkClick}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="border-t border-gray-200 px-4 py-6 bg-gradient-to-r from-blue-50 to-purple-50/30 mt-4">
              <div className="space-y-3">
                {topBarInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-sm text-gray-600 transition-transform duration-200 hover:translate-x-1"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm break-words">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Additional Mobile CTA */}
              <button
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
                onClick={() => {
                  router.push("/applynow");
                  handleMobileLinkClick();
                }}
              >
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default InstituteNavbar;
