import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Field from "./Field/Field";
import Game from "./Game/Game";
import Settings from "./Settings/Settings";
import { Typography } from "@material-ui/core";
import Btn from "./Btn/Btn";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    //width: "90%",
    //height: "95vh",
    margin: "0 auto",
    // padding: "1% 10%",
    textAlign: "center",
    //border: "1px solid",
  },
  top: {
    margin: "0 auto",
    paddingTop: 30,
    position: "relative",
    display: "flex",
    width: "60%",
    justifyContent: "center",
    /* border: "1px solid red", */
    //margin: "0 auto",
    //padding: "1% 10%",
    //textAlign: "center",
  },
}));

export default function App(): JSX.Element {
  const classes = useStyles();
  const [isNewGame, setNewGame] = useState(false);

  const handleClick = useCallback(() => {
    setNewGame(true);
  }, []);

  useEffect(() => {
    setNewGame(false);
  }, [handleClick, isNewGame]);

  return (
    <div className={classes.root}>
      {/* <Typography variant="h1">tic-tac-toe</Typography> */}
      <Header />
      {/* <Field /> */}
      <div className={classes.top}>
        <Btn handleClick={handleClick} name="New Game" />
        {/* <Btn handleClick={handleClick} name="Statistic" /> */}
        {/* <Settings /> */}
      </div>

      <Game name="123" newGame={isNewGame} />
      <Footer />
    </div>
  );
}
