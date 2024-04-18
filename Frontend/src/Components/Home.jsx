import {  Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div style={{marginTop:"200px", marginLeft:'450px'}}>
      
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://marketplace.canva.com/EAFrvPrYQZc/1/0/1131w/canva-black-gold-modern-restaurant-business-flyer-TihqqkuU58c.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='error'><Link to='/Cards'style={{textDecoration:"none",color:"black"}}>Details </Link></Button>
     
      </CardActions>
    </Card>



    </div>
  )
}

export default Home