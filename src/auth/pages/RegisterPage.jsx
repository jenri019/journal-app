import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layouts/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='correo'
              type='email'
              placeholder='correo@gmail.com'
              fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='contraseña'
              type='password'
              placeholder='contraseña'
              fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='contraseña'
              type='password'
              placeholder='Repetir contraseña'
              fullWidth />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth>
                <Typography>Register</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant='contained'
                fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Have an account? Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
