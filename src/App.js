import { useEffect, useState } from "react";
import './App.css';
import Header from './components/Header';
import Creatures from './components/Creatures';
import AddCreature from "./components/AddCreature";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App=()=> {
  const [creatures, setCreatures] = useState([])

  useEffect(()=>{
    const getItems = async() => {
      const itemsFromServer = await fetchItems()
      setCreatures(itemsFromServer)
    }

    getItems()
  }, [])

  //fetch creatures
  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/creatures')
    const data = await res.json()
    return data;
  }

  const fetchItem = async (id) => {
    const res = await fetch(`http://localhost:5000/creatures/${id}`)
    const data = await res.json()
    return data;
  }

  const addItem = async(task)=>{
    const res = await fetch('http://localhost:5000/creatures', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setCreatures([...creatures, data])
  }

  const deleteItem=async(id)=>{
    await fetch(`http://localhost:5000/creatures/${id}`, {
      method: 'DELETE',
    })
    setCreatures(creatures.filter((task)=> task.id!==id));
  }

  return (
    <Router basename="/">
      <Header title="The Hunter's Lore" />
      <div className='container'>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/creatures' element={<Creatures creatures={creatures} onDelete={deleteItem}  />} />
          <Route path='add-creature' element={<AddCreature onAdd={addItem} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
