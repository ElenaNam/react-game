import React from "react";
import { root, cell, text } from "./Game.style";
import lineWin from "../../assets/data/lineWin";

interface GameProps {
  name: "123";
}

interface GameState {
  cells: any[];
  count: number;
  isEnd: boolean;
  winMessage: string;
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
      winMessage: "",
    };
    this.myRef = React.createRef();
    this.lineWin = lineWin;
  }

  isEndGame = (): void => {
    const innerCell = !(this.state.count % 2) ? "X" : "O";
    let win = "";

    for (let i = 0; i < this.state.cells.length; i++) {
      const line = this.lineWin[i];
      if (
        this.state.cells[line[0]] === innerCell &&
        this.state.cells[line[1]] === innerCell &&
        this.state.cells[line[2]] === innerCell
      ) {
        win = `${innerCell} win!`;
        this.setState({ isEnd: true, winMessage: win });
      }
    }
    return;
  };

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const target = +e.currentTarget.id - 1;
    const currentCells = this.state.cells;
    if (currentCells[target] === null) {
      currentCells[target] = !(this.state.count % 2) ? "X" : "O";
      this.setState({ count: this.state.count + 1 });
      this.setState({ cells: currentCells });
    }
    this.isEndGame();
  };

  render() {
    const cells = this.state.cells;
    const isEnd = this.state.isEnd;
    const winMessage = this.state.winMessage;
    return (
      <div style={root}>
        {isEnd ? <div>{winMessage}</div> : false}
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
    );
  }
}

export default Game;
