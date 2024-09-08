import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Notfound() {
  return <Container sx={{position:'absolute', top:'20%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'10px'}}>
    <Typography variant='h3' sx={{overflow:'hidden'}}>Page Not Found</Typography>
    <NavLink to={'/'}>
        <Button variant="outlined">
        Go to HomePage
        </Button>
    </NavLink>
  </Container>
}

export default Notfound