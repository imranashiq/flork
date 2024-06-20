import { Box, Button, Container, Typography } from "@mui/material";
import patterns from "../assets/patterns.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";

const Join = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('${patterns}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "5rem 0rem 12rem ",
        position: "relative",
        overflow: "hidden",
        height: "100vh",
        maxHeight: "790px",
      }}
    >
      <Container className="container">
        <Box>
          <Typography
            sx={{
              color: "#000",
              textAlign: "center",
              fontSize: { xs: "24px", md: "48px" },
              fontFamily: "Denk One",
              textShadow: "0px 7px 8.2px rgba(0, 0, 0, 0.31)",
            }}
          >
            Ready for a Cooler Crypto Experience?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            margin: { xs: "5rem 0rem" },
          }}
        >
          <Button className="btn_primary" sx={{ fontFamily: "Century Gothic" }}>
            JOIN FLORK COMMUNITY
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img width="100%" src={image5} alt="" />
              <Typography sx={{ fontFamily: "Denk One", fontSize: "24px" }}>
                Uniswap
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img width="100%" src={image6} alt="" />
              <Typography sx={{ fontFamily: "Denk One", fontSize: "24px" }}>
                Etherscan
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <img className="image7" src={image7} alt="" />
    </Box>
  );
};

export default Join;
