import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Signin = () => {
  return (
    <div style={{marginTop:"80px" }}>
        <Typography variant='h3'>Signin</Typography><br></br><br></br>
     <TextField label="Enter first name" variant='outlined'/><br></br><br></br>
     <TextField label="Enter last name" variant='outlined'/><br></br><br></br>
     <TextField label="Email id" variant='outlined'/><br></br><br></br>
     <TextField label="Enter password" type='password' variant='outlined'/><br></br><br></br>
     <TextField label="Re-enter password" variant='outlined'/><br></br>

    <Button variant='contained' color='success'><Link to='/Cards'style={{textDecoration:"none",color:"white"}}>Sign Up</Link></Button></div>
  )
}

export default Signin