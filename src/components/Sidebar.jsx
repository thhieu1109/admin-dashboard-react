import React, { useState } from 'react';
import { Menu, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [expandedMenus, setExpandedMenus] = useState({
    products: false,
  });

  const toggleMenu = (menuId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  //Muốn thêm children(submenu) thì thêm children
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'categories', label: 'Categories', icon: '📂' },
    {
      id: 'products',
      label: 'Products',
      icon: '🛒',
      expandable: true,
      children: ['All Products'],
    },
  ];

  const MenuItem = ({ item, level = 0 }) => {
    const isExpanded = expandedMenus[item.id];
    const isActive = currentPath === `/${item.id}`;

    return (
      <div>
        {item.expandable ? (
          <div
            className={`flex items-center justify-between px-4 py-2 cursor-pointer transition-colors ${isActive ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            onClick={() => toggleMenu(item.id)}
            style={{ paddingLeft: `${16 + level * 16}px` }}
          >
            <div className="flex items-center">
              <span className="mr-2 text-sm">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
        ) : (
          <Link
            to={`/${item.id}`}
            className={`flex items-center justify-between px-4 py-2 transition-colors ${isActive ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            style={{ paddingLeft: `${16 + level * 16}px` }}
          >
            <div className="flex items-center">
              <span className="mr-2 text-sm">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          </Link>
        )}

        {item.expandable && isExpanded && item.children && (
          <div className="bg-gray-50">
            {item.children.map((child, index) => {
              const childPath = `/${item.id}-${child.toLowerCase().replace(/ /g, '-')}`;
              const isChildActive = currentPath === childPath;
              return (
                <Link
                  key={index}
                  to={childPath}
                  className={`block px-8 py-2 text-sm transition-colors ${isChildActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {child}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center px-4 py-7 border-b">
        <Menu size={20} className="mr-2" />
        <span className="font-bold text-xl">
          WatchTV<span className="text-green-500">Admin</span>
        </span>
      </div>

      {/* Menu Items */}
      <div className="py-4">
        <div className="px-4 py-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">MAIN MENU</h3>
        </div>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
