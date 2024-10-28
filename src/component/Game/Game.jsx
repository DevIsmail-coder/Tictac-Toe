import React, { useEffect } from 'react'
import { useState } from 'react'
import './Game.css'
import Square from './Square/Square' 
import { Patterns } from './Patterns'

const Game = () => {
    const [board,setBoard] = useState(["","","","","","","","",""])
    const [player,setplayer] = useState("x")
    const [result,setResult] = useState({winner: "none", state: "none"});

    useEffect(() => {
        checkWin();

        if (player == "x") {
            setplayer("o");
        }else {
            setplayer("x")
        }
    }, [board]);

    useEffect(() => {
        if (result.state == "none") {
            alert(`Game Finished! Winning player:  [result.winner]`);
        }  
    }, [result]);
    const chooseSquare = (square) => {
        setBoard(
            board.map((val,idx) => {
                    if (idx == square && val == "") {
                        return player;
                    }
                    return val;
                })
            );
    }

    const checkWin = () => {
        Patterns.forEach((currPatterns) => {
            const firstPlayer = board[currPatterns[0]];
            if (firstPlayer == "") return
            let foundWinningPattern = true 
            currPatterns.forEach((idx) => {
                if(board[idx] != firstPlayer) {
                    foundWinningPattern = false
                }
            });

            if (foundWinningPattern) {
                setResult({winner: player, state: "won"})
            }
        })
    }

  return (
    <div className='GameBody'>
        <div className='GameWrap'>
            <div className='GameWraprow'>
                <Square val={board[0]} chooseSquare = {() => {chooseSquare(0)}} />
                <Square val={board[1]} chooseSquare = {() => {chooseSquare(1)}} />
                <Square val={board[2]} chooseSquare = {() => {chooseSquare(2)}} />
            </div>
            <div  className='GameWraprow'>
            <Square val={board[3]} chooseSquare = {() => {chooseSquare(3)}} />
                <Square val={board[4]} chooseSquare = {() => {chooseSquare(4)}} />
                <Square val={board[5]} chooseSquare = {() => {chooseSquare(5)}} />
            </div>
            <div  className='GameWraprow'>
            <Square val={board[6]} chooseSquare = {() => {chooseSquare(6)}} />
                <Square val={board[7]} chooseSquare = {() => {chooseSquare(7)}} />
                <Square val={board[8]} chooseSquare = {() => {chooseSquare(8)}} />
            </div>
        </div>
    </div>
  )
}

export default Game