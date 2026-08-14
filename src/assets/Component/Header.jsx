import logo from "../picture/logo.png";
import { AppBar, styled, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { routhpath } from "../Routes/route";

const StyleAppBar = styled(AppBar)({
  background: "#2d2d2d",
  height: 64,
  "& > div > *": {
    textDecoration: "none",
    color: "inherit",
    fontSize: 14,
    marginRight: "20px",
  },
});
function Header() {
  return (
    <StyleAppBar>
      <Toolbar>
        <Link to={routhpath.home}>
          <img src={logo} alt="logo" style={{ width: 95, marginBottom: 6 }} />
        </Link>
        <Link to={routhpath.create}> post a job </Link>
        <Link to={routhpath.post}> Find Jobs</Link>
      </Toolbar>
    </StyleAppBar>
  );
}
export default Header;
