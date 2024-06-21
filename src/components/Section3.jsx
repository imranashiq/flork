import { Box } from "@mui/system";
import image4 from "../assets/4.png";
import { Container, Stack, Typography } from "@mui/material";

const Section3 = () => {
  return (
    <Box
      className="spotMain_wrapper appear"
      sx={{
        height: { xs: "60vh", sm: "100vh", md: "130vh" },
        maxHeight: { xs: "490px", sm: "690px", md: "990px" },
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", md: "center" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Stack
          direction="column"
          spacing={{ xs: 2, sm: 3, md: 4 }}
          className="spotText_wrapper"
          sx={{ padding: { md: "0rem 3rem", sm: "0rem 5rem" } }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.3rem", sm: "2rem", md: "3rem" },
              lineHeight: "160%",
              fontFamily: "Luckiest Guy",
              color: "#000",
              textAlign: { xs: "center", md: "left" },
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
