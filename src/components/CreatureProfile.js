import {useEffect, useState} from 'react';
import {FaTimes} from 'react-icons/fa'
import monster from './images/monster.jpg'
import demon from './images/demon.jpg'
import demigod from './images/demigod.jpg'
import spirit from './images/spirit.jpg'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const CreatureProfile =({onDelete})=>{
    const [creature, setCreature] = useState({})
    const location = useLocation()
    
    useEffect(()=>{
        const getItem = async() => {
            let ID = location.pathname.match(/\d+/)[0]
            const itemFromServer = await fetchItem(ID)
            setCreature(itemFromServer)
        }
    
        getItem()
      },[])

      const fetchItem = async (id) => {
        
        const res = await fetch(`http://localhost:5000/creatures/${id}`)
        const data = await res.json()
        console.log(data)
        return data;
      }

    if (creature==null) return '<div>Loading...</div>';

    return (
        <div className={`monster`} >
            <div className='cross'><FaTimes onClick={()=> onDelete(creature.id)} style={{color: 'red', cursor:'pointer'}}  /></div>
            <h3>{creature.name}</h3>
            <div className='content'>
                <div className='monster-img'>
                    <CreatureImg type={creature.type} />
                </div>
                <div className='monster-copy'>   
                    <div><span>Category: </span> {creature.type}</div>
                    <div>Weaknesses: <Weaknesses weaknesses={creature.weaknesses} /></div>
                </div>
            </div>

        </div>
    )
}

const CreatureImg=(type)=>{
    switch (type.type){
        case 'monster': return  <img src={monster}  />
        case 'demon': return  <img src={demon}  />
        case 'deity': return  <img src={demigod}  />
        case 'spirit': return  <img src={spirit}  />
    }
}


const Weaknesses=({weaknesses})=>{
    if(weaknesses) {
        if (weaknesses.length==0) return (<span>No known weaknesses!</span>)
        return (
            <ul>
                {weaknesses.map((w, index)=>(
                    <li key={index}>{w}</li>
                ))}
            </ul>
        )  
    }
   
}

export default CreatureProfile