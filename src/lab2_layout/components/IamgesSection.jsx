import { Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material'
import React from 'react'
import BigImg from "../../assets/big1.jpg"
import img1 from "../../assets/1.jpg"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.png"

import Section from './Section'

export default function IamgesSection() {
  return (
    <>
      <Box sx={{ width: "100%", height: { xs: "50%", md: "70", lg: "90%" }, position: "relative" }}>
        <img src={BigImg} alt="" width="100%" />
        <Typography variant='h3' component={"p"} sx={{ color: "white", position: "absolute", bottom: "80px", left: "30%" }}>Labour Day: Enjoy 20% off EQ3</Typography>
        <Typography variant='h6' component={"p"} sx={{ color: "white", position: "absolute", bottom: "40px", left: "30%" }}>Save on designs made with longevity in mind. Now until September 3rd.</Typography>
      </Box>
      <Typography variant='h3' component={"p"} px={5} pt={2}>Shop by category</Typography>
      <ImageList sx={{ maxWidth: "calc(100% - 40px)", overflow: "visible", px: 5 }} cols={4} gap={20} >
        {itemData.map((item) => (
          <ImageListItem
            key={item.id}
            sx={{
              padding: "70px",
              backgroundColor: "#FAFAFA",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}
const itemData = [
  {
    id: 1,
    img: img5,
    title: 'Ready to Ship Upholstrey',
  },
  {
    id: 2,
    img: img2,
    title: 'Dinning',
  },
  {
    id: 3,
    img: img3,
    title: 'Storage Beds',
  },
  {
    id: 4,
    img: img4,
    title: 'Lightning',
  },
  {
    id: 5,
    img: img5,
    title: 'Accet Table',
  },
  {
    id: 6,
    img: img6,
    title: 'Bar & Counter Stools',
  },
  {
    id: 7,
    img: img7,
    title: 'Accent stools',
  },
  {
    id: 8,
    img: img2,
    title: 'Accent Stairs',
  },
  {
    id: 9,
    img: img3,
    title: 'Media % Storage',
  },
  {
    id: 10,
    img: img4,
    title: 'Media % Storage',
  },
  {
    id: 11,
    img: img5,
    title: 'Media % Storage',
  },
  {
    id: 12,
    img: img6,
    title: 'Media % Storage',
  }
];