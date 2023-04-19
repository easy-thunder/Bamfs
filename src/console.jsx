import Character from "./Character"
import { useState, useEffect } from "react"
import Bullet from "./Bullet"

function Console(){
    const [characterX, setCharacterX]=useState(385)
    const [characterY, setCharacterY]=useState(476)
    const [up, setUp]=useState(false)
    const [down, setDown]=useState(false)
    const [right, setRight]=useState(false)
    const [left, setLeft]=useState(false)
    const [mouseX, setMouseX]=useState()
    const [mouseY, setMouseY]=useState()
    const [firing, setFiring]=useState(false)
    const [bullets, setBullets]=useState(0)

    function move(e){
        if(e.key === "w"){
            setUp(up=>!up)
        }
        if (e.key === "s"){
            setDown(down=>!down)
        }
        if (e.key === "a"){
            setLeft(left=>!left)
        }
        if (e.key === "d"){
            setRight(right => !right)
        }
     
    }

    useEffect(()=>{
        function update(e) {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
          }
          document.addEventListener("mousemove", update);
          return () => {
            document.removeEventListener("mousemove", update);
          };
        },[mouseX, mouseY])
    useEffect(()=>{
        if(up===true){
            setCharacterY(y=>y-10)
        }
        if(down===true){
            setCharacterY(y=>y+10)
        }
        if(left===true){
            setCharacterX(x=>x-10)
        }
        if(right===true){
            setCharacterX(x=>x+10)
        }
    },[up, down, right, left])

    function removeKeyDown(e){
        if(e.key==="w"){setUp(()=>false)}
        if(e.key==="a"){setLeft(()=>false)}
        if(e.key==="s"){setDown(()=>false)}
        if(e.key==="d"){setRight(()=>false)}
    }

    useEffect(()=>{
        if (firing) {
            const shootingInterval = setInterval(function () {
              setBullets((bullets) => (bullets += 1));
            }, 1000 );
            if (!firing) {
              return () => clearInterval(shootingInterval);
            }
            return () => clearInterval(shootingInterval);
          }
    },[firing])
    function commenceFire(){
        setFiring(()=>true)
    }
    function ceaseFire(){
        setFiring(()=>false)
    }
 
    return(<div onMouseDown={commenceFire} onMouseUp={ceaseFire} tabIndex={0} onKeyDown={move} onKeyUp={removeKeyDown}  

    className="console">

        <Character mouseX={mouseX} mouseY={mouseY} firing={firing} characterX={characterX} characterY={characterY} />
        {firing? <Bullet mouseX={mouseX} mouseY={mouseY} characterX={characterX} characterY={characterY} /> : null}
    </div>)
}

export default Console