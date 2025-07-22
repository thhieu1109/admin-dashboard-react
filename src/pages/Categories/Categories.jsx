import React, { useState } from 'react';
import { Search, Edit, Trash2, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button
} from '@mui/material';

function Categories() {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Giải Cứu', description: 'help' },
        { id: 2, name: 'Hài', description: 'H' },
        { id: 3, name: 'Hoạt Hình', description: '4' },
        { id: 4, name: 'Lãng Mạn', description: '1' },
        { id: 5, name: 'Bi Ái', description: '5' }
    ]);

    // Modal: Add
    const [openAddModal, setOpenAddModal] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', description: '' });

    // Modal: Edit
    const [openEditModal, setOpenEditModal] = useState(false);
    const [editCategory, setEditCategory] = useState(null);

    // Modal: Delete
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteCategory, setDeleteCategory] = useState(null);

    const handleChange = (e, isEdit = false) => {
        const { name, value } = e.target;
        if (isEdit) {
            setEditCategory(prev => ({ ...prev, [name]: value }));
        } else {
            setNewCategory(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleAdd = () => {
        const newId = categories.length + 1;
        setCategories([...categories, { id: newId, ...newCategory }]);
        setNewCategory({ name: '', description: '' });
        setOpenAddModal(false);
    };

    const handleEdit = () => {
        const updated = categories.map(cat => cat.id === editCategory.id ? editCategory : cat);
        setCategories(updated);
        setEditCategory(null);
        setOpenEditModal(false);
    };

    const handleDelete = () => {
        setCategories(categories.filter(cat => cat.id !== deleteCategory.id));
        setDeleteCategory(null);
        setOpenDeleteModal(false);
    };

    return (
        <div className="bg-white rounded-lg shadow">
            {/* ADD MODAL */}
            <Modal open={openAddModal} onClose={() => setOpenAddModal(false)}>
                <Box sx={modalStyle}>
                    <Typography variant="h6">Add Category</Typography>
                    <TextField fullWidth label="Name" name="name" value={newCategory.name} onChange={handleChange} margin="normal" />
                    <TextField fullWidth label="Description" name="description" value={newCategory.description} onChange={handleChange} margin="normal" />
                    <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
                        <Button variant="outlined" onClick={() => setOpenAddModal(false)}>Cancel</Button>
                        <Button variant="contained" onClick={handleAdd}>Add</Button>
                    </Box>
                </Box>
            </Modal>

            {/* EDIT MODAL */}
            <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
                <Box sx={modalStyle}>
                    <Typography variant="h6">Edit Category</Typography>
                    <TextField fullWidth label="Name" name="name" value={editCategory?.name || ''} onChange={(e) => handleChange(e, true)} margin="normal" />
                    <TextField fullWidth label="Description" name="description" value={editCategory?.description || ''} onChange={(e) => handleChange(e, true)} margin="normal" />
                    <Box mt={2} display="flex" justifyContent="flex-end" gap={1}>
                        <Button variant="outlined" onClick={() => setOpenEditModal(false)}>Cancel</Button>
                        <Button variant="contained" onClick={handleEdit}>Save</Button>
                    </Box>
                </Box>
            </Modal>

            {/* DELETE MODAL */}
            <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
                <Box sx={modalStyle}>
                    <Typography variant="h6" mb={2}>Confirm Delete</Typography>
                    <Typography>Are you sure you want to delete <strong>{deleteCategory?.name}</strong>?</Typography>
                    <Box mt={3} display="flex" justifyContent="flex-end" gap={1}>
                        <Button variant="outlined" onClick={() => setOpenDeleteModal(false)}>Cancel</Button>
                        <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
                    </Box>
                </Box>
            </Modal>

            {/* HEADER */}
            <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-lg font-semibold">List Categories</h2>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input 
                            type="text" 
                            placeholder="Enter keywords..." 
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button onClick={() => setOpenAddModal(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center">
                        <Plus size={16} className="mr-2" />
                        ADD CATEGORY
                    </button>
                </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {categories.map((category) => (
                            <tr key={category.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{category.id}</td>
                                <td className="px-6 py-4">{category.name}</td>
                                <td className="px-6 py-4">{category.description}</td>
                                <td className="px-6 py-4 space-x-2 flex">
                                    <button
                                        onClick={() => {
                                            setEditCategory(category);
                                            setOpenEditModal(true);
                                        }}
                                        className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 flex items-center justify-center"
                                    >
                                        <Edit size={14} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            setDeleteCategory(category);
                                            setOpenDeleteModal(true);
                                        }}
                                        className="w-8 h-8 bg-red-100 text-red-600 rounded-full hover:bg-red-200 flex items-center justify-center"
                                    >
                                        <Trash2 size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* PAGINATION */}
            <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t">
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-700">Rows per page:</span>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                        <option>5</option>
                        <option>10</option>
                        <option>25</option>
                    </select>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-700">1-5 of {categories.length}</span>
                    <div className="flex space-x-1">
                        <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronLeft size={16} /></button>
                        <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronRight size={16} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Modal Style
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

export default Categories;
