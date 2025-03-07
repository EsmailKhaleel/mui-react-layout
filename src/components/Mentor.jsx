import React from "react";
import { Box, Typography, Button, Grid2 } from "@mui/material";
import PestControlIcon from "@mui/icons-material/PestControl";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import mentorImg from "../assets/mentorship.jpg";

function Mentor() {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 8 }, textAlign: { xs: "center" } }}>
            <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ color:"#003648" }}>
                Get help from vetted software developers
            </Typography>
            <Grid2 container spacing={4} alignItems="center">
                {/* Left Content */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
                    <Typography variant="h2" component={"p"} sx={{ mt: 2, color:"#003648" }} >
                        One-on-one live mentorship
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                        <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <PestControlIcon sx={{ color: "#006080", marginRight: "4px" }} />
                            Debug with the help of an expert
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <EmojiPeopleIcon sx={{ color: "#006080", marginRight: "4px" }} />
                            Personalize your learning experience
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center" }}>
                            <SummarizeOutlinedIcon sx={{ color: "#006080", marginRight: "4px" }} />
                            Get answers to complex problems
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#FF6B54",
                            color: "white",
                            fontSize: "18px",
                            padding: "12px 24px",
                            "&:hover": { backgroundColor: "#C04C3D" },
                            marginTop: "50px"
                        }}
                    >
                        FIND A MENTOR
                    </Button>
                </Grid2>

                {/* Right Image */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }} >
                    <Box
                        component="img"
                        src={mentorImg}
                        alt="Mentorship"
                        sx={{
                            width: "100%",
                            maxWidth: "500px",
                            height: "auto",
                        }}
                    />
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Mentor;
