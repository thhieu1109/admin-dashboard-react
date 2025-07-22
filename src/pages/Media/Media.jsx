import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Eye, Filter, Upload, Play } from 'lucide-react';

function Media(props) {
    const [activeTab, setActiveTab] = useState('movies');
    
    const movies = [
        {
            id: 1,
            title: "The Avengers",
            category: "Action",
            duration: "143 min",
            quality: "4K",
            status: "Published",
            views: "1.2M",
            thumbnail: "https://via.placeholder.com/100x150/4299e1/ffffff?text=Movie"
        },
        {
            id: 2,
            title: "Inception",
            category: "Sci-Fi",
            duration: "148 min",
            quality: "HD",
            status: "Published",
            views: "850K",
            thumbnail: "https://via.placeholder.com/100x150/10b981/ffffff?text=Movie"
        },
        {
            id: 3,
            title: "The Dark Knight",
            category: "Action",
            duration: "152 min",
            quality: "4K",
            status: "Draft",
            views: "2.1M",
            thumbnail: "https://via.placeholder.com/100x150/f59e0b/ffffff?text=Movie"
        },
        {
            id: 4,
            title: "Interstellar",
            category: "Sci-Fi",
            duration: "169 min",
            quality: "4K",
            status: "Published",
            views: "1.8M",
            thumbnail: "https://via.placeholder.com/100x150/ef4444/ffffff?text=Movie"
        },
        {
            id: 5,
            title: "Parasite",
            category: "Thriller",
            duration: "132 min",
            quality: "HD",
            status: "Published",
            views: "950K",
            thumbnail: "https://via.placeholder.com/100x150/8b5cf6/ffffff?text=Movie"
        }
    ];

    const tvShows = [
        {
            id: 1,
            title: "Breaking Bad",
            category: "Drama",
            seasons: "5 Seasons",
            episodes: "62 Episodes",
            status: "Completed",
            views: "3.2M",
            thumbnail: "https://via.placeholder.com/100x150/4299e1/ffffff?text=TV"
        },
        {
            id: 2,
            title: "Game of Thrones",
            category: "Fantasy",
            seasons: "8 Seasons",
            episodes: "73 Episodes",
            status: "Completed",
            views: "5.1M",
            thumbnail: "https://via.placeholder.com/100x150/10b981/ffffff?text=TV"
        },
        {
            id: 3,
            title: "The Office",
            category: "Comedy",
            seasons: "9 Seasons",
            episodes: "201 Episodes",
            status: "Ongoing",
            views: "2.8M",
            thumbnail: "https://via.placeholder.com/100x150/f59e0b/ffffff?text=TV"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Published':
                return 'bg-green-100 text-green-800';
            case 'Draft':
                return 'bg-yellow-100 text-yellow-800';
            case 'Completed':
                return 'bg-blue-100 text-blue-800';
            case 'Ongoing':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const MediaCard = ({ item, type }) => (
        <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="p-4">
                <div className="flex space-x-4">
                    <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-16 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span>{type === 'movies' ? item.duration : `${item.seasons} • ${item.episodes}`}</span>
                            {type === 'movies' && <span>{item.quality}</span>}
                            <span>{item.views} views</span>
                        </div>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                            {item.status}
                        </span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                            <Eye size={16} />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-full">
                            <Edit size={16} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                            <Trash2 size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const currentData = activeTab === 'movies' ? movies : tvShows;

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Media Management</h1>
                    <p className="text-gray-600">Manage your movies and TV shows content</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                    <Upload size={16} className="mr-2" />
                    Upload Media
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Play className="w-8 h-8 text-blue-500 mr-3" />
                        <div>
                            <p className="text-sm text-gray-600">Total Movies</p>
                            <p className="text-2xl font-bold">1,847</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Play className="w-8 h-8 text-green-500 mr-3" />
                        <div>
                            <p className="text-sm text-gray-600">TV Shows</p>
                            <p className="text-2xl font-bold">426</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Eye className="w-8 h-8 text-purple-500 mr-3" />
                        <div>
                            <p className="text-sm text-gray-600">Total Views</p>
                            <p className="text-2xl font-bold">12.5M</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center">
                        <Upload className="w-8 h-8 text-orange-500 mr-3" />
                        <div>
                            <p className="text-sm text-gray-600">This Month</p>
                            <p className="text-2xl font-bold">89</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filters and Tabs */}
            <div className="bg-white rounded-lg shadow">
                <div className="border-b border-gray-200">
                    <div className="flex items-center justify-between p-6 pb-0">
                        {/* Tabs */}
                        <div className="flex space-x-8">
                            <button
                                onClick={() => setActiveTab('movies')}
                                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'movies'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Movies ({movies.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('tvshows')}
                                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                    activeTab === 'tvshows'
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                TV Shows ({tvShows.length})
                            </button>
                        </div>

                        {/* Search and Filter */}
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search media..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                                <Filter size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Media Grid */}
                <div className="p-6">
                    <div className="grid grid-cols-1 gap-4">
                        {currentData.map((item) => (
                            <MediaCard key={item.id} item={item} type={activeTab} />
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-700">Showing:</span>
                        <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <span className="text-sm text-gray-700">per page</span>
                    </div>
                    <div className="text-sm text-gray-700">
                        Showing 1-{currentData.length} of {currentData.length} results
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Media;