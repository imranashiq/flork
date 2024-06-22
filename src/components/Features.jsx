import { Box, Container, Divider, Grid, Typography } from "@mui/material";

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
        <Grid
          spacing={2}
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "1rem 0rem", md: "1rem 2rem" },
          }}
        >
          <Grid item xs={5} md={2}>
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
          </Grid>
          <Divider
            sx={{
              width: "2px",
              height: "1.5rem",
              background: "#fff",
              color: "#fff",
            }}
          />
          <Grid item xs={5} md={3}>
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
          </Grid>
          <Divider
            sx={{
              width: "2px",
              height: "1.5rem",
              background: "#fff",
              color: "#fff",
              display: { xs: "none", md: "block" },
            }}
          />
          <Grid item xs={5} md={3}>
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
          </Grid>
          <Divider
            sx={{
              width: "2px",
              height: "1.5rem",
              background: "#fff",
              color: "#fff",
            }}
          />
          <Grid item xs={5} md={3}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
