import React, { useEffect, useState } from 'react';
import { Search, Edit, Trash2, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button
} from '@mui/material';
import TableCategory from './TableCategory';
import CategoryModal from './CategoryModal';
import TableHeader from '../../components/TableHeader';
import ModalDeleted from '../../components/ModalDeleted';
import axios from 'axios';
import { useCategories } from '../../contexts/CategoryProvider';

const inner = { name: "", description: "" }
function Categories() {
    const { handleUpdate }  =  useCategories();
    const [openAddModal, setOpenAddModal] = useState(false);
    const [category, setCategory] = useState(inner);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteCategory, setDeleteCategory] = useState(null);

    const [error, setError]= useState(inner)

    const [search, setSearch] = useState("")

    const handleOpenAdd = () => {
        setError(inner)
        setCategory(inner)
        setOpenAddModal(true);
    }

    const handleCloseAdd = () => {
        setError(inner)
        setOpenAddModal(false);
    }

    const handleChangInput = (e) => {
        
        setCategory({ ...category, [e.target.name]: e.target.value });
    }
    const handleDelete = async () => {
        await axios.delete(`https://687f8f39efe65e52008a3579.mockapi.io/categories/${deleteCategory.id}`);
        setOpenDeleteModal(false);
        handleUpdate();
    }

    const validateInput = ()=>{
        
        const newError = {}

        newError.name = category.name ? "" : "Please enter your name"
        newError.description = category.description ? "" : "Please enter your description"

        setError(newError)

        return Object.values(newError).every(element => element == "")
    }

    const handleSearch =(event)=>{
        setSearch(event.target.value)
    }

    return (
        <div className="bg-white rounded-lg shadow">
            <CategoryModal
                openAddModal={openAddModal}
                handleCloseAdd={handleCloseAdd}
                category={category}
                handleChangInput={handleChangInput}
                validateInput={validateInput}
                setError={setError}
                error={error}     
            />
            <ModalDeleted
                openDeleteModal={openDeleteModal}
                setOpenDeleteModal={setOpenDeleteModal}
                deleteCategory={deleteCategory}
                handleDelete={handleDelete} />
            <TableHeader handleOpenAdd={handleOpenAdd} handleSearch={handleSearch} title={"Categories"}/>
            <TableCategory
                handleOpenModal={setOpenAddModal}
                openDeleteModal={openDeleteModal}
                setOpenDeleteModal={setOpenDeleteModal} 
                setCategory={setCategory}          
                setOpenAddModal={setOpenAddModal} 
                setDeleteCategory={setDeleteCategory}
                search={search}
            />
        </div>
    );
}



export default Categories;
