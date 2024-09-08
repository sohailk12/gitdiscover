import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { NavLink } from 'react-router-dom';

function Repositories() {
    //State management
const [repos, setRepos] = useState(null);
const gitRepos = async () => {
  const response = await axios.get(
    "https://api.github.com/search/repositories?q=language:javascript"
  );
  console.log(response.data.items);
  setRepos(response.data.items);
  return response.data;
};
useEffect(() => {
  gitRepos().catch((e) => console.error(e));
}, []);
  return <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',py:'10px',px:'20px',mt:'1em',position:'absolute',top:'10%'}}>
  <Grid container columns={12} spacing={3}>
    {repos ? (
      repos.map((repo) => (
      <Grid size={{xs:12, sm:6, md:4, lg:3}} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Card sx={{ maxWidth: 345,width:'100%'}}>
    <CardMedia
      sx={{ height: 140 }}
      image={repo.owner.avatar_url}
      title={repo.owner.avatar_url}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {repo.name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary',marginBottom:'5px' }}>
      Language: {repo.language}
      </Typography>
      <Stack direction="row" spacing={1}>
    <Typography variant="body1" sx={{ color: 'text.secondary',paddingTop:'5px' }}>By: </Typography>
    
    <Chip
      avatar={<Avatar alt="Natacha" src={repo.owner.avatar_url} />}
      label={repo.owner.login}
      variant="outlined"
    />
  </Stack>
    </CardContent>
    <CardActions sx={{display:'flex', justifyContent:'center'}}>
      <NavLink to={`https://github.com/${repo.owner.login}/${repo.name}`} target='_blank'><Button size="small" variant="contained" color="secondary">View More</Button></NavLink>
    </CardActions>
  </Card>
      </Grid>
      ))
    ) : (
      <Stack sx={{ width: '100%', color: 'grey.500',marginTop:'10%' }} spacing={2}>
    <LinearProgress color="secondary" />
    <LinearProgress color="success" />
    <LinearProgress color="inherit" />
  </Stack>
    )
    }
  </Grid>
  </Box>
}

export default Repositories