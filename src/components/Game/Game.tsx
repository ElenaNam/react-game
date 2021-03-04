import React from "react";
import "./Game.css";
import lineWin from "../../assets/data/lineWin";
import { Box, Container, Paper, Typography } from "@material-ui/core";

interface GameProps {
  name: "123";
  newGame: boolean;
}
interface GameState {
  cells: (string | number | null)[];
  count: number;
  isEnd: boolean;
  resultMessage: string;
  anim: boolean;
  next: string;
}

class Game extends React.Component<GameProps, GameState> {
  myRef: React.RefObject<unknown>;
  lineWin: number[][];

  constructor(props: GameProps) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      count: 0,
      isEnd: false,
      resultMessage: "",
      anim: false,
      next: "X",
    };
    this.myRef = React.createRef();
    this.lineWin = lineWin;
  }

  isEndGame = (): void => {
    const innerCell = !(this.state.count % 2) ? "X" : "O";
    let message = "";
    //console.log("isEndGame");
    for (let i = 0; i < this.lineWin.length; i++) {
      const line = this.lineWin[i];
      if (
        this.state.cells[line[0]] === innerCell &&
        this.state.cells[line[1]] === innerCell &&
        this.state.cells[line[2]] === innerCell
      ) {
        message = `${innerCell} win!`;
        console.log("победа");
        this.setState({ isEnd: true, resultMessage: message });
      }
    }

    if (this.state.count === 8) {
      console.log("ничья");
      message = "Draw!";
      this.setState({ isEnd: true, resultMessage: message });
    }

    return;
  };

  resetGame = (): void => {
    if (!this.state.isEnd) return;

    setTimeout(() => {
      this.setState({
        cells: Array(9).fill(null),
        count: 0,
        isEnd: false,
        resultMessage: "",
        anim: false,
        next: "X",
      });
    }, 2000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    console.log("клик");
    if (this.state.isEnd) return;
    const target = +e.currentTarget.id - 1;
    const currentCells = this.state.cells;
    if (currentCells[target] === null) {
      currentCells[target] = !(this.state.count % 2) ? "X" : "O";
      this.setState({ count: this.state.count + 1 });
      this.setState({ cells: currentCells });

      let value = "O";
      if (this.state.next === "X") value = "O";
      if (this.state.next === "O") value = "X";

      this.setState({ next: value });
      console.log("следующий ход делает " + this.state.next);
    } else {
      e.currentTarget.classList.add("busy");
      this.setState({ anim: true });
    }

    //минимальное количество ходов для выигрыша - 5
    if (this.state.count >= 4) {
      this.isEndGame();
    }
  };

  componentDidMount() {
    localStorage.getItem("stateLocal")
      ? this.setState(JSON.parse(localStorage.stateLocal))
      : false;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log("следующий ход делает " + this.state.next);

    if (this.props.newGame) {
      this.setState({
        cells: Array(9).fill(null),
        count: 0,
        isEnd: false,
        resultMessage: "",
        anim: false,
        next: "X",
      });
    }

    this.resetGame();

    const stateLocal = localStorage.setItem(
      "stateLocal",
      JSON.stringify(this.state)
    );
  }
  //componentWillUnmount() {}

  render() {
    const cells = this.state.cells;
    const isEnd = this.state.isEnd;
    const resultMessage = this.state.resultMessage;
    const anim = this.state.anim;
    const next = this.state.next;

    return (
      <Container maxWidth="md" className="root">
        <Paper elevation={2} />
        {isEnd ? <div className="message">{resultMessage}</div> : false}
        <div className="field">
          {cells.map((item, i) => {
            return (
              <div
                onClick={this.clickHandler}
                key={i + 1}
                id={(i + 1).toString()}
                ref={() => this.myRef}
                onAnimationEnd={() => this.setState({ anim: false })}
                className={anim ? "cell busy" : "cell"}
              >
                <span className="text">{this.state.cells[i]}</span>
              </div>
            );
          })}
        </div>
        {!isEnd ? (
          <Box
            mt={10}
            style={
              {
                /* position: "absolute", bottom: 100  */
              }
            }
          >
            <Typography variant="h3">next move {next}</Typography>
          </Box>
        ) : (
          false
        )}
      </Container>
    );
  }
}

export default Game;
