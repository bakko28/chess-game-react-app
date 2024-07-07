import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/boardComponent';
import { Board } from './models/board';

function App() {
    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart();
    }, []); // Добавлен пустой массив зависимостей

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

    return (
        <div className='app'>
            <BoardComponent 
                board={board}
                setBoard={setBoard}
            />
        </div>
    );
}

export default App;
