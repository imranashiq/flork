import { Box } from "@mui/system";
import image4 from "../assets/4.png";
import { Container, Stack, Typography } from "@mui/material";

const Section3 = () => {
  return (
    <Box
      className="spotMain_wrapper appear"
      sx={{
        height: { xs: "50vh", sm: "100vh", md: "130vh" },
        maxHeight: { xs: "490px", sm: "690px", md: "990px" },
        maxWidth: "1200px",
        position: "relative",
        overflow: "hidden",
        margin: "0rem auto",
      }}
    >
      <Container>
        <Stack
          direction="column"
          spacing={{ xs: 2, sm: 3, md: 4 }}
          className="spotText_wrapper"
          sx={{ padding: { md: "0rem 1rem", sm: "0rem 5rem" } }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", sm: "2rem", md: "3rem" },
              lineHeight: "118%",
              fontFamily: "Luckiest Guy",
              color: "#000",
              textAlign: { xs: "center", md: "left" },
              letterSpacing: ".2em",
            }}
          >
            Join Us and Relax, Your Spot is Reserved
          </Typography>
          <Typography
            sx={{
              fontFamily: "Red Hat Display",
              color: "#000",
              lineHeight: "160%",
              fontWeight: "700",
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1rem", sm: "1.6rem", md: "2.5" },
            }}
          >
            Tired of the heat from other coins? Swap <br /> stress for fun with
            us—your spot is ready!
          </Typography>
        </Stack>
      </Container>
      <Box className="spotImage_wrapper">
        <img
          width="100%"
          style={{ objectFit: "contain" }}
          src={image4}
          alt=""
        />
      </Box>
    </Box>
  );
};

export default Section3;
