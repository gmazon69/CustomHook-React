import { useState } from "react"


export const useCounter = ( inicial = 10 ) => {
    const [counter, setCounter] = useState(inicial); 
   
    const agrega = () => {
        setCounter( counter + 1);
    }

    const resta = () => {
        setCounter( counter - 1);
    }

    const reset = () => {
        setCounter( inicial )
    }

    return {
        counter,
        agrega,
        resta,
        reset,
    }
}