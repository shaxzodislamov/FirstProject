import {useState} from "react";

const Count = ()=>{

    const [counts,setcounts] = useState(0)

    const plus = ()=>{
        setcounts(counts =>counts+1)
    }
    const minus = ()=>{
        setcounts(counts =>counts-1)
    }
    return(
        <>
            <h1> <button onClick={plus}> plus </button> {counts} <button onClick={minus}> minus </button></h1>
            <hr/>

        </>


    )
}

export default Count