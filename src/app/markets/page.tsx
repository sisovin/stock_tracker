import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Globe,
  BarChart3,
  PieChart,
  Activity,
  Star,
  Plus,
  RefreshCw
} from "lucide-react";

export default function MarketsPage() {
  const majorIndices = [
    { name: "S&P 500", symbol: "SPX", price: 4567.89, change: 38.45, changePercent: 0.85, volume: "3.2B" },
    { name: "NASDAQ", symbol: "IXIC", price: 14234.56, change: 172.34, changePercent: 1.23, volume: "4.1B" },
    { name: "DOW", symbol: "DJI", price: 35678.90, change: -42.15, changePercent: -0.12, volume: "2.8B" },
    { name: "Russell 2000", symbol: "RUT", price: 2045.67, change: 15.23, changePercent: 0.75, volume: "1.5B" }
  ];

  const sectors = [
    { name: "Technology", change: 2.34, stocks: 156, topStock: "AAPL", color: "bg-blue-500" },
    { name: "Healthcare", change: 1.87, stocks: 89, topStock: "JNJ", color: "bg-green-500" },
    { name: "Financial", change: -0.45, stocks: 124, topStock: "JPM", color: "bg-red-500" },
    { name: "Energy", change: 3.21, stocks: 67, topStock: "XOM", color: "bg-orange-500" },
    { name: "Consumer", change: 1.12, stocks: 98, topStock: "AMZN", color: "bg-purple-500" },
    { name: "Industrial", change: 0.89, stocks: 76, topStock: "CAT", color: "bg-yellow-500" }
  ];

  const topGainers = [
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.28, change: 45.67, changePercent: 5.51, volume: "89.2M" },
    { symbol: "AMD", name: "Advanced Micro Devices", price: 142.85, change: 8.92, changePercent: 6.67, volume: "67.3M" },
    { symbol: "TSLA", name: "Tesla Inc.", price: 248.50, change: 12.34, changePercent: 5.23, volume: "125.4M" },
    { symbol: "AAPL", name: "Apple Inc.", price: 175.43, change: 7.89, changePercent: 4.71, volume: "78.9M" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 138.21, change: 5.67, changePercent: 4.28, volume: "45.6M" }
  ];

  const topLosers = [
    { symbol: "META", name: "Meta Platforms", price: 484.20, change: -15.67, changePercent: -3.14, volume: "34.5M" },
    { symbol: "NFLX", name: "Netflix Inc.", price: 445.03, change: -12.45, changePercent: -2.72, volume: "23.8M" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 145.86, change: -8.92, changePercent: -5.76, volume: "56.7M" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 378.85, change: -6.78, changePercent: -1.76, volume: "41.2M" },
    { symbol: "CRM", name: "Salesforce Inc.", price: 267.45, change: -5.23, changePercent: -1.92, volume: "28.9M" }
  ];

  const mostActive = [
    { symbol: "TSLA", name: "Tesla Inc.", price: 248.50, change: 12.34, changePercent: 5.23, volume: "125.4M" },
    { symbol: "AAPL", name: "Apple Inc.", price: 175.43, change: 7.89, changePercent: 4.71, volume: "89.2M" },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.28, change: 45.67, changePercent: 5.51, volume: "78.9M" },
    { symbol: "AMD", name: "Advanced Micro Devices", price: 142.85, change: 8.92, changePercent: 6.67, volume: "67.3M" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 145.86, change: -8.92, changePercent: -5.76, volume: "56.7M" }
  ];

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeBgColor = (change: number) => {
    return change >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} userName="John Doe" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">Markets</h1>
              <p className="text-gray-600 mt-1">
                Real-time market data, indices, and stock performance
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge className="bg-green-100 text-green-800">
                Market Open
              </Badge>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search stocks, ETFs, or indices..."
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Screener
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Major Indices */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Major Indices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {majorIndices.map((index) => (
              <Card key={index.symbol} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-blue-100 px-2 py-1 rounded text-sm font-bold text-blue-600">
                      {index.symbol}
                    </div>
                    <Globe className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium text-gray-900">{index.name}</h3>
                    <div className="text-2xl font-bold text-gray-900">
                      {index.price.toLocaleString()}
                    </div>
                    <div className={`flex items-center text-sm ${getChangeColor(index.change)}`}>
                      {index.change >= 0 ? (
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 mr-1" />
                      )}
                      {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)} 
                      ({index.change >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%)
                    </div>
                    <div className="text-xs text-gray-500">Vol: {index.volume}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sectors Performance */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Sector Performance</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sectors.map((sector) => (
                  <div key={sector.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${sector.color}`}></div>
                      <div>
                        <div className="font-medium text-gray-900">{sector.name}</div>
                        <div className="text-sm text-gray-600">{sector.stocks} stocks • Top: {sector.topStock}</div>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary"
                      className={getChangeBgColor(sector.change)}
                    >
                      {sector.change >= 0 ? '+' : ''}{sector.change.toFixed(2)}%
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Market Movers */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Movers</h2>
          <Tabs defaultValue="gainers" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="gainers">Top Gainers</TabsTrigger>
              <TabsTrigger value="losers">Top Losers</TabsTrigger>
              <TabsTrigger value="active">Most Active</TabsTrigger>
            </TabsList>
            
            <TabsContent value="gainers">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Top Gainers
                  </CardTitle>
                  <CardDescription>Stocks with the highest percentage gains today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topGainers.map((stock, index) => (
                      <div key={stock.symbol} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">
                            #{index + 1}
                          </div>
                          <div className="bg-gray-100 px-2 py-1 rounded font-bold text-sm text-gray-700">
                            {stock.symbol}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{stock.name}</div>
                            <div className="text-sm text-gray-500">Vol: {stock.volume}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">
                              ${stock.price.toFixed(2)}
                            </div>
                            <div className="flex items-center text-sm text-green-600">
                              <ArrowUpRight className="h-3 w-3 mr-1" />
                              +${stock.change.toFixed(2)} (+{stock.changePercent.toFixed(2)}%)
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Star className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="losers">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingDown className="h-5 w-5 mr-2 text-red-600" />
                    Top Losers
                  </CardTitle>
                  <CardDescription>Stocks with the highest percentage losses today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topLosers.map((stock, index) => (
                      <div key={stock.symbol} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-bold">
                            #{index + 1}
                          </div>
                          <div className="bg-gray-100 px-2 py-1 rounded font-bold text-sm text-gray-700">
                            {stock.symbol}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{stock.name}</div>
                            <div className="text-sm text-gray-500">Vol: {stock.volume}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <div className="font-semibold text-gray-900">
                              ${stock.price.toFixed(2)}
                            </div>
                            <div className="flex items-center text-sm text-red-600">
                              <ArrowDownRight className="h-3 w-3 mr-1" />
                              ${stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Star className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="active">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-blue-600" />
                    Most Active
                  </CardTitle>
                  <CardDescription>Stocks with the highest trading volume today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mostActive.map((stock, index) => (
                      <div key={stock.symbol} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-bold">
                            #{index + 1}
                          </div>
                          <div className="bg-gray-100 px-2 py-1 rounded font-bold text-sm text-gray-700">
                            {stock.symbol}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{stock.name}</div>
                            <div className="text-sm text-gray-500">Vol: {stock.volume}</div>
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
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Star className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
}