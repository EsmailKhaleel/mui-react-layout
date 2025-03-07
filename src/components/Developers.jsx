import React from "react";
import { Box, Typography, Button, Grid2 } from "@mui/material";
import Person from "./Person";
import PersonalImg from "../assets/personal.jpg";

const developers = [
    {
        name: "Esmail Khaleel",
        title: "Experienced Full-Stack Web Developer",
        image: PersonalImg,
        skills: ["python", "sql", "django"]
    },
    {
        name: "Esmail Khaleel",
        title: "Senior Software Engineer @ Indeed",
        image: PersonalImg,
    },
    {
        name: "Esmail Khaleel",
        title: "#1 Stack Overflow Python Answerer",
        image: PersonalImg,
    },
    {
        name: "Esmail Khaleel",
        title: "Full-Stack Developer",
        image: PersonalImg,
    },
    {
        name: "Esmail Khaleel",
        title: "Senior iOS Developer",
        image: PersonalImg,
    },
    {
        name: "Esmail Khaleel",
        title: "Senior iOS Developer and Consultant",
        image: PersonalImg,
    }
];

const DevelopersSection = () => {
    return (
        <Box sx={{ backgroundColor: "#004B5E", color: "white", py: 8, textAlign: "center" }}>
            {/* Section Title */}
            <Typography variant="h3" fontWeight="bold">
                Connect with
            </Typography>
            <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
                12000+ top developers anytime
            </Typography>

            {/* Developers Grid */}
            <Grid2 container spacing={3} sx={{padding:"20px 100px"}}>
                {developers.map((dev, index) => (
                    <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }} container justifyContent="center" alignItems="center">
                        <Person name={dev.name} title={dev.title} image={dev.image} />
                    </Grid2>
                ))}
            </Grid2>

            <Box sx={{ mt: 5 }}>
                <Typography fontWeight="bold">Start working with our developers</Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#DE5D49",
                        color: "white",
                        fontSize: "16px",
                        padding: "12px 24px",
                        mt: 2,
                        "&:hover": { backgroundColor: "#C04C3D" },
                    }}
                >
                    GET STARTED
                </Button>
            </Box>
        </Box>
    );
};

export default DevelopersSection;
