import { Box, Button, Grid2, Typography } from "@mui/material";

const Section = ({ direction = "right", imageSrc, title, description }) => {
  return (
    <Grid2
      container
      spacing={2}
      alignItems="center"
      direction={direction === "right" ? "row" : "row-reverse"}
      sx={{ backgroundColor: "#FAFAFA",my: 4 }}
    >
      {/* Image Section */}
      <Grid2  size={{xs:12, md:6}}>
        <Box
          component="img"
          src={imageSrc}
          alt="Promo"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Grid2>

      {/* Text Section */}
      <Grid2  size={{xs:12, md:6}} >
        <Box sx={{ textAlign: "left", maxWidth: "500px", mx: "auto" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {description}
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "black", color: "white" }}>
            Learn More
          </Button>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Section;
