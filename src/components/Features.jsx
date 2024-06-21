import { Box, Container, Divider, Typography } from "@mui/material";

const Features = () => {
  return (
    <Box
      sx={{
        background: "#000",
        display: "flex",
        justifyContent: "center",
        color: "#fff",
        alignItems: "center",
      }}
    >
      <Container className="appear">
        <Box
          sx={{
            display: "flex",
            gap: "3rem",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem 2rem",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Luckiest Guy",
                fontWeight: "400",
                fontSize: { xs: "1rem", md: "2.4rem" },
                lineHeight: "160%",
                textAlign: "center",
                color: "#fff",
              }}
            >
              Tax <br /> 0%
            </Typography>
          </Box>
          <Divider
            sx={{
              width: "2px",
              height: "1.5rem",
              background: "#fff",
              color: "#fff",
            }}
          />
          <Box>
            <Typography
              sx={{
                fontFamily: "Luckiest Guy",
                fontWeight: "400",
                fontSize: { xs: "1rem", md: "2.4rem" },
                lineHeight: "160%",
                textAlign: "center",
                color: "#fff",
              }}
            >
              CA <br /> renounced
            </Typography>
          </Box>
          <Divider
            sx={{
              width: "2px",
              height: "1.5rem",
              background: "#fff",
              color: "#fff",
            }}
          />
          <Box>
            <Typography
              sx={{
                fontFamily: "Luckiest Guy",
                fontWeight: "400",
                fontSize: { xs: "1rem", md: "2.4rem" },
                lineHeight: "160%",
                textAlign: "center",
                color: "#fff",
              }}
            >
              {" "}
              Liquidity <br /> Burned
            </Typography>
          </Box>
          <Divider
            sx={{
              width: "2px",
              height: "1.5rem",
              background: "#fff",
              color: "#fff",
            }}
          />
          <Box>
            <Typography
              sx={{
                fontFamily: "Luckiest Guy",
                fontWeight: "400",
                fontSize: { xs: "1rem", md: "2.4rem" },
                lineHeight: "160%",
                textAlign: "center",
                color: "#fff",
              }}
            >
              Total supply <br /> 1B
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
