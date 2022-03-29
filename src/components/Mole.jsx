
   
import { useEffect } from 'react'
import moleImg from '../mole.png'
let moleStyle={'width': '30vw'}


const Mole = (handleClick,toggle) => {

    useEffect(() => {
        let Seconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            
            toggle(false)
        }, Seconds)

        return () => clearTimeout(timer)
    })
  
    return (
        <div>
            <img style={moleStyle} src={moleImg} alt ="image" onClick={handleClick} />
        </div>
    )
}

export default Mole
