import React from "react";
import { Box, Typography, InputAdornment, OutlinedInput, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const categories = [
    "Living", "Dining", "Bedroom", "Outdoor", "Office",
    "Lighting", "Rugs", "Accessories", "Brands", "Inspiration",
    "Gifts", "Sale"
];

const CategoryNavbar = () => {
    return (
        <>
        <Box display="flex" justifyContent="space-between" alignItems="center" px={5} borderBottom="1px solid #ddd">
            {/* Category Links */}
            <Box display="flex" gap={3}>
                {categories.map((category, index) => (
                    <Typography key={index} variant="body1" sx={{ cursor: "pointer", "&:hover": { color: "gray" } }}>
                        {category}
                    </Typography>
                ))}
            </Box>

            {/* Search Bar */}
            <OutlinedInput
                type={'text'}
                placeholder="Search"
                sx={{ borderRadius: "0","&.MuiOutlinedInput-root":{"&.Mui-focused fieldset": {borderColor: "gray"},} }}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            edge="end"
                        >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </Box>
        <Typography textAlign={"center"} variant="subtitle1" fontWeight={"bold"} bgcolor={"#F5A049"} py={1}>
            Labour Day: Enjoy 20% off EQ3
        </Typography>
        </>
    );
};

export default CategoryNavbar;
