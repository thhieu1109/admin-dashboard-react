import React from 'react';
import { Search, Bell, Mail } from 'lucide-react';

function Header(props) {
    const { userName = "John Doe" } = props;

    return (
        <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-light text-gray-400">
                    Good Morning, <span className="text-black font-normal">{userName}</span>
                </h1>
                <p className="text-sm text-gray-400">Your performance summary this week</p>
            </div>
            <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Search size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Mail size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <Bell size={20} />
                </button>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                        {userName.split(' ').map(n => n[0]).join('')}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;