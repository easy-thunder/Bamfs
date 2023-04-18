import { useEffect, useState } from "react"



function Bullet({characterX, characterY, mouseX, mouseY}){
    const [bulletX, setBulletX]=useState(characterX)
    const [bulletY, setBulletY]=useState(characterY)
    const [trajectory, setTrajectory]=useState()
    const [trajectoryEnd, setTrajectoryEnd]=useState()
    const [flip, setFlip]=useState(false)
    useEffect(()=>{
        const yDif=mouseY-characterY
        const xDif=mouseX-characterX
            const interval=setInterval(function(){
                setBulletY(()=>bulletY+yDif/20)
                setBulletX(()=>bulletX+xDif/20)
            },.1)
            return ()=>{clearInterval(interval)}
    },[])
    useEffect(()=>{
        const run= mouseX-characterX
        const rise = mouseY-characterY
        const slope = rise/run;
        if(run<=0){setFlip(()=>true)}
        setTrajectory(()=>Math.atan(slope))
    },[])

    
    return(
    <>
    <div className="trajectory"
    style={{
        top: `${characterY}px`,
        left: `${characterX}px`,
        rotate: `${flip ? trajectory-Math.PI:trajectory}rad`
    }}
    ></div>
    <div className="bullet" style={{
        top: `${bulletY}px`,
        left: `${bulletX}px`
    }}>
    </div>
        </>
    )
}
export default Bullet