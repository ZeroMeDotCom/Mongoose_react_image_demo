import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageCard = ({ imgurl }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* CardMedia displays the image */}
      <CardMedia
        component="img" // Specifies this is an image
        height="200"    // Sets image height
        image={imgurl} // Replace with your image URL
        alt="Ueki"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          My Image Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a description for the image.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;