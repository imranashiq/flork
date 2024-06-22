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
        maxHeight: { xs: "90vh", sm: "690px", md: "790px" },
      }}
    >
      <Container className="container appear">
        <Box>
          <Typography
            sx={{
              color: "#000",
              textAlign: "center",
              fontSize: { xs: "24px", sm: "36px", md: "48px" },
              fontFamily: "Luckiest Guy",
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
            margin: { xs: "3rem 0rem", sm: "4rem 0rem", md: "5rem 0rem" },
          }}
        >
          <Button
            sx={{
              fontFamily: "Luckiest Guy",
              background: "#fff",
              border: "2px solid #000",
              boxShadow: "0px 4px 0px #000",
              padding: { xs: "1rem", sm: "1.2rem", md: "2rem" },
              borderRadius: "5rem",
              color: "#000",
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2.3rem" },
              lineHeight: "62%",
              letterSpacing: ".2em",
              ":hover": {
                background: "#fff",
                boxShadow: "0px 4px 0px #fff",
              },
            }}
          >
            JOIN FLORK COMMUNITY
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "5px 11px 8px rgba(0,0,0, .33)",
                borderRadius: "5rem",
              }}
            >
              <img width="100%" src={image5} alt="" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "5px 11px 8px rgba(0,0,0, .33)",
                borderRadius: "5rem",
              }}
            >
              <img width="100%" src={image6} alt="" />
            </Box>
          </Box>
        </Box>
      </Container>
      <img className="image7" src={image7} alt="" />
    </Box>
  );
};

export default Join;
