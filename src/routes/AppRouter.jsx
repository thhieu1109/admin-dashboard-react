import React from 'react';
import Dashboard from '../pages/Dashboard/Dashboard';
import Categories from '../pages/Categories/Categories';

import { Routes, Route } from 'react-router-dom';
import Products from '../pages/Product/Products';

function AppRouter(props) {
    return (

        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products-all-products" element={<Products />} />
        </Routes>

    );
}

export default AppRouter;