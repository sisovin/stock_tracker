"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  Plus, 
  Search, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  X,
  Star,
  MoreHorizontal
} from "lucide-react";
import { useState } from "react";

interface WatchlistStock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  high52Week: number;
  low52Week: number;
  marketCap: string;
  isFavorite: boolean;
}

interface WatchlistPanelProps {
  title?: string;
}

export default function WatchlistPanel({ title = "My Watchlist" }: WatchlistPanelProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [watchlistStocks, setWatchlistStocks] = useState<WatchlistStock[]>([
    {
      id: "1",
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 175.43,
      change: 2.15,
      changePercent: 1.24,
      high52Week: 198.23,
      low52Week: 124.17,
      marketCap: "2.8T",
      isFavorite: true
    },
    {
      id: "2",
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 248.50,
      change: -5.67,
      changePercent: -2.23,
      high52Week: 299.29,
      low52Week: 138.80,
      marketCap: "789B",
      isFavorite: false
    },
    {
      id: "3",
      symbol: "NVDA",
      name: "NVIDIA Corp.",
      price: 875.28,
      change: 12.45,
      changePercent: 1.44,
      high52Week: 974.00,
      low52Week: 180.96,
      marketCap: "2.1T",
      isFavorite: true
    },
    {
      id: "4",
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 145.86,
      change: 1.89,
      changePercent: 1.31,
      high52Week: 170.00,
      low52Week: 88.12,
      marketCap: "1.5T",
      isFavorite: false
    },
    {
      id: "5",
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 138.21,
      change: 4.32,
      changePercent: 3.23,
      high52Week: 153.78,
      low52Week: 83.34,
      marketCap: "1.7T",
      isFavorite: true
    }
  ]);

  const toggleFavorite = (id: string) => {
    setWatchlistStocks(stocks =>
      stocks.map(stock =>
        stock.id === id ? { ...stock, isFavorite: !stock.isFavorite } : stock
      )
    );
  };

  const removeFromWatchlist = (id: string) => {
    setWatchlistStocks(stocks => stocks.filter(stock => stock.id !== id));
  };

  const filteredStocks = watchlistStocks.filter(stock =>
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeBgColor = (change: number) => {
    return change >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const favoriteStocks = filteredStocks.filter(stock => stock.isFavorite);
  const regularStocks = filteredStocks.filter(stock => !stock.isFavorite);

  return (
    <div className="bg-white space-y-4">
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                {title}
              </CardTitle>
              <CardDescription>
                {watchlistStocks.length} stocks • {favoriteStocks.length} favorites
              </CardDescription>
            </div>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Stock
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search watchlist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Favorites Section */}
      {favoriteStocks.length > 0 && (
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Star className="h-4 w-4 mr-2 text-yellow-500" />
              Favorites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {favoriteStocks.map((stock) => (
                <div key={stock.id} className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 px-2 py-1 rounded font-bold text-sm text-yellow-800">
                      {stock.symbol}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{stock.name}</div>
                      <div className="text-xs text-gray-500">
                        52W: ${stock.low52Week} - ${stock.high52Week} • Cap: {stock.marketCap}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">
                        ${stock.price.toFixed(2)}
                      </div>
                      <div className={`flex items-center text-sm ${getChangeColor(stock.change)}`}>
                        {stock.change >= 0 ? (
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 mr-1" />
                        )}
                        {stock.change >= 0 ? '+' : ''}${Math.abs(stock.change).toFixed(2)}
                        ({stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(stock.id)}
                        className="h-6 w-6 p-0"
                      >
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromWatchlist(stock.id)}
                        className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Regular Watchlist */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">All Stocks</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-3">
              {regularStocks.map((stock) => (
                <div key={stock.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 px-2 py-1 rounded font-bold text-sm text-gray-700">
                      {stock.symbol}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{stock.name}</div>
                      <div className="text-xs text-gray-500">
                        52W: ${stock.low52Week} - ${stock.high52Week} • Cap: {stock.marketCap}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
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
                    <div className="flex flex-col space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(stock.id)}
                        className="h-6 w-6 p-0"
                      >
                        <Star className="h-3 w-3 text-gray-400 hover:text-yellow-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromWatchlist(stock.id)}
                        className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              <TrendingUp className="h-4 w-4 mr-2" />
              Top Gainers
            </Button>
            <Button variant="outline" className="w-full">
              <TrendingDown className="h-4 w-4 mr-2" />
              Top Losers
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}