import { useEffect, useState } from "react"



function Bullet({characterX, characterY, mouseX, mouseY}){
    const [bulletX, setBulletX]=useState(characterX)
    const [bulletY, setBulletY]=useState(characterY)
    // const [trajectory, setTrajectory]=useState()
    const [trajectoryEndX, setTrajectoryEndX]=useState(mouseX-characterX)
    const [trajectoryEndY, setTrajectoryEndY]=useState(mouseY-characterY)
    // const [flip, setFlip]=useState(false)

    // useEffect(()=>{
    //     const run= mouseX-characterX
    //     const rise = mouseY-characterY
    //     // const slope = rise/run;
    //     if(run<=0){setFlip(()=>true)}

    //     // setTrajectory(()=>Math.atan(slope))
    //     setTrajectoryEndX(()=> trajectoryEndX*run)        
    //     setTrajectoryEndY(()=>trajectoryEndX*rise)    
    // },[])
   



    useEffect(()=>{
        const coefX = trajectoryEndX
        const coefY = trajectoryEndY
        console.log(coefX)
        let yDif = trajectoryEndY/20
        let xDif = trajectoryEndX/20
        if(mouseX<characterX+40 && mouseX>characterX-40 && mouseY<characterY+40 && mouseY>characterY-40){yDif=trajectoryEndY; xDif=trajectoryEndX}
            const interval=setInterval(function(){
                setBulletY(()=>bulletY+yDif)
                setBulletX(()=>bulletX+xDif)
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