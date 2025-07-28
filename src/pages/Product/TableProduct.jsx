import { DataGrid } from '@mui/x-data-grid';
import { Paper, Stack, IconButton } from '@mui/material';
import { DeleteIcon, EditIcon } from 'lucide-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductProvider';
import { getOjectById } from '../../reponsitory';
import { useCategories } from '../../contexts/CategoryProvider';

function TableProduct({  setProduct, setOpenAddModal, setDeleteProduct, setOpenDeleteModal, search }) {
    const {products} = useProducts();
    const {categories} = useCategories()
     
    const columns = [
        { field: 'id', headerName: '#', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'categoryId', headerName: 'Category ID', width: 130,  renderCell: (params) => (
                  getOjectById(categories, params.row.categoryId)?.name
            ), },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Stack direction="row" spacing={1}>
                    <IconButton color="primary" size="small" onClick={() => handleEdit(params.row)}>
                        <EditIcon size={16} />
                    </IconButton>
                    <IconButton color="error" size="small" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon size={16} />
                    </IconButton>
                </Stack>
            ),
        },
    ];
   

    const handleEdit = (row) => {
        setProduct(row);
        setOpenAddModal(true);
    };

    const handleDelete = (row) => {
        setDeleteProduct(row);
        setOpenDeleteModal(true);
    };

    return (
        <Paper sx={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))}
                columns={columns}
                pageSizeOptions={[5, 10]}
                initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}

export default TableProduct;
