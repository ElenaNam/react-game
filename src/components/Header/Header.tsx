import React from "react";
import { useStyles } from "./Header.style";
import { Typography } from "@material-ui/core";

const Header = (): JSX.Element => {
  return (
    <>
      <Typography variant="h1">tic-tac-toe</Typography>
    </>
  );
};
export default Header;
