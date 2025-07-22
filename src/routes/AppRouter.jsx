import React from 'react';
import Dashboard from '../pages/Dashboard/Dashboard';
import Categories from '../pages/Categories/Categories';
import Media from '../pages/Media/Media';

function AppRouter(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/admin-categories" element={<Categories />} />
                <Route path="/admin-media" element={<Media />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;