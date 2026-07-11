// import { useEffect } from 'react'
import Timmer from './useEffect/Timmer'
import Logger from './useEffect/Logger'
import DataFetcher from './useEffect/DataFetcher'
function useEffect() {
    // const [count, setCount] = useState(0)
    // const [total, setTotal] = useState(20)
    // const handleclick = () => {
    //     setCount(count + 1)
    // }
    // const handleTotal = () => {
    //     setTotal(total + 1)
    // }
    // veriation 1 -> om this it will run for every count
    /*
    useEffect(() => {
        alert(count)
    },[])
    */
    // veriation 2 -> in this it will run only for first rendering
    /*
    useEffect(() => {
        alert(count)
    },[])
    */

    // veriation 3 -> it will run only when count will change( it runs after count update and before rendering)
    /*
    useEffect(() => {
        alert(count)
    },[count])
    */

    // veriation 4 -> multipal dependencies
    /*
    useEffect(() => {
        alert(count)
    }, [count,total])
    */

    // veriation 5 -> add a cleanup function\
    /*
    useEffect(() => {
        alert('count is updated')
        return (() => {
            alert('count is unmounted from ui')
        })
    }, [count])
    */



    return (
        <>
            <Logger/>
            <Timmer/>
            <DataFetcher/>
            {/* <p>count is : {count}</p>
            <button onClick={handleclick}>Click me </button>
            <p>total is : {total}</p>
            <button onClick={handleTotal}>Click me </button> */}
        </>
    )
}

export default useEffect
