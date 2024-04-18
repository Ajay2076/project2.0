import { Button, CardHeader, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div style={{marginTop:"80px"}}>
      
      <Typography variant="h3"> Login page</Typography>
      <TextField label="Username" variant='outlined'/><br></br><br></br>
      <TextField label="Enter password" type='password' variant='outlined'/><br></br><br></br>
      
        <Button variant='text' color='success'> <Link to='/Cards'style={{textDecoration:"none",color:"white"}}>Login</Link></Button><br></br><br></br>
        
    </div>
  )
}

export default Login