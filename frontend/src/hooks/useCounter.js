import { useState } from "react"

const useCounter = (initialCount , stock) => {
    const [count, setCount] = useState(initialCount)
    const handleStock = () => {
        if(count <= 0){
            return 0
        }else if(count >= stock){
            return stock
        }else return count
    }

    return{
        value:handleStock(),
        aumentar:() => setCount(prevCount => prevCount + 1),
        disminuir:() => setCount(prevCount => prevCount - 1)
    }
}

export default useCounter