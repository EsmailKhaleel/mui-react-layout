import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import hero from "../assets/hero.png"; // Ensure correct path

const Hero = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{ position: "relative", overflow: "hidden", height: { xl:"900px", lg: "700px", md: "600px", sm:"500px" } }}>
            {/* Main Content */}
            <Box
                sx={{
                    backgroundColor: "#006080",
                    color: "white",
                    px: 3,
                    py: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    height: { xs: "auto", md: "400px" },
                }}
            >
                <Typography
                    variant={isSmallScreen ? "h4" : "h3"}
                    fontWeight="bold"
                >
                    Find a developer for
                </Typography>
                <Typography
                    variant={isSmallScreen ? "h5" : "h3"}
                    fontWeight="bold"
                    sx={{ mb: 3 }}
                >
                    live mentorship & freelance projects
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#FF6B54",
                        color: "white",
                        fontSize: "18px",
                        padding: "12px 24px",
                        "&:hover": { backgroundColor: "#C04C3D" },
                    }}
                >
                    GET HELP NOW
                </Button>
            </Box>
            <Box
                component="img"
                sx={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                    position: "absolute",
                    display: { xs: "none", sm: "block" },
                    width: { xs: "90%", sm: "60%", md: "70%" },
                    top: { xs: "250px", sm: "220px", md: "270px", xl: "270px", lg: "250px" },
                    left: { xs: "5%", sm: "20%", md: "15%", lg: "15%" },
                    textAlign: "center",
                    overflow: "hidden",
                }}
                src={hero}
                alt="Hero"
            />
        </Box>
    );
};

export default Hero;
