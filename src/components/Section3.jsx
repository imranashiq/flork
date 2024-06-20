import { Box } from "@mui/system";
import image4 from "../assets/4.png";
import { Container, Typography } from "@mui/material";

const Section3 = () => {
  return (
    <Box
      className="spotMain_wrapper"
      sx={{
        height: { xs: "80vh", md: "130vh" },
        maxHeight: { xs: "490px", md: "990px" },
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", md: "center" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Box className="spotText_wrapper" sx={{ padding: "0rem 3rem" }}>
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", md: "3.2rem" },
              lineHeight: "160%",
              fontFamily: "Denk One",
              color: "#000",
              textAlign: { xs: "center", md: "left" },
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Join Us and Relax, Your Spot is Reserved
          </Typography>
          <Typography
            sx={{
              fontFamily: "Denk One",
              color: "#464646",
              lineHeight: "160%",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1.3rem", md: "2rem" },
            }}
          >
            Tired of the heat from other coins? Swap stress for fun with us—your
            spot is ready!
          </Typography>
        </Box>
      </Container>
      <Box
        className="spotImage_wrapper"
        sx={{
          position: "absolute",
          top: { md: "30px" },
          bottom: { xs: "50px" },
        }}
      >
        <img width="100%" src={image4} alt="" />
      </Box>
    </Box>
  );
};

export default Section3;
