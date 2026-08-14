import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import himg from "../picture/image1.jpeg";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { routhpath } from "../Routes/route";

const Component = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "50px",
  height: "100vh",
  margin: "0 150px",
  "& > Box": {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& > p": {
      fontSize: 56,
      lineHeight: 1.25,
      letterSpacing: -1,
    },
    "& > Button": {
      width: 220,
      height: 60,
      background: "rgb(37,87,167)",
      textTransform: "none",
      marginTop: 48,
    },
  },
});
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Component>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Let's make your next great <br /> hire. Fast.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate(routhpath.create)}
          >
            Post a job
          </Button>
        </Box>
        <Box>
          <img
            src={himg}
            alt="home"
            style={{ width: "100%", maxWidth: "600px" }}
          />
        </Box>
      </Component>
    </div>
  );
}
export default Home;
