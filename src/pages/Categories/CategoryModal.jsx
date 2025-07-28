import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { modalStyle } from '../../contants';
import axios from 'axios';
import { useCategories } from '../../contexts/CategoryProvider';

function CategoryModal({ openAddModal, handleCloseAdd, category, handleChangInput, validateInput, error }) {
    const { handleUpdate }  =  useCategories();
    const handleSubmit = async () => {
        if (!validateInput()) {   
            return 
        }

        if (category.id) {
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
                    <Typography  variant="h6">{category.id ? 'Edit Category' : 'Add Category'}</Typography>
                    <TextField error={!!error.name}
                               helperText={error.name} 
                               fullWidth label="Name" name="name" value={category.name} onChange={handleChangInput}  margin="normal" />
                    <TextField error={!!error.description}
                               helperText={error.description}
                                fullWidth label="Description" name="description" onChange={handleChangInput} value={category.description}  margin="normal" />
                    <Box mt={2} sx={{ display : "flex" , gap : "10px"}} >
                        <Button variant="outlined" onClick={handleCloseAdd}>Cancel</Button>
                        <Button variant="contained" onClick={handleSubmit} >{category.id ? 'Update' : 'Add'}</Button>
                    </Box>
                </Box>
            </Modal>
    );
}



export default CategoryModal;