import React from 'react';
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
// Tạo Context
const ProductsContext = createContext();

// Custom hook để dễ sử dụng
export const useProducts = () => useContext(ProductsContext);
function ProductProvider({children}) {

     const [products, setProducts] = useState([]);
     const [update, setUpdate] = useState(false);

     const getProducts = async () => {
        const res = await axios.get(`https://687f8f39efe65e52008a3579.mockapi.io/product`);
        setProducts(res.data);
    };

    useEffect(() => {
        getProducts();
    }, [update]);

     const handleUpdate = () => {
        setUpdate(!update);
    };
    return (
       <ProductsContext.Provider value={{ products, handleUpdate }}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductProvider;