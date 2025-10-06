"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Menu, X, User, Bell, Search } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  isAuthenticated?: boolean;
  userName?: string;
}

export default function Header({ isAuthenticated = false, userName = "John Doe" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">StockTrader</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/markets" className="text-gray-700 hover:text-blue-600 font-medium">
              Markets
            </Link>
            <Link href="/watchlist" className="text-gray-700 hover:text-blue-600 font-medium">
              Watchlist
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium">
              Portfolio
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-blue-600 font-medium">
              News
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stocks..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Market Status */}
            <Badge variant="secondary" className="hidden sm:flex bg-green-100 text-green-800">
              Market Open
            </Badge>

            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </Button>

                {/* User Menu */}
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-700">
                    {userName}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="ghost" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search stocks..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/markets"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Markets
                </Link>
                <Link
                  href="/watchlist"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Watchlist
                </Link>
                <Link
                  href="/portfolio"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="/news"
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  News
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}