import {FaTimes} from 'react-icons/fa'

const Creature =({creature, onDelete})=>{
    return (
        <div className={`monster`} >
            <h3>{creature.name} 
                <FaTimes 
                    onClick={()=> onDelete(creature.id)} 
                    style={{color: 'red', cursor:'pointer'}} 
                />
            </h3>
            <div><span>Type: </span> {creature.type}</div>
            <div><span>Weaknesses: </span> {creature.weakness}</div>
        </div>
    )
}

export default Creature