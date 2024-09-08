import { Route , Routes } from 'react-router-dom';
import Home from './components/Home';
import Repositories from './components/Repositories/Repositories';
import Navbar from './components/Navbar';
import Users from './components/Users/Users';
import Notfound from './components/Notfound';
import Profile from './components/Users/Profile';
import { Box } from '@mui/material';
import SearchUser from './components//Users/SearchUser';
function App() {

  return <Box sx={{display:'flex',justifyContent:'center',mt:{xs:'3.5rem',sm:'4.2rem',md:'4.5rem'}}}>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Repositories' element={<Repositories/>}/>
          <Route path='/Users' element={<Users/>}/>
          <Route path='/Profile/:userName' element={<Profile/>}/>
          <Route path='/Search' element={<SearchUser/>}>
          <Route path='/Search:userName' element={<Profile/>}/>
          </Route>
          <Route path='/*' element={<Notfound/>}/>
      </Route>
    </Routes>
  </Box>
}

export default App
