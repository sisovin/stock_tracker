"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

interface PortfolioSummaryProps {
  totalValue?: number;
  dayChange?: number;
  dayChangePercent?: number;
  totalReturn?: number;
  totalReturnPercent?: number;
  cashBalance?: number;
}

export default function PortfolioSummary({
  totalValue = 127450.32,
  dayChange = 2340.50,
  dayChangePercent = 1.87,
  totalReturn = 18750.32,
  totalReturnPercent = 15.8,
  cashBalance = 12500.00
}: PortfolioSummaryProps) {
  const isPositiveDay = dayChange >= 0;
  const isPositiveTotal = totalReturn >= 0;

  const holdings = [
    { symbol: "AAPL", name: "Apple Inc.", value: 45200, percentage: 35.5, change: 2.3 },
    { symbol: "MSFT", name: "Microsoft Corp.", value: 32100, percentage: 25.2, change: -1.1 },
    { symbol: "GOOGL", name: "Alphabet Inc.", value: 28900, percentage: 22.7, change: 3.2 },
    { symbol: "TSLA", name: "Tesla Inc.", value: 21250, percentage: 16.6, change: -0.8 }
  ];

  return (
    <div className="bg-white space-y-6">
      {/* Main Portfolio Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className={`flex items-center mt-2 ${isPositiveDay ? 'text-green-600' : 'text-red-600'}`}>
              {isPositiveDay ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              <span className="font-semibold">
                ${Math.abs(dayChange).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
              <span className="ml-1">
                ({isPositiveDay ? '+' : ''}{dayChangePercent}%) today
              </span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Return</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${isPositiveTotal ? 'text-green-600' : 'text-red-600'}`}>
              {isPositiveTotal ? '+' : ''}${Math.abs(totalReturn).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className={`flex items-center mt-2 ${isPositiveTotal ? 'text-green-600' : 'text-red-600'}`}>
              {isPositiveTotal ? (
                <TrendingUp className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDown className="h-4 w-4 mr-1" />
              )}
              <span className="font-semibold">
                {isPositiveTotal ? '+' : ''}{totalReturnPercent}%
              </span>
              <span className="ml-1 text-gray-600">all time</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Cash Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">
              ${cashBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className="flex items-center mt-2 text-gray-600">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>Available for trading</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Portfolio Allocation */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2" />
                Portfolio Allocation
              </CardTitle>
              <CardDescription>Your current holdings breakdown</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {holdings.map((holding) => (
              <div key={holding.symbol} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-xs font-bold text-blue-600">{holding.symbol}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{holding.name}</div>
                    <div className="text-sm text-gray-600">
                      ${holding.value.toLocaleString()} • {holding.percentage}%
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={holding.change >= 0 ? "secondary" : "destructive"}
                    className={holding.change >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                  >
                    {holding.change >= 0 ? '+' : ''}{holding.change}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Portfolio Diversity</span>
              <span className="font-medium">Good</span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-gray-500">
              Consider diversifying into more sectors for better risk management
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}