import { useState, useRef } from "react"


function Character({characterX, characterY}){

    const characterRef=useRef()


    


    return <div ref={characterRef}  className="character" style={{
        position: "relative",
        top: `${characterY}px`,
        left: `${characterX}px`
    }}>
       

    </div>
}


export default Character