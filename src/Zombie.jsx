import { useEffect, useState } from "react"
import Bullet from "./Bullet"

function Zombie({characterX, characterY, consoleBulletX, consoleBulletY, deadZombies, id}){
    const zombXInit = Math.random()*600;
    const [zombX, setZombX]=useState(zombXInit)
    const [zombY, setZombY]=useState(-35)
    // const [dead, setDead]=useState(false)
    // if(mouseX<characterX+40 && mouseX>characterX-40 && mouseY<characterY+40 && mouseY>characterY-40)


    if(zombX<consoleBulletX+600 && zombX>consoleBulletX-5 && zombY<consoleBulletY+5 && zombY>consoleBulletY-5){
        // setDead(()=>true)
        deadZombies
    }
    useEffect(()=>{
        const zombMove= setInterval(function(){
        if(characterX>zombX){
            setZombX(zombX+5)
        }
        if(characterX<zombX){
            setZombX(zombX-5)
        }
        if(characterY>zombY){
            setZombY(zombY+5)
        }
        if(characterY-20<zombY){
            setZombY(zombY-5)
        }
        // console.log(consoleBulletX, zombX)

    },1000)
    
        return ()=>{clearInterval(zombMove)}
        
    },[zombX,zombY])
    
    return <div className={`zombie`} style={{
        marginTop: `${zombY}px`,
        marginLeft: `${zombX}px`,
        // display: `${dead? "none":null}`
    }}>
    </div>
}


export default Zombie