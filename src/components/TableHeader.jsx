import { Plus, Search } from 'lucide-react';
import React from 'react';

function TableHeader({handleOpenAdd}) {

    
    return (
        <div>
             {/* HEADER */}
            <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-lg font-semibold">List </h2>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input 
                            type="text" 
                            placeholder="Enter keywords..." 
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button onClick={handleOpenAdd} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center">
                        <Plus size={16} className="mr-2" />
                        ADD 
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TableHeader;