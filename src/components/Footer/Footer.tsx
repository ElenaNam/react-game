import {
  AppBar,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./Footer.style";

import logo from "/src/assets/images/logo_rs.png";

export default function Footer(): JSX.Element {
  const classes = useStyles();
  return (
    <AppBar position="absolute" color="primary" className={classes.appBar}>
      <Container maxWidth="md">
        <Toolbar>
          <List component="nav" className={classes.nav}>
            <ListItem style={{ border: "1ps solid green", width: "auto" }}>
              <Box>
                <a
                  href="https://rs.school/js/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={logo} alt="logo_rsschool" width="100px" />
                </a>
              </Box>
            </ListItem>

            <ListItem style={{ color: "black", width: "auto" }}>
              <ListItemText primary="2021" />
            </ListItem>

            <ListItem style={{ color: "black", width: "auto" }}>
              <a
                href="https://github.com/ElenaNam"
                target="_blank"
                rel="noreferrer"
                style={{ color: "black", textDecoration: "none" }}
              >
                <ListItemText primary="Kirillova Elena" />
              </a>
            </ListItem>
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
