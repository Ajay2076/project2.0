import { AppBar, Avatar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          
       <AppBar color='warning'>
       
      
            <Toolbar>
              <Button variant='text'><Link to={'/'} state={{textDecoration:'none',color:'white'}}>
            <Avatar src="https://i.pinimg.com/200x150/5e/87/f2/5e87f26d3150a73aa6caf20634de26c6.jpg"/>&nbsp;&nbsp;
            </Link></Button>
                <Typography style={{marginLeft:'450px'}} variant='h4'align='center'>  ROYAL CHEF </Typography>&nbsp;&nbsp;
               
                <Button style={{marginLeft:'200px'}} variant='text' color='primary'>
                  <Link to='/Login'style={{textDecoration:"none",color:"white"}}>Log In</Link></Button>&nbsp;&nbsp;

                <Button variant='text' color='success'>
                  <Link to='/Signin'style={{textDecoration:"none",color:"white"}}>Sign Up</Link></Button>&nbsp;
                  
            </Toolbar>
            
        
        </AppBar>
    </div>
  )
}

export default Navbar