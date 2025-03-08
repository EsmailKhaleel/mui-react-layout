import React from "react";
import { Breadcrumbs, Link, Typography, IconButton, Box, Button, MenuItem } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LanguageIcon from "@mui/icons-material/Language";

const Navbar = () => {
    return (
        <Box display="flex" alignItems="center" py={1} px={5} sx={{ borderBottom: "1px solid #ddd" }}>
            {/* Logo */}
            <Typography variant="h4" sx={{ marginRight: "auto" }}>
                EQ3
            </Typography>

            {/* Breadcrumbs for Navigation */}
            <Breadcrumbs separator=" / " aria-label="breadcrumb" sx={{ margin:"0 10px" }}>
                <IconButton>
                    <LocationOnIcon />
                </IconButton>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlineIcon />
                </IconButton>
                <Link sx={{
                    textDecoration: "none", color: "inherit", "&:hover": { textDecoration: "underline", textDecorationColor: "gray", },
                }}>
                    Join/Login to EQ3
                </Link>
                <Link sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit", "&:hover": { textDecoration: "underline", textDecorationColor: "gray", }, }}>
                    <LanguageIcon sx={{ mr: 0.5 }} />
                    EN / CAD
                </Link>
            </Breadcrumbs>

            {/* Cart Button */}
            <Button variant="outlined" color="inherit" sx={{ padding: "5px 25px" }} >
                <ShoppingCartOutlinedIcon />
                <Typography variant="body2" ml={0.5}>Cart (0)</Typography>
            </Button>
        </Box>
    );
};

export default Navbar;
