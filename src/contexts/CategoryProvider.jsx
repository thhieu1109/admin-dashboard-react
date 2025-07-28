import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
// Tạo Context
const CategoriesContext = createContext();

// Custom hook để dễ sử dụng
export const useCategories = () => useContext(CategoriesContext);

function CategoryProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        getAllCate();
    }, [update]);

    const getAllCate = async () => {
        const response = await axios.get("https://687f8f39efe65e52008a3579.mockapi.io/categories");
        setCategories(response.data);
    }

    const handleUpdate = () => {
        setUpdate(!update);
    }

    return (
        <CategoriesContext.Provider value={{ categories, handleUpdate }}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoryProvider;