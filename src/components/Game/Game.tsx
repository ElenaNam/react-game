import React from "react";
import { root, field, cell, text, message } from "./Game.style";
import lineWin from "../../assets/data/lineWin";
import { Container, Paper } from "@material-ui/core";

interface GameProps {
  name: "123";
}

interface GameState {
  cells: (string | number | null)[];
  count: number;
  isEnd: boolean;
  resultMessage: string;
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
    };
    this.myRef = React.createRef();
    this.lineWin = lineWin;
  }

  isEndGame = (): void => {
    const innerCell = !(this.state.count % 2) ? "X" : "O";
    let message = "";
    console.log("isEndGame");
    for (let i = 0; i < this.lineWin.length; i++) {
      const line = this.lineWin[i];
      if (
        this.state.cells[line[0]] === innerCell &&
        this.state.cells[line[1]] === innerCell &&
        this.state.cells[line[2]] === innerCell
      ) {
        console.log(line);
        message = `${innerCell} win!`;
        this.setState({ isEnd: true, resultMessage: message });
      } else {
        if (this.state.count >= 8) {
          console.log(this.state.count);
          message = "Draw!";
          this.setState({ isEnd: true, resultMessage: message });
        }
      }
    }
    return;
  };

  resetGame = (): void => {
    //console.log("reset");
    //console.log(this.state.isEnd);
    if (!this.state.isEnd) return;
    setTimeout(() => {
      //console.log("игра окончена");
      this.setState({
        cells: Array(9).fill(null),
        count: 0,
        isEnd: false,
        resultMessage: "",
      });
      //console.log(this.state);
    }, 1000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (this.state.isEnd) return;
    const target = +e.currentTarget.id - 1;
    const currentCells = this.state.cells;
    if (currentCells[target] === null) {
      currentCells[target] = !(this.state.count % 2) ? "X" : "O";
      this.setState({ count: this.state.count + 1 });
      this.setState({ cells: currentCells });
    }
    console.log(currentCells);
    console.log(this.state.count);

    //минимальное количество ходов для выигрыша - 5
    if (this.state.count >= 4) {
      this.isEndGame();
    }

    //console.log(this.state.isEnd);
  };

  componentDidMount() {
    localStorage.getItem("stateLocal")
      ? this.setState(JSON.parse(localStorage.stateLocal))
      : false;
  }
  componentDidUpdate() {
    //console.log("componentDidUpdate");

    this.resetGame();

    const stateLocal = localStorage.setItem(
      "stateLocal",
      JSON.stringify(this.state)
    );
    //console.log("componentDidUpDate");
    //console.log(this.state);
  }
  //componentWillUnmount() {}

  render() {
    const cells = this.state.cells;
    const isEnd = this.state.isEnd;
    const resultMessage = this.state.resultMessage;

    return (
      <Container maxWidth="md" style={root}>
        <Paper elevation={2} />
        {isEnd ? <div style={message}>{resultMessage}</div> : false}
        <div style={field}>
          {cells.map((item, i) => {
            return (
              <div
                style={cell}
                onClick={this.clickHandler}
                key={i + 1}
                id={(i + 1).toString()}

                //ref={() => this.myRef}
              >
                <span style={text}>{this.state.cells[i]}</span>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default Game;
