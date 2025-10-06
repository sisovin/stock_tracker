"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Pause,
  Play
} from "lucide-react";
import { useState, useEffect } from "react";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
}

interface StockTickerProps {
  autoScroll?: boolean;
}

export default function StockTicker({ autoScroll = true }: StockTickerProps) {
  const [isPlaying, setIsPlaying] = useState(autoScroll);
  const [currentIndex, setCurrentIndex] = useState(0);

  const stocks: Stock[] = [
    { symbol: "AAPL", name: "Apple Inc.", price: 175.43, change: 2.15, changePercent: 1.24, volume: "45.2M" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 378.85, change: -1.23, changePercent: -0.32, volume: "28.7M" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 138.21, change: 4.32, changePercent: 3.23, volume: "31.5M" },
    { symbol: "TSLA", name: "Tesla Inc.", price: 248.50, change: -5.67, changePercent: -2.23, volume: "89.3M" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 145.86, change: 1.89, changePercent: 1.31, volume: "42.1M" },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.28, change: 12.45, changePercent: 1.44, volume: "52.8M" },
    { symbol: "META", name: "Meta Platforms", price: 484.20, change: -3.21, changePercent: -0.66, volume: "18.9M" },
    { symbol: "NFLX", name: "Netflix Inc.", price: 445.03, change: 8.92, changePercent: 2.05, volume: "15.6M" }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stocks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, stocks.length]);

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeBgColor = (change: number) => {
    return change >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  return (
    <div className="bg-white space-y-4">
      {/* Header */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Live Market Ticker
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Badge className="bg-green-100 text-green-800">
                Market Open
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Featured Stock */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-lg">
                  {stocks[currentIndex].symbol}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{stocks[currentIndex].name}</div>
                  <div className="text-sm text-gray-600">Volume: {stocks[currentIndex].volume}</div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">
                ${stocks[currentIndex].price.toFixed(2)}
              </div>
              <div className={`flex items-center justify-end mt-1 ${getChangeColor(stocks[currentIndex].change)}`}>
                {stocks[currentIndex].change >= 0 ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                <span className="font-semibold">
                  {stocks[currentIndex].change >= 0 ? '+' : ''}${Math.abs(stocks[currentIndex].change).toFixed(2)}
                </span>
                <span className="ml-1">
                  ({stocks[currentIndex].change >= 0 ? '+' : ''}{stocks[currentIndex].changePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stock List */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Market Movers</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-80">
            <div className="space-y-3">
              {stocks.map((stock, index) => (
                <div 
                  key={stock.symbol}
                  className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                    index === currentIndex ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 px-2 py-1 rounded font-bold text-sm text-gray-700">
                      {stock.symbol}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{stock.name}</div>
                      <div className="text-sm text-gray-500">Vol: {stock.volume}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">
                      ${stock.price.toFixed(2)}
                    </div>
                    <Badge 
                      variant="secondary"
                      className={getChangeBgColor(stock.change)}
                    >
                      {stock.change >= 0 ? '+' : ''}${Math.abs(stock.change).toFixed(2)} 
                      ({stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Market Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">S&P 500</div>
                <div className="text-xl font-bold">4,567.89</div>
              </div>
              <Badge className="bg-green-100 text-green-800">+0.85%</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">NASDAQ</div>
                <div className="text-xl font-bold">14,234.56</div>
              </div>
              <Badge className="bg-green-100 text-green-800">+1.23%</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">DOW</div>
                <div className="text-xl font-bold">35,678.90</div>
              </div>
              <Badge className="bg-red-100 text-red-800">-0.12%</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}