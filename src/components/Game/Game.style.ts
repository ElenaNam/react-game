import CSS from "csstype";

export const root: CSS.Properties = {
  /*   display: "flex",
  height: "inherit",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column", */
  //border: "1px solid yellow",
  marginTop: "80px",
};

export const field: CSS.Properties = {
  position: "relative",
  margin: "0 auto",
  display: "flex",
  maxWidth: "480px",
  maxHeight: "480px",
  /*   minHeight: "300px",
  minWidth: "300px", */
  width: "100%",
  height: "100%",
  flexWrap: "wrap",
};

export const cell: CSS.Properties = {
  margin: "0 auto",
  display: "flex",
  width: "100%",
  height: "100%",
  minHeight: "100px",
  minWidth: "100px",
  maxWidth: "160px",
  maxHeight: "160px",
  border: "1px solid black",
  textAlign: "center",
  verticalAlign: "middle",
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",

  /*   &:hover: any {
    border: '1ps solid black'
  } */
};

export const text: CSS.Properties = {
  fontSize: "100px",
  color: "wheat",
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
};
export const message: CSS.Properties = {
  position: "absolute",
  left: 0,
  right: 0,
  maxWidth: "480px",
  maxHeight: "480px",
  /*   minHeight: "300px",
  minWidth: "300px", */
  width: "100%",
  height: "100%",
  //top: "65px",
  fontSize: "60px",
  color: "white",
  padding: "5px",
  display: "flex",
  margin: "0 auto",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 170, 238, 0.9)",
  zIndex: 20,
};
