import React from "react";
import { Box, Typography, Button, Grid2, IconButton } from "@mui/material";
import Visit from "../../assets/visit-arc.svg";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
function Hiring() {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 8 }, textAlign: { xs: "center" } }}>
            <Grid2 container spacing={20} alignItems="center">
                {/* Left Image */}
                <Grid2 size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }} >
                    <Box
                        component="img"
                        src={Visit}
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
                    <Typography variant="h6" component={"p"} sx={{ mt: 2 }}>
                        arc()
                    </Typography>
                    <Typography variant="h3" component={"p"} sx={{ color:"#003648" }} >
                        Hiring for a bigger project?
                    </Typography>

                        <Typography sx={{ display: "flex", alignItems: "center", mb: 1,mt: 2, color: "gray" }}>
                            Arc helps you find a senior developers for both permanent full-time rules and +40 hour contract projects
                        </Typography>

                    <Button
                       variant="text"
                        sx={{
                            color: "blue",
                            fontSize: "16px",
                            marginTop: "20px"
                        }}
                    >
                        Visit Arc to learn more  <ArrowForwardOutlinedIcon  sx={{ marginLeft: "4px" }}/>
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Hiring;
