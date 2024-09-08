import { Outlet } from 'react-router-dom';
import Search from './Search';
import React from 'react'
import { Box } from '@mui/material';

function SearchUser() {
  return (
    <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},width:'100%'}}>
        <Search/>
        <Outlet/>
    </Box>
  )
}

export default SearchUser