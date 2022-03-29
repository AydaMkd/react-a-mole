import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'
const moleContainStyle={'display': 'inline-block', 'width': '30ww'}


const MoleContainer = (score, setScore) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        setScore(score + 1)
        setTheMole(false)
    }
 
    let displayMole = theMole ? <Mole setScore={setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />
    

    return (
        <div style={moleContainStyle}>
            {displayMole}
        </div>
    )
}

export default MoleContainer