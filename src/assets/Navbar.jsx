import React,{useEffect} from 'react'

const Navbar=({color})=>{
    // Case 1: Run on every Render 
     useEffect(() =>{
        alert("Heyy I will run on every render")
    })

    // Case 2: Run only on first render
    useEffect(()=>{
        alert("Hello")
       },[])

    // Case 3: Run only when certain value changes
    useEffect(()=>{
        alert("Color is changed")
    },[color])

    return (
        <>
       <h1>My color is{color}</h1>
        </>
    )
}
export default Navbar