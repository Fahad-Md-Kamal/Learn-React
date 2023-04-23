import { ReactNode } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="layout">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link to="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about">About</Link>
          </Button>
          <Button color="inherit">
            <Link to="/signup">Signup</Link>
          </Button>
          <Button color="inherit">
            <Link to="/login">Login</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
