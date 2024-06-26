import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import heroImg from "../assets/Flork.gif";
import Iconify from "./iconify/iconify";

const Hero = () => {
  return (
    <>
      <Container
        className="container"
        sx={{
          height: "100vh",
          maxHeight: { xs: "290px", sm: "440px", md: "520px" },
        }}
      >
        <Box className="main_Wrapper">
          <Box
            pt={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-between" },
            }}
          >
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Box>
                <IconButton
                  sx={{
                    border: "2px solid #000",
                    boxShadow: "0px 4px 0px #000",
                  }}
                >
                  <Iconify color="#000" icon="pajamas:twitter" />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  sx={{
                    border: "2px solid #000",
                    boxShadow: "0px 4px 0px #000",
                  }}
                >
                  <Iconify color="#000" icon="cib:telegram-plane" />
                </IconButton>
              </Box>
            </Box>
            <Button className="btn_primary">Buy Flork</Button>
          </Box>
          <Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                zIndex: 999,
                mixBlendMode: "multiply",
              }}
              className="flork_image"
            >
              <Typography className="text1">Meet</Typography>
              <img className="heroImg" src={heroImg} alt="" />
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        className="slider"
        style={{ "--width": "100px", "--height": "80px", "--quantity": 15 }}
      >
        <Box className="list">
          <Typography className="item" style={{ "--position": 1 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 2 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 3 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 4 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 5 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 6 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 7 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 8 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 9 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 10 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 11 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 12 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 13 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 14 }}>
            / FLORK
          </Typography>
          <Typography className="item" style={{ "--position": 15 }}>
            / FLORK
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
