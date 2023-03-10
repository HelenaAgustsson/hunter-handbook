import {useState} from 'react'

const AddCreature =({onAdd})=>{
    const [name, setName] = useState('')
    const [weakness, setWeakness] = useState('')
    const [type, setType]=useState('');

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!name){
            alert('Please add task')
            return
        }
            onAdd({name, weakness, type})
            setName('');
            setWeakness('');
            setType('');
        
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input type='name' placeholder='Add Creature' value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Weaknesses</label>
                <input type='text' placeholder='Add Weaknesses' value={weakness} onChange={(e)=> setWeakness(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Type</label>
                <select name="type" required onChange={(e)=> setType(e.target.value)} >
                    <option value="" selected disabled hidden>Choose type</option>
                    <option value="spirit">Spirit</option>
                    <option value="demon">Demon</option>
                    <option value="monster">Monster</option>
                </select>
            </div>
            <input type='submit' value='Save creature' className="btn btn-block"  />
        </form>
    )
}

export default AddCreature