import React from 'react';
import Dashboard from '../pages/Dashboard/Dashboard';
import Categories from '../pages/Categories/Categories';
import Media from '../pages/Media/Media';
import { Routes, Route } from 'react-router-dom';

function AppRouter(props) {
    return (

        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/media-management-movies" element={<Media />} />
            <Route path="/media-management-tv-shows" element={<Media />} />
            <Route path="/media-management-live-tv" element={<Media />} />

        </Routes>

    );
}

export default AppRouter;