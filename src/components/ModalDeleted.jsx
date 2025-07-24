import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import { modalStyle } from '../contants';

function ModalDeleted({openDeleteModal, setOpenDeleteModal, deleteCategory, handleDelete}) {
    return (
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
    );
}

export default ModalDeleted;