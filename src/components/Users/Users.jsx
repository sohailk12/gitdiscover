import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
const Users = () => {
  //State management
  const [gitUsers, setGitUsers] = useState([]);

  const getGitUsers = async () => {
    const response = await axios.get("https://api.github.com/users?since=XXXX");
    console.log(response.data);
    setGitUsers(response.data);
    return response.data;
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <>
  <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',py:'10px',px:'20px',mt:'1em',position:'absolute',top:'10%'}}>
  <Grid container columns={12} spacing={3}>
  {gitUsers.map((user) => (
      <Grid size={{xs:12, sm:6, md:4, lg:3}} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Card sx={{ maxWidth: 345,width:'100%'}}>
      <CardMedia
      sx={{ width:'180px',height: 145, borderRadius:'100%',margin:'0 auto'}}
      image={user.avatar_url}
      title={user.login}
    />
    <CardContent sx={{display:'flex', justifyContent:'center'}}>
        <Box sx={{display:'flex',gap:'5px'}}>
        <Typography variant="body2" sx={{mt:'7px',color: 'text.secondary'}}>UserName: </Typography>
      <Typography gutterBottom variant="h6" component="div" sx={{textTransform:'capitalize'}}>
      {user.login}
      </Typography>
        </Box>
    </CardContent>
    <CardActions sx={{display:'flex', justifyContent:'center'}}>
      <NavLink to={`/Profile/${user.login}`}><Button size="small" variant="contained" color="secondary">View User</Button></NavLink>
    </CardActions>
  </Card>
      </Grid>
        ))}
  </Grid>
  </Box>
    </>
  );
};

export default Users;