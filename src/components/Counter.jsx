import { useState } from "react";

export function Counter(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    function handleIncrementCount(){
        setCount(count+1);
    }

    function handleDecrementCount(){
        setCount(count-1);
    }

    return(
        <>
            <h1>{count}</h1>
            <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <h1>{name}</h1>

            <button onClick={handleIncrementCount}>Adicionar contador</button>
            <button onClick={handleDecrementCount}>Adicionar contador</button>
        </>
    );
}