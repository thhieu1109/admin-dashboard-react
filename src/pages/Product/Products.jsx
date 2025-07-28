import React, { useState } from 'react';
import TableHeader from '../../components/TableHeader';
import ModalDeleted from '../../components/ModalDeleted';
import ProductModal from './ProductModal';
import TableProduct from './TableProduct';
import axios from 'axios';
import { useProducts } from '../../contexts/ProductProvider';

const inner = { name: "", description: "", price: "", categoryId: "" };

function Products() {
    const {handleUpdate,update} = useProducts()

    const [openAddModal, setOpenAddModal] = useState(false);
    const [product, setProduct] = useState(inner);
    
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [error, setError] = useState(inner);
    const [search, setSearch] = useState("");

    const handleOpenAdd = () => {
        setError(inner);
        setProduct(inner);
        setOpenAddModal(true);
    };

    const handleCloseAdd = () => {
        setError(inner);
        setOpenAddModal(false);
    };

    const handleChangeInput = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

   

    const handleDelete = async () => {
        await axios.delete(`https://687f8f39efe65e52008a3579.mockapi.io/product/${deleteProduct.id}`);
        setOpenDeleteModal(false);
        handleUpdate();
    };

    const validateInput = () => {
        const newError = {};
        newError.name = product.name ? "" : "Please enter name";
        newError.description = product.description ? "" : "Please enter description";
        newError.price = product.price ? "" : "Please enter price";
        newError.categoryId = product.categoryId ? "" : "Please enter category ID";
        setError(newError);
        return Object.values(newError).every((e) => e === "");
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="bg-white rounded-lg shadow">
            <ProductModal
                openAddModal={openAddModal}
                handleCloseAdd={handleCloseAdd}
                product={product}
                handleChangeInput={handleChangeInput}
                handleUpdate={handleUpdate}
                validateInput={validateInput}
                error={error}
            />
            <ModalDeleted
                openDeleteModal={openDeleteModal}
                setOpenDeleteModal={setOpenDeleteModal}
                deleteCategory={deleteProduct}
                handleDelete={handleDelete}
            />
            <TableHeader handleOpenAdd={handleOpenAdd} handleSearch={handleSearch} title="Products" />
            <TableProduct
                update={update}
                setProduct={setProduct}
                setOpenAddModal={setOpenAddModal}
                setDeleteProduct={setDeleteProduct}
                setOpenDeleteModal={setOpenDeleteModal}
                search={search}
            />
        </div>
    );
}

export default Products;
