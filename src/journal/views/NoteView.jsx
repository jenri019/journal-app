import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components'

export const NoteView = () => {
    return (
        <>
            <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
                <Grid item fontSize={39} fontWeight='light'>
                    <Typography>24 de febrero de 2024</Typography>
                </Grid>
                <Grid item color='primary' sx={{ padding: 2 }}>
                    <Button>
                        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                        Guardar
                    </Button>
                </Grid>
                <Grid container>
                    <TextField
                        type='text'
                        variant='filled'
                        fullWidth
                        placeholder='Insertar título'
                        label='Título'
                        sx={{ border: 'none', mb: 1 }}
                    />
                    <TextField
                        type='text'
                        variant='filled'
                        fullWidth
                        multiline
                        placeholder='Que ha sucedido hoy?'
                        label='Descripción'
                        minRows={5}
                    />
                </Grid>
                <ImageGallery />
            </Grid>
        </>
    )
}
