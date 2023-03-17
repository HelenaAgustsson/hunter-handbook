import {useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

const AddCreature =({onAdd})=>{
    const [name, setName] = useState('')
    const [weaknesses, setWeaknesses] = useState([])
    const [type, setType]=useState('');
    const navigate = useNavigate();

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!name){
            alert('Please add a creature')
            return
        }
        
        onAdd({name, weaknesses, type})
        setName('');

        setType('');
        navigate('/creatures')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name:</label>
                <input type='name' placeholder='Add Creature' value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            
            <div className='form-control form-control-check'>
            <div>Select weaknesses:</div>
                <div className='checkbox-option'>
                    <input type='checkbox' name='weakness' id='silver' value='silver' onChange={(e)=> setWeaknesses([...weaknesses, e.currentTarget.value])} /> 
                    <label htmlFor='silver'>Silver</label>
                </div>
                <div className='checkbox-option'>
                    <input type='checkbox' name='weakness' id='salt' value='salt' onChange={(e)=> setWeaknesses([...weaknesses, e.currentTarget.value])} /> 
                    <label htmlFor='salt'>Salt</label>
                </div>
                <div className='checkbox-option'>
                    <input type='checkbox' name='weakness' id='goopher-dust' value='Goopher Dust' onChange={(e)=> setWeaknesses([...weaknesses, e.currentTarget.value])} /> 
                    <label htmlFor='goopher-dust'>Goopher Dust</label>
                </div>
                <div className='checkbox-option'>
                    <input type='checkbox' name='weakness' id='iron' value='iron' onChange={(e)=> setWeaknesses([...weaknesses, e.currentTarget.value])} /> 
                    <label htmlFor='iron'>Iron</label>
                </div>
                <div className='checkbox-option'>
                    <input type='checkbox' name='weakness' id='demon-trap' value='Demon Trap' onChange={(e)=> setWeaknesses([...weaknesses, e.currentTarget.value])} /> 
                    <label htmlFor='demon-trap'>Demon Trap</label>
                </div>
                <div className='checkbox-option'>
                    <input type='checkbox' name='weakness' id='angel-blade' value='Angel Blade' onChange={(e)=> setWeaknesses([...weaknesses, e.currentTarget.value])} /> 
                    <label htmlFor='angel-blade'>Angel Blade</label>
                </div>
                
            </div>
            <div className="form-control">
                <label>Select category:</label>
                <select name="type" required onChange={(e)=> setType(e.target.value)} >
                    <option value="" selected disabled hidden>Choose type</option>
                    <option value="spirit">Spirit</option>
                    <option value="demon">Demon</option>
                    <option value="monster">Monster</option>
                    <option value="deity">Deity</option>
                </select>
            </div>
            <input type='submit' value='Save creature' className="btn btn-block"  />
        </form>
    )
}



export default AddCreature