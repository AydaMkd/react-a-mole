import { useEffect } from "react"
import MoleHill from '../molehill.png'
//const moleStyle={'width': '30vw'}

const EmptySlot = ({toggle}) => {

    useEffect(() => {
        let Seconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            toggle(true)
        }, Seconds)
        return () => clearTimeout(timer)
    })
    
    return (
        
        <div>
            <img src={MoleHill} alt ="" />
        </div>
    )
}

export default EmptySlot