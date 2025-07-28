import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Stack } from '@mui/material';
import { DeleteIcon, EditIcon } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useCategories } from '../../contexts/CategoryProvider';




function TableCategory({ setDeleteCategory, setOpenDeleteModal, setCategory, setOpenAddModal,search }) {

   const { categories }  =  useCategories();
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
    const handleEdit = (row) => {
        setCategory(row);
        setOpenAddModal(true);
        
    }

    const handleDelete = (row) => {
        setDeleteCategory(row);
        setOpenDeleteModal(true);
    };


    return (
        <Paper sx={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={categories.filter(element => element.name.toLowerCase().includes(search.toLowerCase()))}
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