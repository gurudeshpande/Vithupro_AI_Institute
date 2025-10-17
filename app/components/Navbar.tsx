"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const InstituteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      // dropdown: [
      //   { name: "Our History", href: "/about/history" },
      //   { name: "Vision & Mission", href: "/about/vision" },
      //   { name: "Leadership", href: "/about/leadership" },
      //   { name: "Accreditation", href: "/about/accreditation" },
      // ],
    },
    {
      name: "Academics",
      href: "/academics",
      dropdown: [
        { name: "Programs", href: "/academics/programs" },
        { name: "Courses", href: "/academics/courses" },
        { name: "Faculty", href: "/academics/faculty" },
        { name: "Research", href: "/academics/research" },
      ],
    },
    {
      name: "Admissions",
      href: "/admissions",
      // dropdown: [
      //   { name: "Apply Now", href: "/admissions/apply" },
      //   { name: "Requirements", href: "/admissions/requirements" },
      //   { name: "Tuition & Fees", href: "/admissions/tuition" },
      //   { name: "Scholarships", href: "/admissions/scholarships" },
      // ],
    },
    { name: "Campus Life", href: "/campus-life" },
    { name: "Contact Us", href: "/contact" },
  ];

  const topBarInfo = [
    { icon: Phone, text: "+91 89626 23662" },
    { icon: Mail, text: "aiinstitute@vithupro.in" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setMobileDropdown(null);
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

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (href: string) => pathname === href;

  const toggleMobileDropdown = (itemName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDropdown(mobileDropdown === itemName ? null : itemName);
  };

  const handleMobileLinkClick = (href: string, hasDropdown: boolean) => {
    if (!hasDropdown) {
      setIsOpen(false);
      setMobileDropdown(null);
    }
  };

  const handleDropdownLinkClick = () => {
    setIsOpen(false);
    setMobileDropdown(null);
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
            ? "bg-white/95 backdrop-blur-md shadow-xl py-0"
            : "bg-gradient-to-r from-white to-blue-50/30 shadow-lg py-0"
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
              <div className="ml-4 flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      item.dropdown && setActiveDropdown(item.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        isActive(item.href)
                          ? "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                          : isScrolled
                          ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                          : "text-gray-800 hover:text-blue-700 hover:bg-white/80"
                      }`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>

                    {/* Desktop Dropdown Menu */}
                    {item.dropdown && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 group"
                          >
                            <div className="w-1 h-6 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* CTA Button */}
                <button
                  className={`ml-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white`}
                >
                  Apply Now
                </button>
              </div>
            </div>

            {/* Tablet/Mobile CTA Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                className={`px-3 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                }`}
              >
                Apply
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-gray-800 hover:text-blue-700 hover:bg-white/80"
                }`}
                aria-label="Toggle menu"
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
          className={`lg:hidden fixed inset-0 top-[88px] sm:top-[104px] z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-50" : "opacity-0"
            }`}
            onClick={() => {
              setIsOpen(false);
              setMobileDropdown(null);
            }}
          />

          {/* Menu Content */}
          <div className="absolute right-0 top-0 w-80 sm:w-96 h-full bg-white/95 backdrop-blur-md shadow-2xl border-l border-gray-200 overflow-y-auto">
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        className={`flex-1 flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                          isActive(item.href)
                            ? "text-blue-600 bg-blue-50 border-r-4 border-blue-600"
                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                        }`}
                        onClick={() =>
                          handleMobileLinkClick(item.href, !!item.dropdown)
                        }
                      >
                        {item.name}
                      </a>
                      {item.dropdown && (
                        <button
                          onClick={(e) => toggleMobileDropdown(item.name, e)}
                          className="p-2 mr-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                          aria-label={`Toggle ${item.name} dropdown`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              mobileDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {item.dropdown && mobileDropdown === item.name && (
                      <div className="ml-6 mt-1 mb-2 space-y-1 bg-gray-50/50 rounded-lg p-2 animate-in fade-in-0 slide-in-from-top-1 duration-200">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors duration-300 transform hover:translate-x-1"
                            onClick={handleDropdownLinkClick}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
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
                      <span className="text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Additional Mobile CTA */}
              <button
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => {
                  setIsOpen(false);
                  setMobileDropdown(null);
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
