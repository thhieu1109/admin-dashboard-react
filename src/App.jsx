import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Categories from './pages/Categories/Categories';
import Dashboard from './pages/Dashboard/Dashboard';
import Media from './pages/Media/Media';


function App() {
  const [activeMenu, setActiveMenu] = useState('categories');

  // Function to render content based on active menu
  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <Dashboard />;
      case 'categories':
        return <Categories />;
      case 'media-management':
      case 'media-management-movies':
      case 'media-management-tv-shows':
      case 'media-management-live-tv':
        return <Media />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div className="flex-1 flex flex-col">
          <Header userName="John Doe" />
          <div className="flex-1 p-6 overflow-y-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  )
}

export default App