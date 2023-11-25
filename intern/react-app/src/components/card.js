import React from 'react';
import { Card, CardActions, CardContent, CardMedia,Typography } from '@mui/material';
import maha from './assets/maha.jpg'
import rohi from './assets/rohi.jpg'
import rams from'./assets/badham.jpg'
import yogi from './assets/yogi.jpg'
import bgr from './assets/bgr.jpg'




const cardContainerStyle = {
  display: 'flex',
  gap: '16px',
  flexWrap: 'wrap',
  backgroundImage:`url(${bgr})`,
  backgroundRepeat: 'repeat',
  textAlign:'center'
  
};
const image={
backgroundImage:`url(${bgr})`,

};
const cardStyle = {
  maxWidth: 345,
  width:'50%',
  backgroundColor: '#183D3D',
  borderRadius: '50%', // Make it 50% to create a circular shape
  height: '400px',
  overflow: 'hidden',
  marginBottom: '20px',
  marginTop: '40px',
  position: 'relative',

  textOverflow: 'ellipsis', // Added to create a stacking context for z-index to work
};



const imageStyle = {
  height: 100,
};
const cardsData = [
  {
    title:'Ramya',
    description:<h3>21JN1A45G2<br></br>AID</h3>, 
    image: rams,
  },
  {
    title: 'Rohini',
    description:<h3>21JN1A4576<br></br>AID</h3>,
    image: rohi
  },
  {
    title: 'Maha Lakshmi',
    description:<h3>21JN1A4592<br></br>AID</h3>,
    image: maha
  },
  {
    title: 'Yogitha',
    description:<h3>21JN1A4392<br></br>CAI</h3>,
    image: yogi
  },
];

const CardList = () => {
  return (
    <div style={cardContainerStyle}>
      {cardsData.map((card, index) => (
        <Card key={index} sx={cardStyle} >
          <CardMedia
           sx={{ ...imageStyle, height: 250 }} // Override the height if needed
           image={card.image}
           title={card.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={'white'} textAlign={'center'}>
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary"  sx={{...image,textAlign:'center',color:'white'} }  >
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            
  
          </CardActions>
        </Card>
           ))}

   
    </div>
  );
};

export default CardList;
