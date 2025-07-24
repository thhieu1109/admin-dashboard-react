import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Stack } from '@mui/material';
import { DeleteIcon, EditIcon } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';




function TableCategory({ update, setIsEdit, setDeleteCategory, setOpenDeleteModal, setCategory, setOpenAddModal }) {

    const columns = [
        { field: 'id', headerName: '#', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 120,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <Stack direction="row" spacing={1}>
                    <IconButton
                        color="primary"
                        size="small"
                    >
                        <EditIcon fontSize="small" onClick={() => handleEdit(params.row)} />
                    </IconButton>
                    <IconButton
                        color="error"
                        size="small"
                    >
                        <DeleteIcon fontSize="small" onClick={() => handleDelete(params.row)} />
                    </IconButton>
                </Stack>
            ),
        },
    ];
    const paginationModel = { page: 0, pageSize: 5 };


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getAllCate();
    }, [update]);

    const getAllCate = async () => {
        const response = await axios.get("https://687f8f39efe65e52008a3579.mockapi.io/categories");
        setCategories(response.data);
    }

    const handleEdit = (row) => {
        setIsEdit(true);
        setCategory(row);
        setOpenAddModal(true);
        
    }

    const handleDelete = (row) => {
        setDeleteCategory(row);
        setOpenDeleteModal(true);
    };


    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={categories}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>

    );
}

export default TableCategory;