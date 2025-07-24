import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Categories from './pages/Categories/Categories';
import Dashboard from './pages/Dashboard/Dashboard';
import Media from './pages/Media/Media';
import AppRouter from './routes/AppRouter';


function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  
  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <div className="flex-1 flex flex-col">
          <Header userName="John Doe" />
          <div className="flex-1 p-6 overflow-y-auto">
           <AppRouter />
          </div>
        </div>
      </div>
    </>
  )
}

export default App