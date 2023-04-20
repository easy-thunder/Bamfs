import { useEffect, useState } from "react"



function Bullet({characterX, setConsoleBulletX, setConsoleBulletY, characterY, mouseX, mouseY}){
    const [bulletX, setBulletX]=useState(characterX)
    const [bulletY, setBulletY]=useState(characterY)
    // const [trajectory, setTrajectory]=useState()
    const [trajectoryEndX, setTrajectoryEndX]=useState(mouseX-characterX)
    const [trajectoryEndY, setTrajectoryEndY]=useState(mouseY-characterY)

   



    useEffect(()=>{
        let yDif = trajectoryEndY/20
        let xDif = trajectoryEndX/20
        if(mouseX<characterX+40 && mouseX>characterX-40 && mouseY<characterY+40 && mouseY>characterY-40){yDif=trajectoryEndY; xDif=trajectoryEndX}
            const interval=setInterval(function(){
                setBulletY(()=>bulletY+yDif)
                setBulletX(()=>bulletX+xDif)
                setConsoleBulletX(()=>bulletX)
                setConsoleBulletY(()=>bulletY)
            },.1)
            return ()=>{clearInterval(interval)}
        
    },[bulletX, bulletY])

    
    return(
    <>
    {/* <div className="trajectory"
    style={{
        top: `${characterY}px`,
        left: `${characterX}px`,
        rotate: `${flip ? trajectory-Math.PI:trajectory}rad`
    }}
    ></div> */}
    <div className="bullet" style={{
        top: `${bulletY}px`,
        left: `${bulletX}px`
    }}>
    </div>
        </>
    )
}
export default Bullet