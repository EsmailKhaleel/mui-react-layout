import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import CssOutlinedIcon from '@mui/icons-material/CssOutlined';
import PhpOutlinedIcon from '@mui/icons-material/PhpOutlined';
const skillIcons = [
    <JavascriptOutlinedIcon sx={{ color: "gray" }} />,
    <PhpOutlinedIcon sx={{ color: "gray", marginRight: "6px" }} />,
    <CssOutlinedIcon sx={{ color: "gray", marginRight: "6px" }} />,
];

const Person = ({ name, title, image }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "15px",
                width:"100%",
                border: "3px solid #004B5E",
                height:"100px"
            }}
        >
            <Avatar src={image} alt={name} sx={{ width: 90, height: 90, marginRight: 2, borderRadius: "200px" }} />

            <Box  sx={{ display:"flex", flexDirection:"column", alignItems:"start" }}>
                <Typography variant="h6" fontWeight="bold" sx={{ color:"black" }}>
                    {name}
                </Typography>
                <Typography variant="body2" color="gray">
                    {title}
                </Typography>

                {/* Tech Stack Icons */}
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    {skillIcons.map((skill, index) => (
                        <Box key={index}>{skill}</Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Person;
