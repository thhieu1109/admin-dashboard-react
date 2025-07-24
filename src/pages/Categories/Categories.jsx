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

const inner = { name: "", description: "" }
function Categories() {

    const [openAddModal, setOpenAddModal] = useState(false);
    const [category, setCategory] = useState(inner);
    const [update, setUpdate] = useState(false);

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteCategory, setDeleteCategory] = useState(null);


    const [isEdit, setIsEdit] = useState(false);

    const handleOpenAdd = () => {
        setCategory(inner)
        setOpenAddModal(true);
    }

    const handleCloseAdd = () => {
        setOpenAddModal(false);
    }

    const handleChangInput = (e) => {
        
        setCategory({ ...category, [e.target.name]: e.target.value });
    }

    const handleUpdate = () => {
        setUpdate(!update);
    }

    const handleDelete = async () => {
        await axios.delete(`https://687f8f39efe65e52008a3579.mockapi.io/categories/${deleteCategory.id}`);
        setOpenDeleteModal(false);
        handleUpdate();
    }



    return (
        <div className="bg-white rounded-lg shadow">
            <CategoryModal
                openAddModal={openAddModal}
                handleCloseAdd={handleCloseAdd}
                category={category}
                handleChangInput={handleChangInput}
                handleUpdate={handleUpdate}
                isEdit={isEdit}
            />
            <ModalDeleted
                openDeleteModal={openDeleteModal}
                setOpenDeleteModal={setOpenDeleteModal}
                deleteCategory={deleteCategory}
                handleDelete={handleDelete} />
            <TableHeader handleOpenAdd={handleOpenAdd} />
            <TableCategory
                update={update}
                handleOpenModal={setOpenAddModal}
                openDeleteModal={openDeleteModal}
                setOpenDeleteModal={setOpenDeleteModal} 
                setCategory={setCategory}          
                setOpenAddModal={setOpenAddModal} 
                setDeleteCategory={setDeleteCategory}
                setIsEdit={setIsEdit}

            />
        </div>
    );
}



export default Categories;
