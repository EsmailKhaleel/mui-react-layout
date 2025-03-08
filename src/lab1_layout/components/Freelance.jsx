import React from "react";
import { Box, Typography, Button, Grid2 } from "@mui/material";
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import freeLanceImg from "../../assets/freelance-job.png";

function Freelance() {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 8 }, textAlign: { xs: "center" } }}>
            <Grid2 container spacing={20} alignItems="center">
                {/* Left Image */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }} >
                    <Box
                        component="img"
                        src={freeLanceImg}
                        alt="Freelanceship"
                        sx={{
                            width: "100%",
                            maxWidth: "500px",
                            height: "auto",
                        }}
                    />
                </Grid2>
                {/* Right Content */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: "left" }}>
                    <Typography variant="h2" component={"p"} sx={{ mt: 2, color:"#003648" }}>
                        Project-based freelance work
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                        <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <RocketLaunchOutlinedIcon sx={{ color: "#006080", marginRight: "4px" }} />
                            Find experts for on-demand code preview.
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <AdminPanelSettingsOutlinedIcon sx={{ color: "#006080", marginRight: "4px" }} />
                            Build features for your existing project.
                        </Typography>
                        <Typography sx={{ display: "flex", alignItems: "center" }}>
                            <ManageSearchOutlinedIcon sx={{ color: "#006080", marginRight: "4px" }} />
                            Turn your idea into an MVP.
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
                        FIND A Freelancer
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Freelance;
