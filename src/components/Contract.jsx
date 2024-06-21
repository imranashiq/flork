import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useRef } from "react";

const Contract = () => {
  const textFieldRef = useRef(null);
  const defaultText = "0x98d9278a04y01c6a59a9d7c1CD79f7788C6ADe08";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(defaultText);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <Container sx={{ margin: "3rem auto" }} className="appear">
      <Typography mb={2} sx={{ textAlign: "center" }} className="heading">
        CONTRACT
      </Typography>
      <TextField
        inputRef={textFieldRef}
        defaultValue={defaultText}
        fullWidth
        readOnly
        sx={{
          border: "2px solid #000",
          boxShadow: "0px 4px 0px #000",
          borderRadius: "3rem",
          "& .MuiOutlinedInput-root": {
            fontSize: { xs: "1rem", md: "2rem" },
            fontFamily: "Red Hat Display",
            fontWeight: "700",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiOutlinedInput-input": {
            padding: { xs: "1rem", md: "1.2rem 2rem" },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{
                  background: "#fff",
                  color: "#000",
                  fontFamily: "Red Hat Display",
                  fontSize: { xs: "1rem", sm: "1.5rem", md: "2.3rem" },
                  border: "2px solid #000",
                  boxShadow: "0px 4px 0px #000",
                  borderRadius: "4rem",
                  padding: {
                    xs: "0rem .5rem",
                    sm: "0rem 1rem",
                    md: "0rem 2rem",
                  },
                  ":hover": {
                    boxShadow: "0px 4px 0px #fff",
                  },
                }}
                onClick={() => handleCopy()}
              >
                Copy
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};

export default Contract;
