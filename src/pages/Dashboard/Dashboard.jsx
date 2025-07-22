import React from 'react';
import { Users, Play, Star, TrendingUp, BarChart3, Activity } from 'lucide-react';

function Dashboard(props) {
    const stats = [
        {
            title: "Total Users",
            value: "10,245",
            change: "+12%",
            changeType: "increase",
            icon: Users,
            color: "blue"
        },
        {
            title: "Active Movies",
            value: "1,847",
            change: "+8%",
            changeType: "increase",
            icon: Play,
            color: "green"
        },
        {
            title: "Premium Users",
            value: "2,156",
            change: "+23%",
            changeType: "increase",
            icon: Star,
            color: "yellow"
        },
        {
            title: "Revenue",
            value: "$45,320",
            change: "-2%",
            changeType: "decrease",
            icon: TrendingUp,
            color: "red"
        }
    ];

    const recentActivities = [
        { action: "New user registered", user: "John Smith", time: "2 minutes ago" },
        { action: "Movie uploaded", user: "Admin", time: "15 minutes ago" },
        { action: "Premium subscription", user: "Jane Doe", time: "1 hour ago" },
        { action: "Review posted", user: "Mike Johnson", time: "2 hours ago" },
        { action: "Category created", user: "Admin", time: "3 hours ago" }
    ];

    const StatCard = ({ stat }) => {
        const Icon = stat.icon;
        return (
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-sm ${
                            stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                        }`}>
                            {stat.change} from last month
                        </p>
                    </div>
                    <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                        <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </div>

            {/* Charts and Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart Placeholder */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Monthly Revenue</h3>
                        <BarChart3 className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                            <p>Chart will be rendered here</p>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Recent Activity</h3>
                        <Activity className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-900">{activity.action}</p>
                                    <p className="text-xs text-gray-500">by {activity.user} • {activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                        <Play className="w-6 h-6 text-blue-600 mb-2" />
                        <p className="font-medium">Add New Movie</p>
                        <p className="text-sm text-gray-500">Upload and configure a new movie</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                        <Users className="w-6 h-6 text-green-600 mb-2" />
                        <p className="font-medium">Manage Users</p>
                        <p className="text-sm text-gray-500">View and manage user accounts</p>
                    </button>
                    <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                        <Star className="w-6 h-6 text-yellow-600 mb-2" />
                        <p className="font-medium">Premium Settings</p>
                        <p className="text-sm text-gray-500">Configure subscription plans</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;