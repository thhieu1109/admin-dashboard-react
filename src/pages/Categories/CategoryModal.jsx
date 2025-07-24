import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { modalStyle } from '../../contants';
import axios from 'axios';

function CategoryModal({ openAddModal, handleCloseAdd, category, handleChangInput, handleUpdate,isEdit }) {


    // const addCategory = async () => {
    //      await axios.post("https://687f8f39efe65e52008a3579.mockapi.io/categories", category);
    //      handleCloseAdd();
    //      handleUpdate();
    // }

    const handleSubmit = async () => {
        if (isEdit) {
            await axios.put(`https://687f8f39efe65e52008a3579.mockapi.io/categories/${category.id}`, category);
        } else {
            await axios.post("https://687f8f39efe65e52008a3579.mockapi.io/categories", category);
        }
        handleCloseAdd();
        handleUpdate();
    };


    return (
            <Modal open={openAddModal} onClose={handleCloseAdd}>
                <Box  tabIndex={-1}  sx={modalStyle}>
                    <Typography  variant="h6">{isEdit ? 'Edit Category' : 'Add Category'}</Typography>
                    <TextField fullWidth label="Name" name="name" value={category.name} onChange={handleChangInput}  margin="normal" />
                    <TextField fullWidth label="Description" name="description" onChange={handleChangInput} value={category.description}  margin="normal" />
                    <Box mt={2} sx={{ display : "flex" , gap : "10px"}} >
                        <Button variant="outlined" onClick={handleCloseAdd}>Cancel</Button>
                        <Button variant="contained" onClick={handleSubmit} >{isEdit ? 'Update' : 'Add'}</Button>
                    </Box>
                </Box>
            </Modal>
    );
}



export default CategoryModal;