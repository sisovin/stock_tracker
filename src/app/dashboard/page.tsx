import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import StockTicker from "@/components/dashboard/StockTicker";
import WatchlistPanel from "@/components/dashboard/WatchlistPanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Bell, 
  Settings, 
  Download,
  RefreshCw,
  Calendar,
  Filter
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} userName="John Doe" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">Trading Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Welcome back, John! Here's your portfolio overview for today.
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
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Positions</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Watchlist Items</p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Alerts</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <Bell className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Trades</p>
                  <p className="text-2xl font-bold text-gray-900">7</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Portfolio & Market Data */}
          <div className="lg:col-span-2 space-y-8">
            {/* Portfolio Summary */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Portfolio Overview</h2>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              <PortfolioSummary />
            </section>

            {/* Stock Ticker */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Market Data</h2>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Live Updates
                </Badge>
              </div>
              <StockTicker />
            </section>
          </div>

          {/* Right Column - Watchlist */}
          <div className="space-y-8">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Watchlist</h2>
                <Button variant="outline" size="sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Manage
                </Button>
              </div>
              <WatchlistPanel />
            </section>

            {/* Recent Activity */}
            <section>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest trading activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Bought AAPL</div>
                        <div className="text-sm text-gray-600">10 shares at $175.43</div>
                      </div>
                      <div className="text-sm text-gray-500">2h ago</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Sold TSLA</div>
                        <div className="text-sm text-gray-600">5 shares at $248.50</div>
                      </div>
                      <div className="text-sm text-gray-500">4h ago</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Added to Watchlist</div>
                        <div className="text-sm text-gray-600">NVDA - NVIDIA Corp.</div>
                      </div>
                      <div className="text-sm text-gray-500">1d ago</div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Market News */}
            <section>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Market News</CardTitle>
                  <CardDescription>Latest market updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-gray-900">Fed Announces Rate Decision</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Federal Reserve maintains current interest rates...
                      </p>
                      <div className="text-xs text-gray-500 mt-2">30 min ago</div>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-gray-900">Tech Stocks Rally</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Major technology companies see significant gains...
                      </p>
                      <div className="text-xs text-gray-500 mt-2">1h ago</div>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-medium text-gray-900">Earnings Season Update</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Q4 earnings reports exceed expectations...
                      </p>
                      <div className="text-xs text-gray-500 mt-2">2h ago</div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Read More News
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}