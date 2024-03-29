import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: 'calc(100vh -  110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
            <Grid item
                xs={12}
            >
                <StarOutline sx={{ fontSize: 100, color: '#ffffff' }} />
            </Grid>
            <Grid item
                xs={12}
            >
                <Typography
                    variant='h5'
                    color='#ffffff'
                >
                    Selecciona o crea una nota
                </Typography>
            </Grid>
        </Grid>
    )
}
