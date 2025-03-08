import React from "react";
import { Box, Container, Grid2, Typography, IconButton, Divider } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "black",
                color: "lightgray",
                py: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid2 container justifyContent="space-between">
                    {/* Products Section */}
                    <Grid2 size={{ xs: 12, sm: 6, md: 3 }} sx={{ marginRight:"40px" }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 2 }}>
                            PRODUCTS
                        </Typography>
                        <Typography sx={{ mb: 1, opacity: 0.8, display: "flex", flexDirection: 'column' }} >
                            Codementor
                            <Typography variant="p" sx={{ color: "white", mb: 2, fontSize: "14px" }}>
                                Find a mentor to help you in real time</Typography>
                        </Typography>
                        <Typography sx={{ mb: 1, opacity: 0.8, display: "flex", flexDirection: 'column' }} >
                            Codementor Events
                            <Typography variant="p" sx={{ color: "white", mb: 2, fontSize: "14px" }}>
                                Find a mentor to help you in real time</Typography>
                        </Typography>
                        <Typography sx={{ mb: 1, opacity: 0.8, display: "flex", flexDirection: 'column' }} >
                            DevProjects
                            <Typography variant="p" sx={{ color: "white", mb: 2, fontSize: "14px" }}>
                                Find a mentor to help you in real time</Typography>
                        </Typography>
                        <Typography sx={{ mb: 1, opacity: 0.8, display: "flex", flexDirection: 'column' }} >
                            Arc
                            <Typography variant="p" sx={{ color: "white", mb: 2, fontSize: "14px" }}>
                                Find a mentor to help you in real time</Typography>
                        </Typography>
                    </Grid2>

                    {/* Pages Section */}
                    <Grid2 size={{ xs: 12, sm: 6, md: 6 }} sx={{ width: "100%" }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: "white", mb: 2 }}>
                            PAGES
                        </Typography>
                        <Grid2 container spacing={1}>
                            <Grid2 size={{ xs: 6, sm: 4 }} >
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Become a Codementor</Typography>
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>How It Works</Typography>
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Find Mentors</Typography>
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Find Freelancers</Typography>
                                <Typography sx={{ opacity: 0.8 }}>Find a Tutor</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 4 }} >
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Community</Typography>
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Blog</Typography>
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Codementor For Students</Typography>
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Codementor For Teams</Typography>
                                <Typography sx={{ opacity: 0.8 }}>Code Review</Typography>
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 4 }} >
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Pair Programming</Typography>
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Best Web Design Software</Typography>
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Coding Starter Kit</Typography>
                                <Typography sx={{ mb: 1,whiteSpace: "nowrap", opacity: 0.8 }}>Codementor Reviews</Typography>
                                <Typography sx={{ opacity: 0.8 }}>Best Language to Learn</Typography>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>

                {/* Divider */}
                <Divider sx={{ my: 4, bgcolor: "#444" }} />

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {/* Copyright */}
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        © Copyright 2024 Codementor
                    </Typography>

                    {/* Footer Links */}
                    <Box display="flex" gap={2}>
                        <Typography sx={{ fontSize: "14px", opacity: 0.7 }}>Cookie Policy</Typography>
                        <Typography sx={{ fontSize: "14px", opacity: 0.7 }}>Privacy Policy</Typography>
                        <Typography sx={{ fontSize: "14px", opacity: 0.7 }}>Terms of Service</Typography>
                        <Typography sx={{ fontSize: "14px", opacity: 0.7 }}>Careers</Typography>
                        <Typography sx={{ fontSize: "14px", opacity: 0.7 }}>Help Center</Typography>
                    </Box>

                    {/* Social Media Icons */}
                    <Box>
                        <IconButton sx={{ color: "#f5f5f5", opacity: 0.8 }}>
                            <Facebook />
                        </IconButton>
                        <IconButton sx={{ color: "#f5f5f5", opacity: 0.8 }}>
                            <Twitter />
                        </IconButton>
                        <IconButton sx={{ color: "#f5f5f5", opacity: 0.8 }}>
                            <LinkedIn />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
