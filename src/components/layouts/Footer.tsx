import Link from "next/link";
import { TrendingUp, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">StockTrader</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for real-time stock market data, portfolio tracking, and investment insights. 
              Make informed decisions with our comprehensive trading platform.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/markets" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Live Markets
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Watchlist
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Portfolio Tracker
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Market News
                </Link>
              </li>
              <li>
                <Link href="/analysis" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Technical Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/api-docs" className="text-gray-400 hover:text-white text-sm transition-colors">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Trading Tutorials
                </Link>
              </li>
              <li>
                <Link href="/market-guides" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Market Guides
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Investment Blog
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Live Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Get market insights and platform updates delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-2 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@stocktrader.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>1-800-STOCKS</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 StockTrader. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Market data provided by Yahoo Finance</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}