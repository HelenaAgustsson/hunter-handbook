import Creature from "./Creature"

const Creatures =({creatures, onDelete})=>{

    return (
        <>
        {creatures.map(creature=>(
            <Creature key={creature.id} creature={creature} onDelete={onDelete} />
        ))}
        </>
    )
}

export default Creatures