import React, {useState} from 'react';
import Square from './square';
function Gameui() {
    const [state, setstate] = useState(Array(9).fill(null));
    const [Xturn, setXturn] = useState(true);
    
    const handleClick = (index)=>{
        const copystate = [...state];
        if (copystate[index]==null) {
            
            copystate[index] = Xturn?'X':'O';
            setstate(copystate);
            setXturn(!Xturn);
        }
    };

    const winnerlogic = ()=>{
        console.log('yes inside')
        const checkwinner = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let logic of checkwinner) {
            const [a, b, c] = logic;
            if (state[a]!==null && state[a]===state[b] && state[a]===state[c]) {
                return state[a];
            };
        };
        return false;
    };

    const Initila = ()=>{
        setstate(Array(9).fill(null));
    }
    return (
        <div className='container'>
            {winnerlogic()?<h1>{winnerlogic()} won <button onClick={Initila}>Play again</button></h1>:(<>
                <div className='tictac-row'>
                    <Square onClick={()=>handleClick(0)} value={state[0]}/>
                    <Square onClick={()=>handleClick(1)} value={state[1]}/>
                    <Square onClick={()=>handleClick(2)} value={state[2]}/>
                </div>
                <div className='tictac-row'>
                    <Square onClick={()=>handleClick(3)} value={state[3]}/>
                    <Square onClick={()=>handleClick(4)} value={state[4]}/>
                    <Square onClick={()=>handleClick(5)} value={state[5]}/>
                </div>
                <div className='tictac-row'>
                    <Square onClick={()=>handleClick(6)} value={state[6]}/>
                    <Square onClick={()=>handleClick(7)} value={state[7]}/>
                    <Square onClick={()=>handleClick(8)} value={state[8]}/>
                </div>
            </>)}
        </div>
    );
};

export default Gameui;