import { Autocomplete, Box, Button, Modal, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { modalStyle } from '../../contants';
import { useProducts } from '../../contexts/ProductProvider';
import { useState } from 'react';
import { useCategories } from '../../contexts/CategoryProvider';

function ProductModal({ openAddModal, handleCloseAdd, product, handleChangeInput, validateInput, error }) {

    const { handleUpdate} = useProducts()
    const {categories} = useCategories()

    const handleSubmit = async () => {
        if (!validateInput()) return;

        if (product.id) {
            await axios.put(`https://687f8f39efe65e52008a3579.mockapi.io/product/${product.id}`, product);
        } else {
            await axios.post(`https://687f8f39efe65e52008a3579.mockapi.io/product`, product);
        }

        handleCloseAdd();
        handleUpdate();
    };
  const handleChange = (event, newValue) => {
    console.log('Đã chọn:', newValue);
  };
    return (
        <Modal open={openAddModal} onClose={handleCloseAdd}>
            <Box sx={modalStyle} tabIndex={-1}>
                <Typography variant="h6">{product.id ? "Edit Product" : "Add Product"}</Typography>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={product.name}
                    onChange={handleChangeInput}
                    error={!!error.name}
                    helperText={error.name}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={product.description}
                    onChange={handleChangeInput}
                    error={!!error.description}
                    helperText={error.description}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    value={product.price}
                    onChange={handleChangeInput}
                    error={!!error.price}
                    helperText={error.price}
                    margin="normal"
                />
                <Autocomplete
                    fullWidth
                    options={categories}
                    getOptionLabel={(option) => option.name}
                    value={
                        categories.find(e => e.id == product.categoryId)
                    }
                    onChange={(e,newValue) => {
                        handleChangeInput({target : { name : "categoryId", value : newValue ? newValue.id : ""}})
                    }}
                    renderInput={(params) => <TextField {...params} label="Chọn danh mục" />}
                    
                />
                <Box mt={2} sx={{ display: "flex", gap: "10px" }}>
                    <Button variant="outlined" onClick={handleCloseAdd}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>{product.id ? "Update" : "Add"}</Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default ProductModal;
