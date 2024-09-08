import axios from "axios";
import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';

const Profile = () => {
  const [gitUserData, setGitUserData] = useState({});
  const {userName} = useParams();
  const obj = useOutletContext();
  console.log('userName count---in PROFILE|||',userName);
  useEffect(() => {
    const getGitUser = async () => {
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      console.log("USER IS HERE:PROFILE|||", response.data);
      setGitUserData(response.data);
      return response.data;
    };
    getGitUser().catch((e) => console.error(e));
  }, [userName]);
 
  const joinedDate = new Date(gitUserData.created_at);
  return (
    <>
    {
        userName && 
        <Card sx={{ maxWidth: {xs:'80%', sm:'80%', md:'60%', lg:'50%'},width:'100%',mx:'auto'}}>
      <CardMedia
      sx={{height: 250,maxWidth: {xs:'80%',md:'60%',lg:'50%'},mx:'auto',borderRadius:"100%"}}
      image={gitUserData.avatar_url}
      title={gitUserData.login}
    />
    <CardContent sx={{display:'flex', justifyContent:'center',alignItems:'center' ,flexDirection:'column'}}>
    <Stack direction="row" spacing={1} sx={{display:'flex',flexWrap:'wrap',rowGap:'10px',justifyContent:'center'}}>
      <Chip label={`Following: ${gitUserData.following}`} variant="outlined"/>
      <Chip label={`Followers: ${gitUserData.followers}`} variant="outlined" />
      <Chip label={`Public Repos: ${gitUserData.public_repos}`} variant="outlined"/>
    </Stack>
    <Typography variant="body2" sx={{color: 'text.secondary',textAlign:'center',mt:'4px',mb:'10px'}}>Joined On: {`${joinedDate.getDate()} ${joinedDate.toLocaleString('en-us', { month: 'short' })} ${joinedDate.getFullYear()}`}</Typography>
        <Box sx={{display:'flex',gap:'5px'}}>
        <Typography variant="body2" sx={{mt:'7px',color: 'text.secondary'}}>UserName: </Typography>
      <Typography gutterBottom variant='h6' component="div" sx={{textTransform:'capitalize'}}>
      {gitUserData.name}
      </Typography>
        </Box>
        <Box sx={{display:'flex',gap:'5px'}}>
        <Typography variant="body2" sx={{mt:'4px',color: 'text.secondary'}}>UserLogin: </Typography>
      <Typography gutterBottom variant="subtitle1" component="div" sx={{textTransform:'capitalize',color: 'text.primary'}}>
      {gitUserData.login}
      </Typography>
        </Box>
        <Box sx={{display:'flex',gap:'5px'}}>
        <Typography variant="body2" sx={{mt:'4px',color: 'text.secondary'}}>Location: </Typography>
      <Typography gutterBottom variant="subtitle1" component="div" sx={{textTransform:'capitalize',color: 'text.secondary'}}>
      {gitUserData.location}
      </Typography>
        </Box>
    </CardContent>
    <CardActions sx={{display:'flex', justifyContent:'center'}}>
      <NavLink to={`https://github.com/${userName}`} target='_blank'><Button endIcon={<GitHubIcon sx={{color:'black'}}/>} size="large" variant="outlined" color="primary">View GiHub</Button></NavLink>
    </CardActions>
  </Card>
    }
    </>
  );
};

export default Profile;