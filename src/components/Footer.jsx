import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#fff",
        padding: { xs: "3rem 0rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          className="footer_header"
          mb={2}
          sx={{ width: "100%", position: "relative", overflow: "hidden" }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: { xs: "24px" },
              fontWeight: "700",
            }}
          >
            Disclaimer
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: { xs: "16px" },
            fontWeight: "500",
          }}
        >
          Flork Coin is not associated with Brian DiAntonio or his creation,
          Florkofcows.
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: { xs: "16px" },
            fontWeight: "500",
            padding: { xs: "0rem 4rem", md: "0rem 10rem" },
          }}
        >
          {" "}
          This token merely pays homage to a meme that is widely loved and
          recognized. FLORK is a meme coin that holds no intrinsic value and
          should not be expected to provide a financial return. There is no
          formal team or development roadmap; the coin is entirely useless and
          intended for entertainme
        </Typography>
        <Box mt={4}>
          <Typography>Designed with ❤️</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
