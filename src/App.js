import React from "react";
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

function DeclareWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = DeclareWinner(squares);
  let status;
  if (winner) {
    status = "Voittaja: " + winner;
  } else {
    status = "Seuraava pelaaja: " + (xIsNext ? "X" : "O");
  }

  function Click(square) {
    if (squares[square] || DeclareWinner(squares)) return false;
    const NewSquares = squares.slice();
    NewSquares[square] = (xIsNext) ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(NewSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => Click(0)}/>
        <Square value={squares[1]} onSquareClick={() => Click(1)}/>
        <Square value={squares[2]} onSquareClick={() => Click(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => Click(3)}/>
        <Square value={squares[4]} onSquareClick={() => Click(4)}/>
        <Square value={squares[5]} onSquareClick={() => Click(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => Click(6)}/>
        <Square value={squares[7]} onSquareClick={() => Click(7)}/>
        <Square value={squares[8]} onSquareClick={() => Click(8)}/>
      </div>
    </>
  )
}
