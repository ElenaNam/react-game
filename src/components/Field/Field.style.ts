import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    display: "flex",
    maxWidth: 800,
    maxHeight: 900,
    /*     minHeight: 200,
    minWidth: 200, */
    width: "100%",
    height: "100%",
    //alignItems: "center",
    margin: "15px auto 0",
    backgroundColor: "coral",
    border: "1px solid",
  },
}));
