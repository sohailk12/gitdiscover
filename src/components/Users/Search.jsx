import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  color:'black',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'black'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function GithubProfileFinder(){

    const [userName,setUserName] = useState("");
    const navigate =useNavigate();
    
    function handleSubmit(){
        console.log('handleSubmit:-----------------',userName);
        navigate(`/Search/${userName}`);
        setUserName('');
    }
    return (<>
    <Box sx={{padding:'10px',mr:{xs:'0',md:'auto'},ml:{xs:'0px',lg:'12%'},display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <Typography variant="h5" sx={{color:'text.secondary',textAlign:'center',px:'10px'}}>Find GitHub profile and lets check it out the User Details</Typography>
    <Box position="static" sx={{backgroundColor:'#E0FFFF',borderRadius:'10px'}}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={userName} 
              onChange={(e)=>setUserName(e.target.value)}
            />
          </Search>
          <Button variant='contained' size='large' onClick={handleSubmit}>Search</Button>
        </Toolbar>
    </Box>
    {/* <TextField
      id="search-bar"
      className="text"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      label="Find GitHub Profile..."
      variant="outlined"
      placeholder="Search..."
      size="small"
    />
    <IconButton type="submit" aria-label="search">
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton> */}
        {/* <input type="tex" placeholder="Type Name Here....." name="serach-by-username" value={userName} onChange={(e)=>setUserName(e.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>Search</button> */}
    </Box>
    </>)
}